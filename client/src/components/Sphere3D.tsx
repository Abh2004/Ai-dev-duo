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
  rotation = { x: 0.01, y: 0.01, z: 0 },
  radius = 1,
  color = '#0066FF',
  wireframe = true,
  className = '',
}: Sphere3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const frameIdRef = useRef<number | null>(null);

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

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Transparent background
    });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: wireframe,
      transparent: true,
      opacity: 0.6,
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(position.x || 0, position.y || 0, position.z || 0);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      if (!sphereRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      sphereRef.current.rotation.x += rotation.x || 0.01;
      sphereRef.current.rotation.y += rotation.y || 0.01;
      if (rotation.z) sphereRef.current.rotation.z += rotation.z;
      
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
      if (sphereRef.current) {
        if (sphereRef.current.geometry) sphereRef.current.geometry.dispose();
        if (sphereRef.current.material) {
          if (Array.isArray(sphereRef.current.material)) {
            sphereRef.current.material.forEach(material => material.dispose());
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

  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
}