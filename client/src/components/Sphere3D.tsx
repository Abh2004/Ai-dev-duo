import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Sphere3DProps {
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
  radius?: number;
  color?: string;
  wireframe?: boolean;
  className?: string;
}

export default function Sphere3D({
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0.005, y: 0.01, z: 0 },
  radius = 1,
  color = '#0066FF',
  wireframe = false,
  className = '',
}: Sphere3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    // Adjust renderer size to container
    const updateSize = () => {
      if (containerRef.current && rendererRef.current && cameraRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        
        rendererRef.current.setSize(width, height);
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
    };

    // Initial size
    updateSize();

    // Append renderer to container
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: color,
      wireframe: wireframe,
      emissive: wireframe ? color : undefined,
      emissiveIntensity: wireframe ? 0.3 : 0,
      transparent: true,
      opacity: wireframe ? 0.8 : 1,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(position.x || 0, position.y || 0, position.z || 0);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 5);
    scene.add(directionalLight);

    // Animation function
    const animate = () => {
      if (sphereRef.current && sceneRef.current && cameraRef.current && rendererRef.current) {
        sphereRef.current.rotation.x += rotation.x || 0;
        sphereRef.current.rotation.y += rotation.y || 0;
        sphereRef.current.rotation.z += rotation.z || 0;
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      frameRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    window.addEventListener('resize', updateSize);
    
    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (sphereRef.current) {
        if (sphereRef.current.geometry) {
          sphereRef.current.geometry.dispose();
        }
        
        if (sphereRef.current.material) {
          if (Array.isArray(sphereRef.current.material)) {
            sphereRef.current.material.forEach(m => m.dispose());
          } else {
            sphereRef.current.material.dispose();
          }
        }
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [position, rotation, radius, color, wireframe]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}
    />
  );
}