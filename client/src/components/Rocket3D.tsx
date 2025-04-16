import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Rocket3DProps {
  className?: string;
}

export default function Rocket3D({ className = '' }: Rocket3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestIdRef = useRef<number | null>(null);
  const rocketRef = useRef<THREE.Group | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  // Animation state
  const animationStateRef = useRef({
    phase: 'launch', // 'launch', 'hover'
    launchProgress: 0,
    targetY: 0,
    hoverOffset: 0,
    hoverDirection: 1
  });
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 7;
    cameraRef.current = camera;
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    
    // Handle container resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    };
    
    // Initial size
    handleResize();
    
    // Add renderer to DOM
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);
    
    // Create rocket
    const rocket = createRocket();
    rocketRef.current = rocket;
    rocket.position.y = -10; // Start from below
    scene.add(rocket);
    
    // Add lights
    addLights(scene);
    
    // Setup resize listener
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      if (!rocketRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current) {
        requestIdRef.current = requestAnimationFrame(animate);
        return;
      }
      
      const { phase, launchProgress, hoverOffset, hoverDirection } = animationStateRef.current;
      
      // Launch animation
      if (phase === 'launch') {
        if (launchProgress < 1) {
          // Smooth easing
          const easedProgress = 1 - Math.pow(1 - launchProgress, 3);
          
          // Move rocket upward
          rocketRef.current.position.y = -10 + easedProgress * 10;
          
          // Add some rotation for effect
          rocketRef.current.rotation.z = Math.sin(launchProgress * Math.PI) * 0.1;
          
          // Update progress
          animationStateRef.current.launchProgress += 0.01;
        } else {
          // Transition to hover phase
          animationStateRef.current.phase = 'hover';
          animationStateRef.current.targetY = rocketRef.current.position.y;
        }
      }
      
      // Hover animation
      if (phase === 'hover') {
        // Update hover offset
        animationStateRef.current.hoverOffset += 0.02 * hoverDirection;
        
        // Change direction if exceeded bounds
        if (Math.abs(animationStateRef.current.hoverOffset) > 0.3) {
          animationStateRef.current.hoverDirection *= -1;
        }
        
        // Apply hover effect
        const { targetY } = animationStateRef.current;
        rocketRef.current.position.y = targetY + Math.sin(hoverOffset * Math.PI) * 0.2;
        
        // Subtle rotation
        rocketRef.current.rotation.y += 0.01;
      }
      
      // Fire animation
      animateRocketFire(rocketRef.current);
      
      // Render scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      
      // Continue animation
      requestIdRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      
      if (rendererRef.current && rendererRef.current.domElement.parentNode) {
        rendererRef.current.domElement.parentNode.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose geometries and materials
      if (rocketRef.current) {
        rocketRef.current.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            if (obj.geometry) obj.geometry.dispose();
            
            if (obj.material) {
              if (Array.isArray(obj.material)) {
                obj.material.forEach(material => material.dispose());
              } else {
                obj.material.dispose();
              }
            }
          }
        });
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);
  
  // Create rocket model
  const createRocket = () => {
    const rocketGroup = new THREE.Group();
    
    // Body (cylinder)
    const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 16);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2c3e50,
      shininess: 70,
      specular: 0x333333
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    rocketGroup.add(body);
    
    // Nose cone
    const noseGeometry = new THREE.ConeGeometry(0.5, 1, 16);
    const noseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x0066ff,
      shininess: 100,
      specular: 0x666666
    });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.y = 2;
    rocketGroup.add(nose);
    
    // Window
    const windowGeometry = new THREE.CircleGeometry(0.2, 16);
    const windowMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3498db,
      emissive: 0x0066ff,
      emissiveIntensity: 0.5,
      shininess: 100
    });
    const window = new THREE.Mesh(windowGeometry, windowMaterial);
    window.position.set(0, 0.5, 0.51);
    rocketGroup.add(window);
    
    // Left fin
    const leftFin = createFin();
    leftFin.position.set(-0.6, -1.3, 0);
    leftFin.rotation.z = 0.3;
    rocketGroup.add(leftFin);
    
    // Right fin
    const rightFin = createFin();
    rightFin.position.set(0.6, -1.3, 0);
    rightFin.rotation.z = -0.3;
    rocketGroup.add(rightFin);
    
    // Back fin
    const backFin = createFin();
    backFin.position.set(0, -1.3, -0.6);
    backFin.rotation.x = -0.3;
    rocketGroup.add(backFin);
    
    // Front fin
    const frontFin = createFin();
    frontFin.position.set(0, -1.3, 0.6);
    frontFin.rotation.x = 0.3;
    rocketGroup.add(frontFin);
    
    // Thruster
    const thrusterGeometry = new THREE.CylinderGeometry(0.4, 0.5, 0.5, 16);
    const thrusterMaterial = new THREE.MeshPhongMaterial({ color: 0x95a5a6 });
    const thruster = new THREE.Mesh(thrusterGeometry, thrusterMaterial);
    thruster.position.y = -1.75;
    rocketGroup.add(thruster);
    
    // Fire (will be animated)
    const fireGeometry = new THREE.ConeGeometry(0.4, 1.5, 16);
    const fireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff5722,
      transparent: true,
      opacity: 0.9
    });
    const fire = new THREE.Mesh(fireGeometry, fireMaterial);
    fire.position.y = -2.75;
    fire.rotation.x = Math.PI; // Flip to point downward
    fire.name = "fire"; // For animation reference
    rocketGroup.add(fire);
    
    // Small particles
    const particlesGroup = new THREE.Group();
    particlesGroup.name = "particles";
    
    for (let i = 0; i < 15; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.08, 8, 8);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xff9800,
        transparent: true,
        opacity: Math.random() * 0.6 + 0.2
      });
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      // Random position below thruster
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.4;
      particle.position.set(
        Math.cos(angle) * radius,
        -3 - Math.random() * 1.5,
        Math.sin(angle) * radius
      );
      
      // Store original position and random speed
      Object.assign(particle.userData, {
        originalY: particle.position.y,
        speed: Math.random() * 0.1 + 0.05
      });
      
      particlesGroup.add(particle);
    }
    
    rocketGroup.add(particlesGroup);
    
    return rocketGroup;
  };
  
  // Create a fin
  const createFin = () => {
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0.8, -0.5);
    finShape.lineTo(0, 1);
    finShape.lineTo(0, 0);
    
    const finGeometry = new THREE.ShapeGeometry(finShape);
    const finMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x0066ff,
      shininess: 80
    });
    
    return new THREE.Mesh(finGeometry, finMaterial);
  };
  
  // Add lights to scene
  const addLights = (scene: THREE.Scene) => {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    // Directional light (sun-like)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 2, 3);
    scene.add(directionalLight);
    
    // Point light for thruster glow
    const thrusterLight = new THREE.PointLight(0xff5722, 3, 5);
    thrusterLight.position.set(0, -3, 0);
    scene.add(thrusterLight);
  };
  
  // Animate fire and particles
  const animateRocketFire = (rocket: THREE.Group) => {
    // Animate fire
    const fire = rocket.getObjectByName("fire") as THREE.Mesh;
    if (fire && fire.material) {
      // Pulse the fire
      const material = fire.material as THREE.MeshBasicMaterial;
      material.opacity = 0.7 + Math.sin(Date.now() * 0.01) * 0.3;
      
      // Randomly scale the fire
      const fireScale = 0.9 + Math.sin(Date.now() * 0.02) * 0.2;
      fire.scale.set(fireScale, 1 + Math.random() * 0.2, fireScale);
    }
    
    // Animate particles
    const particles = rocket.getObjectByName("particles") as THREE.Group;
    if (particles) {
      for (let i = 0; i < particles.children.length; i++) {
        const object = particles.children[i];
        if (object instanceof THREE.Mesh) {
          // Move particle down
          object.position.y -= object.userData.speed;
          
          // Decrease opacity as it falls
          if (object.material instanceof THREE.MeshBasicMaterial) {
            object.material.opacity = Math.max(0, (object.userData.originalY - object.position.y) / 2);
          }
          
          // Reset particle if too far down
          if (object.position.y < object.userData.originalY - 2) {
            object.position.y = object.userData.originalY;
            if (object.material instanceof THREE.MeshBasicMaterial) {
              object.material.opacity = Math.random() * 0.6 + 0.2;
            }
          }
        }
      }
    }
  };
  
  return (
    <div 
      ref={containerRef} 
      className={`rocket-3d-container ${className}`} 
      style={{ 
        position: 'absolute',
        right: '10%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '300px',
        height: '400px',
        zIndex: 5
      }}
    />
  );
}