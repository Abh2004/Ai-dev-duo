import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NetworkGraph3DProps {
  className?: string;
  nodeCount?: number;
  color?: string;
}

export default function NetworkGraph3D({ 
  className = '', 
  nodeCount = 50,
  color = '#0066FF' 
}: NetworkGraph3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const nodesRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup with wider field of view
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;
    cameraRef.current = camera;

    // Renderer setup with higher quality
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      precision: 'highp'
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create nodes
    const nodePositions: number[] = [];
    const nodeConnections: [number, number][] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    
    // Helper function to create random nodes
    const createNodes = () => {
      for (let i = 0; i < nodeCount; i++) {
        // Create nodes in a sphere-like distribution
        const radius = 20 + Math.random() * 30;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        nodePositions.push(x, y, z);
        
        // Add random velocity for animation
        nodeVelocities.push(new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        ));
      }
      
      // Create connections between nearby nodes
      for (let i = 0; i < nodeCount; i++) {
        const pos1 = new THREE.Vector3(
          nodePositions[i * 3],
          nodePositions[i * 3 + 1],
          nodePositions[i * 3 + 2]
        );
        
        // Connect to 2-5 nearest nodes
        const connections = 2 + Math.floor(Math.random() * 4);
        const distances: { index: number, distance: number }[] = [];
        
        for (let j = 0; j < nodeCount; j++) {
          if (i === j) continue;
          
          const pos2 = new THREE.Vector3(
            nodePositions[j * 3],
            nodePositions[j * 3 + 1],
            nodePositions[j * 3 + 2]
          );
          
          const distance = pos1.distanceTo(pos2);
          distances.push({ index: j, distance });
        }
        
        // Sort by distance and get the closest ones
        distances.sort((a, b) => a.distance - b.distance);
        for (let k = 0; k < Math.min(connections, distances.length); k++) {
          if (distances[k].distance < 35) { // Only connect if not too far
            nodeConnections.push([i, distances[k].index]);
          }
        }
      }
    };
    
    createNodes();
    
    // Create node geometry and material
    const nodesGeometry = new THREE.BufferGeometry();
    nodesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
    
    // Node material with custom shader for better glow
    const nodesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(color) },
        time: { value: 0 }
      },
      vertexShader: `
        uniform float time;
        varying float vDistance;
        
        void main() {
          vDistance = length(position) / 50.0;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 8.0 * (1.0 - vDistance * 0.5) * (sin(time + vDistance * 10.0) * 0.25 + 0.75);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vDistance;
        
        void main() {
          float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
          if (distanceFromCenter > 0.5) discard; // Create circular points
          
          // Create soft glow
          float intensity = 1.0 - distanceFromCenter * 2.0;
          intensity = pow(intensity, 1.5);
          
          // Mix with distance-based brightness
          float brightnessScale = 1.0 - vDistance * 0.8;
          
          gl_FragColor = vec4(color, intensity * brightnessScale);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
    scene.add(nodes);
    nodesRef.current = nodes;
    
    // Create connections between nodes
    const linesPositions: number[] = [];
    for (let i = 0; i < nodeConnections.length; i++) {
      const [index1, index2] = nodeConnections[i];
      
      linesPositions.push(
        nodePositions[index1 * 3], nodePositions[index1 * 3 + 1], nodePositions[index1 * 3 + 2],
        nodePositions[index2 * 3], nodePositions[index2 * 3 + 1], nodePositions[index2 * 3 + 2]
      );
    }
    
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3));
    
    // Line material with custom shader for animated flow effect
    const linesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(color) },
        time: { value: 0 }
      },
      vertexShader: `
        attribute float lineDistance;
        varying float vLineDistance;
        uniform float time;
        
        void main() {
          vLineDistance = position.y * 0.05;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying float vLineDistance;
        
        void main() {
          float pulse = sin((vLineDistance + time) * 10.0) * 0.5 + 0.5;
          float alpha = 0.3 + pulse * 0.3;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);
    linesRef.current = lines;
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add some point lights for depth
    const createPointLight = (color: string, position: THREE.Vector3, intensity: number) => {
      const light = new THREE.PointLight(color, intensity, 100);
      light.position.copy(position);
      scene.add(light);
      return light;
    };
    
    const lights = [
      createPointLight(color, new THREE.Vector3(20, 20, 20), 1),
      createPointLight('#ffffff', new THREE.Vector3(-30, 10, 20), 0.8),
      createPointLight('#4444ff', new THREE.Vector3(0, -30, -20), 0.6)
    ];
    
    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current || 
          !nodesRef.current || !linesRef.current) return;
      
      const elapsedTime = clockRef.current.getElapsedTime();
      
      // Update time uniform for shaders
      (nodesMaterial as THREE.ShaderMaterial).uniforms.time.value = elapsedTime;
      (linesMaterial as THREE.ShaderMaterial).uniforms.time.value = elapsedTime;
      
      // Animate node positions
      const positionAttribute = nodesGeometry.getAttribute('position') as THREE.BufferAttribute;
      
      for (let i = 0; i < nodeCount; i++) {
        // Get current position
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);
        
        // Add velocity with boundary check
        const velocity = nodeVelocities[i];
        const newX = x + velocity.x;
        const newY = y + velocity.y;
        const newZ = z + velocity.z;
        
        // Keep within bounds (soft boundary)
        const distance = Math.sqrt(newX * newX + newY * newY + newZ * newZ);
        const maxDistance = 60;
        
        if (distance > maxDistance) {
          // Reverse direction if hitting boundary
          velocity.x *= -1;
          velocity.y *= -1;
          velocity.z *= -1;
        }
        
        // Update position
        positionAttribute.setXYZ(i, 
          x + velocity.x, 
          y + velocity.y, 
          z + velocity.z
        );
      }
      
      positionAttribute.needsUpdate = true;
      
      // Update line positions to match nodes
      const linePositionAttribute = linesGeometry.getAttribute('position') as THREE.BufferAttribute;
      let lineIndex = 0;
      
      for (let i = 0; i < nodeConnections.length; i++) {
        const [index1, index2] = nodeConnections[i];
        
        // Get updated node positions
        const x1 = positionAttribute.getX(index1);
        const y1 = positionAttribute.getY(index1);
        const z1 = positionAttribute.getZ(index1);
        
        const x2 = positionAttribute.getX(index2);
        const y2 = positionAttribute.getY(index2);
        const z2 = positionAttribute.getZ(index2);
        
        // Update line vertices
        linePositionAttribute.setXYZ(lineIndex++, x1, y1, z1);
        linePositionAttribute.setXYZ(lineIndex++, x2, y2, z2);
      }
      
      linePositionAttribute.needsUpdate = true;
      
      // Slowly rotate the entire scene for a more dynamic view
      scene.rotation.y = elapsedTime * 0.05;
      scene.rotation.x = Math.sin(elapsedTime * 0.025) * 0.1;
      
      // Update lights
      lights[0].position.x = 40 * Math.sin(elapsedTime * 0.3);
      lights[0].position.z = 40 * Math.cos(elapsedTime * 0.3);
      
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose materials and geometries
      if (nodesRef.current) {
        nodesRef.current.geometry.dispose();
        (nodesRef.current.material as THREE.Material).dispose();
      }
      
      if (linesRef.current) {
        linesRef.current.geometry.dispose();
        (linesRef.current.material as THREE.Material).dispose();
      }
      
      lights.forEach(light => {
        scene.remove(light);
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [nodeCount, color]);

  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
}