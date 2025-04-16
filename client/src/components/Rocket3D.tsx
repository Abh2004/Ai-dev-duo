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
    const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2c3e50,
      roughness: 0.3,
      metalness: 0.7,
      envMapIntensity: 1.0,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    rocketGroup.add(body);
    
    // Nose cone
    const noseGeometry = new THREE.ConeGeometry(0.5, 1, 32);
    const noseMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0066ff,
      roughness: 0.2,
      metalness: 0.8,
      envMapIntensity: 1.0
    });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.y = 2;
    rocketGroup.add(nose);
    
    // Windows (multiple)
    const createWindow = (x: number, y: number, z: number, rotation: number = 0) => {
      const windowGeometry = new THREE.CircleGeometry(0.15, 32);
      const windowMaterial = new THREE.MeshPhysicalMaterial({ 
        color: 0x3498db,
        emissive: 0x0066ff,
        emissiveIntensity: 0.5,
        roughness: 0.1,
        metalness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        transmission: 0.9, // Makes it glass-like
      });
      const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
      windowMesh.position.set(x, y, z);
      windowMesh.rotation.y = rotation;
      return windowMesh;
    };
    
    // Add multiple windows around the rocket
    rocketGroup.add(createWindow(0, 0.5, 0.51));
    rocketGroup.add(createWindow(0.51, 0.7, 0, Math.PI/2));
    rocketGroup.add(createWindow(0, 0.9, -0.51, Math.PI));
    rocketGroup.add(createWindow(-0.51, 0.3, 0, -Math.PI/2));
    
    // Body details - rings
    const addBodyRing = (y: number, scale: number = 1) => {
      const ringGeometry = new THREE.TorusGeometry(0.53, 0.03, 16, 36);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0x0066ff,
        roughness: 0.3,
        metalness: 0.7,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      ring.scale.set(scale, scale, scale);
      return ring;
    };
    
    // Add decorative rings
    rocketGroup.add(addBodyRing(1.5, 1.01));
    rocketGroup.add(addBodyRing(0, 1.02));
    rocketGroup.add(addBodyRing(-1.5, 1.01));
    
    // Add logo/badge
    const badgeGeometry = new THREE.CircleGeometry(0.2, 32);
    const badgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.8,
      map: createLogoTexture(),
    });
    const badge = new THREE.Mesh(badgeGeometry, badgeMaterial);
    badge.position.set(0, 1.3, 0.505);
    rocketGroup.add(badge);
    
    // Enhanced fins
    const leftFin = createEnhancedFin();
    leftFin.position.set(-0.6, -1.3, 0);
    leftFin.rotation.z = 0.3;
    rocketGroup.add(leftFin);
    
    const rightFin = createEnhancedFin();
    rightFin.position.set(0.6, -1.3, 0);
    rightFin.rotation.z = -0.3;
    rocketGroup.add(rightFin);
    
    const backFin = createEnhancedFin();
    backFin.position.set(0, -1.3, -0.6);
    backFin.rotation.x = -0.3;
    rocketGroup.add(backFin);
    
    const frontFin = createEnhancedFin();
    frontFin.position.set(0, -1.3, 0.6);
    frontFin.rotation.x = 0.3;
    rocketGroup.add(frontFin);
    
    // Enhanced thruster
    const thrusterGroup = new THREE.Group();
    
    // Main thruster
    const thrusterGeometry = new THREE.CylinderGeometry(0.4, 0.5, 0.5, 32);
    const thrusterMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x95a5a6, 
      roughness: 0.6,
      metalness: 0.8
    });
    const thruster = new THREE.Mesh(thrusterGeometry, thrusterMaterial);
    thrusterGroup.add(thruster);
    
    // Thruster inner ring
    const thrusterInnerGeometry = new THREE.TorusGeometry(0.45, 0.03, 16, 36);
    const thrusterInnerMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      roughness: 0.2,
      metalness: 0.9,
    });
    const thrusterInner = new THREE.Mesh(thrusterInnerGeometry, thrusterInnerMaterial);
    thrusterInner.rotation.x = Math.PI / 2;
    thrusterInner.position.y = -0.25;
    thrusterGroup.add(thrusterInner);
    
    // Thruster interior (glowing)
    const thrusterInteriorGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.1, 32);
    const thrusterInteriorMaterial = new THREE.MeshStandardMaterial({
      color: 0xff3300,
      emissive: 0xff5500,
      emissiveIntensity: 0.5,
      roughness: 1.0,
      metalness: 0.0,
    });
    const thrusterInterior = new THREE.Mesh(thrusterInteriorGeometry, thrusterInteriorMaterial);
    thrusterInterior.position.y = -0.3;
    thrusterGroup.add(thrusterInterior);
    
    thrusterGroup.position.y = -1.75;
    rocketGroup.add(thrusterGroup);
    
    // Enhanced fire effects
    const fireGroup = new THREE.Group();
    fireGroup.name = "fire";
    
    // Main fire cone
    const fireGeometry = new THREE.ConeGeometry(0.4, 1.5, 32);
    const fireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff5722,
      transparent: true,
      opacity: 0.9
    });
    const fire = new THREE.Mesh(fireGeometry, fireMaterial);
    fire.rotation.x = Math.PI; // Flip to point downward
    fireGroup.add(fire);
    
    // Inner fire cone (brighter)
    const innerFireGeometry = new THREE.ConeGeometry(0.25, 1.2, 32);
    const innerFireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffcc00,
      transparent: true,
      opacity: 0.95
    });
    const innerFire = new THREE.Mesh(innerFireGeometry, innerFireMaterial);
    innerFire.rotation.x = Math.PI;
    innerFire.position.y = 0.15;
    innerFire.name = "innerFire";
    fireGroup.add(innerFire);
    
    // Core fire (brightest)
    const coreFireGeometry = new THREE.ConeGeometry(0.1, 0.8, 32);
    const coreFireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });
    const coreFire = new THREE.Mesh(coreFireGeometry, coreFireMaterial);
    coreFire.rotation.x = Math.PI;
    coreFire.position.y = 0.3;
    coreFire.name = "coreFire";
    fireGroup.add(coreFire);
    
    fireGroup.position.y = -2.75;
    rocketGroup.add(fireGroup);
    
    // Enhanced particles
    const particlesGroup = new THREE.Group();
    particlesGroup.name = "particles";
    
    // Generate more particles with variety
    for (let i = 0; i < 25; i++) {
      // Vary the particle shapes
      let particleGeometry;
      const shapeType = Math.floor(Math.random() * 3);
      
      if (shapeType === 0) {
        particleGeometry = new THREE.SphereGeometry(0.05 + Math.random() * 0.07, 8, 8);
      } else if (shapeType === 1) {
        particleGeometry = new THREE.BoxGeometry(
          0.05 + Math.random() * 0.07, 
          0.05 + Math.random() * 0.07, 
          0.05 + Math.random() * 0.07
        );
      } else {
        particleGeometry = new THREE.TetrahedronGeometry(0.07 + Math.random() * 0.08);
      }
      
      // Vary the particle colors
      const colorChoice = Math.floor(Math.random() * 3);
      let particleColor;
      
      if (colorChoice === 0) particleColor = 0xff9800; // Orange
      else if (colorChoice === 1) particleColor = 0xff5722; // Deep orange
      else particleColor = 0xffeb3b; // Yellow
      
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: particleColor,
        transparent: true,
        opacity: Math.random() * 0.6 + 0.2
      });
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      // Random position below thruster
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.5;
      const yOffset = -3 - Math.random() * 1.8;
      
      particle.position.set(
        Math.cos(angle) * radius,
        yOffset,
        Math.sin(angle) * radius
      );
      
      // Add rotation for more dynamic movement
      particle.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      
      // Store original position, speed and other animation properties
      Object.assign(particle.userData, {
        originalY: particle.position.y,
        speed: Math.random() * 0.12 + 0.06,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.1,
          y: (Math.random() - 0.5) * 0.1,
          z: (Math.random() - 0.5) * 0.1
        },
        horizontalDrift: (Math.random() - 0.5) * 0.01 // Add some sideways movement
      });
      
      particlesGroup.add(particle);
    }
    
    rocketGroup.add(particlesGroup);
    
    return rocketGroup;
  };
  
  // Create a texture for the logo
  const createLogoTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Fill background
      ctx.fillStyle = '#0066ff';
      ctx.fillRect(0, 0, 128, 128);
      
      // Draw a simple "A" logo
      ctx.fillStyle = 'white';
      ctx.font = 'bold 80px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('A', 64, 64);
      
      // Draw a small "i" next to it
      ctx.font = 'bold 40px Arial';
      ctx.fillText('i', 92, 55);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Create an enhanced fin with better shape and details
  const createEnhancedFin = () => {
    const finGroup = new THREE.Group();
    
    // Main fin shape (more aerodynamic)
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0.9, -0.6);
    finShape.lineTo(0.6, -0.2);
    finShape.lineTo(0, 1.2);
    finShape.lineTo(0, 0);
    
    const finGeometry = new THREE.ShapeGeometry(finShape);
    const finMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0066ff,
      roughness: 0.3,
      metalness: 0.7,
    });
    
    const fin = new THREE.Mesh(finGeometry, finMaterial);
    finGroup.add(fin);
    
    // Add fin detail (a ridge along the edge)
    const ridgeGeometry = new THREE.BoxGeometry(0.1, 1.4, 0.03);
    const ridgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0055dd,
      roughness: 0.3,
      metalness: 0.9,
    });
    
    const ridge = new THREE.Mesh(ridgeGeometry, ridgeMaterial);
    ridge.position.set(0.3, 0.1, 0.02);
    ridge.rotation.z = -0.2;
    finGroup.add(ridge);
    
    return finGroup;
  };
  
  // Enhanced lighting setup
  const addLights = (scene: THREE.Scene) => {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    // Key light (main directional light)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(2, 3, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);
    
    // Fill light (softer, from opposite side)
    const fillLight = new THREE.DirectionalLight(0x9eafff, 0.5);
    fillLight.position.set(-3, 2, -3);
    scene.add(fillLight);
    
    // Rim light (back light for definition)
    const rimLight = new THREE.DirectionalLight(0xaaaaff, 0.3);
    rimLight.position.set(0, -2, -5);
    scene.add(rimLight);
    
    // Thruster glow (pulsating)
    const thrusterLight = new THREE.PointLight(0xff5722, 4, 5);
    thrusterLight.position.set(0, -3, 0);
    thrusterLight.name = "thrusterLight";
    scene.add(thrusterLight);
    
    // Add a second, inner thruster light
    const innerThrusterLight = new THREE.PointLight(0xffcc00, 2, 3);
    innerThrusterLight.position.set(0, -2.7, 0);
    innerThrusterLight.name = "innerThrusterLight";
    scene.add(innerThrusterLight);
  };
  
  // Enhanced fire and particles animation
  const animateRocketFire = (rocket: THREE.Group) => {
    // Get the current time for animations
    const time = Date.now() * 0.001;
    
    // Animate fire group
    const fireGroup = rocket.getObjectByName("fire") as THREE.Group;
    if (fireGroup) {
      // Animate main fire
      const fire = fireGroup.children[0] as THREE.Mesh;
      if (fire && fire.material) {
        const material = fire.material as THREE.MeshBasicMaterial;
        
        // Pulse the fire opacity with a complex pattern
        material.opacity = 0.7 + 0.2 * Math.sin(time * 8) + 0.1 * Math.sin(time * 12);
        
        // Dynamic fire shape
        const fireScale = 0.9 + 0.15 * Math.sin(time * 5) + 0.05 * Math.sin(time * 15);
        fire.scale.set(fireScale, 1 + 0.2 * Math.sin(time * 7), fireScale);
      }
      
      // Animate inner fire (more rapid)
      const innerFire = fireGroup.getObjectByName("innerFire") as THREE.Mesh;
      if (innerFire && innerFire.material) {
        const material = innerFire.material as THREE.MeshBasicMaterial;
        
        material.opacity = 0.8 + 0.2 * Math.sin(time * 12);
        
        const innerFireScale = 0.95 + 0.25 * Math.sin(time * 9);
        innerFire.scale.set(innerFireScale, 1 + 0.3 * Math.sin(time * 10), innerFireScale);
      }
      
      // Animate core fire (most rapid)
      const coreFire = fireGroup.getObjectByName("coreFire") as THREE.Mesh;
      if (coreFire && coreFire.material) {
        const material = coreFire.material as THREE.MeshBasicMaterial;
        
        material.opacity = 0.9 + 0.1 * Math.sin(time * 20);
        
        const coreFireScale = 0.9 + 0.3 * Math.sin(time * 15);
        coreFire.scale.set(coreFireScale, 1 + 0.4 * Math.sin(time * 18), coreFireScale);
      }
    }
    
    // Animate particles
    const particles = rocket.getObjectByName("particles") as THREE.Group;
    if (particles) {
      for (let i = 0; i < particles.children.length; i++) {
        const object = particles.children[i];
        if (object instanceof THREE.Mesh) {
          // Move particle down with speed
          object.position.y -= object.userData.speed;
          
          // Add sideways drift for more dynamic movement
          object.position.x += object.userData.horizontalDrift;
          object.position.z += object.userData.horizontalDrift * 0.7;
          
          // Rotate the particle
          if (object.userData.rotationSpeed) {
            object.rotation.x += object.userData.rotationSpeed.x;
            object.rotation.y += object.userData.rotationSpeed.y;
            object.rotation.z += object.userData.rotationSpeed.z;
          }
          
          // Calculate distance from origin for effect intensity
          const distanceFromOrigin = object.position.y - object.userData.originalY;
          
          // Decrease opacity as it falls with a more dynamic pattern
          if (object.material instanceof THREE.MeshBasicMaterial) {
            // Pulsating opacity effect
            const pulseFactor = 0.1 * Math.sin(Date.now() * 0.01 + i * 0.5);
            const baseOpacity = Math.max(0, (object.userData.originalY - object.position.y) / 2.5);
            object.material.opacity = baseOpacity + pulseFactor;
            
            // Change color slightly as it falls - shift from yellow to orange to red
            if (distanceFromOrigin < -0.5) {
              // Interpolate color based on distance
              const colorValue = new THREE.Color();
              const startColor = new THREE.Color(0xffeb3b); // Yellow
              const endColor = new THREE.Color(0xff5722); // Deep orange
              
              const t = Math.min(1, Math.abs(distanceFromOrigin) / 1.5);
              colorValue.lerpColors(startColor, endColor, t);
              object.material.color = colorValue;
            }
          }
          
          // Also scale down as it falls away
          const scaleFactor = Math.max(0.4, 1 - Math.abs(distanceFromOrigin) / 4);
          object.scale.set(scaleFactor, scaleFactor, scaleFactor);
          
          // Reset particle if too far down
          if (object.position.y < object.userData.originalY - 2.5) {
            // Reset position
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 0.5;
            object.position.set(
              Math.cos(angle) * radius,
              object.userData.originalY,
              Math.sin(angle) * radius
            );
            
            // Reset rotation
            object.rotation.set(
              Math.random() * Math.PI * 2,
              Math.random() * Math.PI * 2,
              Math.random() * Math.PI * 2
            );
            
            // Reset material
            if (object.material instanceof THREE.MeshBasicMaterial) {
              object.material.opacity = Math.random() * 0.6 + 0.3;
              
              // Reset color
              const colorChoice = Math.floor(Math.random() * 3);
              if (colorChoice === 0) object.material.color.set(0xff9800); // Orange
              else if (colorChoice === 1) object.material.color.set(0xff5722); // Deep orange
              else object.material.color.set(0xffeb3b); // Yellow
            }
            
            // Reset scale
            object.scale.set(1, 1, 1);
            
            // Randomize speed and drift slightly
            object.userData.speed = Math.random() * 0.12 + 0.06;
            object.userData.horizontalDrift = (Math.random() - 0.5) * 0.01;
          }
        }
      }
    }
    
    // Animate thruster lights
    const thrusterLight = rocket.parent?.getObjectByName("thrusterLight") as THREE.PointLight;
    if (thrusterLight) {
      // Pulsate the light intensity
      const time = Date.now() * 0.001;
      thrusterLight.intensity = 3.5 + 1.5 * Math.sin(time * 10);
    }
    
    const innerThrusterLight = rocket.parent?.getObjectByName("innerThrusterLight") as THREE.PointLight;
    if (innerThrusterLight) {
      // Pulsate the light intensity with different frequency
      const time = Date.now() * 0.001;
      innerThrusterLight.intensity = 1.8 + 1.2 * Math.sin(time * 15);
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