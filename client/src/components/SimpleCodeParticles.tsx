import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SimpleCodeParticlesProps {
  className?: string;
  color?: string;
}

export default function SimpleCodeParticles({ 
  className = '', 
  color = '#0066FF'
}: SimpleCodeParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
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

    // Create enhanced particles that look like code
    const createCodeParticles = () => {
      const particleCount = 800;
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const colors = new Float32Array(particleCount * 3);
      const speeds = new Float32Array(particleCount);
      const types = new Float32Array(particleCount);
      
      const mainColor = new THREE.Color(color);
      const secondaryColor = new THREE.Color(0xffffff);
      
      for (let i = 0; i < particleCount; i++) {
        // Random positions in 3D space, but concentrated in layers
        positions[i * 3] = (Math.random() - 0.5) * 200; // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
        
        // Create layered depth effect
        const layerIndex = Math.floor(Math.random() * 10);
        const layerDepth = -20 - layerIndex * 20;
        positions[i * 3 + 2] = layerDepth + (Math.random() - 0.5) * 10; // z
        
        // Vary particle sizes to create different "characters"
        const particleType = Math.random();
        types[i] = particleType;
        
        // Make some particles larger to look like code blocks
        if (particleType > 0.9) {
          // Larger particles (code blocks)
          sizes[i] = Math.random() * 3 + 2;
        } else if (particleType > 0.7) {
          // Medium particles (operators)
          sizes[i] = Math.random() * 1.5 + 1.2;
        } else {
          // Small particles (characters)
          sizes[i] = Math.random() * 1 + 0.5;
        }
        
        // Alternate between main color and white
        const particleColor = Math.random() > 0.8 ? mainColor : secondaryColor;
        colors[i * 3] = particleColor.r;
        colors[i * 3 + 1] = particleColor.g;
        colors[i * 3 + 2] = particleColor.b;
        
        // Random vertical movement speeds, faster for particles closer to camera
        speeds[i] = (Math.random() * 2 + 1) * (1 - layerIndex / 10);
      }
      
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
      geometry.setAttribute('type', new THREE.BufferAttribute(types, 1));
      
      // Custom shader material for better looking code-like particles
      const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pixelRatio: { value: renderer.getPixelRatio() }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          attribute float speed;
          attribute float type;
          
          uniform float time;
          uniform float pixelRatio;
          
          varying vec3 vColor;
          varying float vType;
          
          void main() {
            vColor = color;
            vType = type;
            
            // Animate vertical position (digital rain effect)
            vec3 pos = position;
            pos.y = mod(pos.y - time * speed * 15.0, 200.0) - 100.0;
            
            // Add some horizontal wobble for particles based on type
            if (type > 0.7) {
              pos.x += sin(time * 0.5 + pos.y * 0.1) * 2.0 * type;
            }
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            
            // Size attenuation based on distance
            float cameraDist = length(mvPosition.xyz);
            float distanceFactor = 40.0 / cameraDist;
            
            gl_PointSize = size * pixelRatio * distanceFactor;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vType;
          
          void main() {
            // Create different shapes based on type
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(gl_PointCoord, center);
            
            // Different particle shapes
            if (vType > 0.9) { 
              // Square/block particles
              if (gl_PointCoord.x < 0.2 || gl_PointCoord.x > 0.8 || 
                  gl_PointCoord.y < 0.2 || gl_PointCoord.y > 0.8) {
                discard;
              }
            } else if (vType > 0.7) {
              // Diamond-shaped particles
              if (abs(gl_PointCoord.x - 0.5) + abs(gl_PointCoord.y - 0.5) > 0.5) {
                discard;
              }
            } else {
              // Circular particles
              if (dist > 0.5) discard;
            }
            
            // Add soft edge and glow
            float intensity = 1.0 - dist * 1.5;
            intensity = pow(intensity, 1.5);
            
            // Make some particles pulse
            float pulse = 1.0;
            if (vType > 0.85) {
              pulse = sin(vType * 10.0) * 0.2 + 0.8;
            }
            
            gl_FragColor = vec4(vColor, intensity * pulse);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      
      const particles = new THREE.Points(geometry, particleMaterial);
      scene.add(particles);
      particlesRef.current = particles;
    };

    // Create lighting
    const createLighting = () => {
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      // Add point lights
      const light1 = new THREE.PointLight(color, 1, 100);
      light1.position.set(20, 30, 40);
      scene.add(light1);
      
      const light2 = new THREE.PointLight(0xffffff, 0.8, 100);
      light2.position.set(-30, -20, 30);
      scene.add(light2);
    };
    
    // Initialize the scene
    createCodeParticles();
    createLighting();
    
    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !particlesRef.current) return;
      
      const elapsedTime = clockRef.current.getElapsedTime();
      
      // Update particle shader time uniform
      const particleMaterial = particlesRef.current.material as THREE.ShaderMaterial;
      particleMaterial.uniforms.time.value = elapsedTime;
      
      // Gentle camera movement
      camera.position.x = Math.sin(elapsedTime * 0.1) * 5;
      camera.position.y = Math.cos(elapsedTime * 0.1) * 5;
      camera.lookAt(0, 0, -50);
      
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
      
      if (particlesRef.current) {
        const material = particlesRef.current.material as THREE.ShaderMaterial;
        if (material.uniforms && material.uniforms.pixelRatio) {
          material.uniforms.pixelRatio.value = rendererRef.current.getPixelRatio();
        }
      }
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
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [color]);

  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
}