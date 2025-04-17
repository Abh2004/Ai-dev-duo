import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Cube3DProps {
  position?: {
    x?: number;
    y?: number;
    z?: number;
  };
  rotation?: {
    x?: number;
    y?: number;
    z?: number;
  };
  size?: number;
  color?: string;
  wireframe?: boolean;
  className?: string;
}

export default function Cube3D({
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0.01, y: 0.01, z: 0 },
  size = 1,
  color = '#0066FF',
  wireframe = true,
  className = '',
}: Cube3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cubeGroupRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup with higher quality
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true, // Transparent background
      precision: 'highp'
    });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Better quality but limited for performance
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a group to hold all cube elements
    const cubeGroup = new THREE.Group();
    cubeGroupRef.current = cubeGroup;
    scene.add(cubeGroup);
    
    // Main cube with better material
    const geometry = new THREE.BoxGeometry(size, size, size);
    
    const cubeMaterial = wireframe 
      ? new THREE.MeshBasicMaterial({
          color: new THREE.Color(color),
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        })
      : new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(color),
          metalness: 0.3,
          roughness: 0.2,
          transparent: true,
          opacity: 0.7,
          side: THREE.DoubleSide,
          transmission: 0.95, // Glass effect
          reflectivity: 1,
          clearcoat: 1
        });
    
    const cube = new THREE.Mesh(geometry, cubeMaterial);
    cubeGroup.add(cube);
    
    // Add edge highlighting for better definition
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(color), 
      transparent: true,
      opacity: 0.9,
    });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    cubeGroup.add(edges);
    
    // Add inner cube with glow for depth
    const innerGeometry = new THREE.BoxGeometry(size * 0.7, size * 0.7, size * 0.7);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.3,
    });
    const innerCube = new THREE.Mesh(innerGeometry, innerMaterial);
    cubeGroup.add(innerCube);
    
    // Add point light inside for glow effect
    const pointLight = new THREE.PointLight(color, 1, 10);
    pointLight.position.set(0, 0, 0);
    cubeGroup.add(pointLight);
    
    // Set initial position
    cubeGroup.position.set(position.x || 0, position.y || 0, position.z || 0);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Add opposite side light for balance
    const backLight = new THREE.DirectionalLight(0x8888ff, 0.5);
    backLight.position.set(-1, -1, -1);
    scene.add(backLight);

    // Animation loop with more dynamic motion
    const animate = () => {
      if (!cubeGroupRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      const elapsedTime = clockRef.current.getElapsedTime();
      
      // Dynamic motion patterns
      const rotX = rotation.x || 0.01;
      const rotY = rotation.y || 0.01;
      const rotZ = rotation.z || 0;
      
      // Add oscillating motion
      const oscillation = Math.sin(elapsedTime * 0.5) * 0.3;
      
      cubeGroupRef.current.rotation.x += rotX * (1 + oscillation * 0.2);
      cubeGroupRef.current.rotation.y += rotY * (1 + oscillation * 0.1);
      if (rotZ) cubeGroupRef.current.rotation.z += rotZ;
      
      // Make inner cube pulse
      if (innerCube) {
        const pulseFactor = 0.9 + Math.sin(elapsedTime * 2) * 0.1;
        innerCube.scale.set(pulseFactor, pulseFactor, pulseFactor);
      }
      
      // Adjust point light intensity for glow effect
      if (pointLight) {
        pointLight.intensity = 0.7 + Math.sin(elapsedTime * 3) * 0.3;
      }
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    
    animate();

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

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose resources
      if (cubeGroupRef.current) {
        cubeGroupRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          }
        });
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [position, rotation, size, color, wireframe]);

  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
}