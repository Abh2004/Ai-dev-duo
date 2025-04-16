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
  
  // Create rocket model (cartoon style)
  const createRocket = () => {
    const rocketGroup = new THREE.Group();
    
    // Body (rounded capsule shape to better match reference)
    // Create a group for the body to achieve a more capsule-like shape
    const bodyGroup = new THREE.Group();

    // Main body cylinder (slightly tapered)
    const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.45, 2.7, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff, // White body
      roughness: 0.6,
      metalness: 0.1,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0; // Center position
    bodyGroup.add(body);
    
    // Add a sphere at the bottom for rounded transition to thruster
    const bottomSphereGeometry = new THREE.SphereGeometry(0.45, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const bottomSphere = new THREE.Mesh(bottomSphereGeometry, bodyMaterial);
    bottomSphere.position.y = -1.35;
    bodyGroup.add(bottomSphere);
    
    // Add the body group to the rocket
    rocketGroup.add(bodyGroup);
    
    // Nose cone (red, rounded)
    const noseGeometry = new THREE.ConeGeometry(0.5, 1, 32);
    const noseMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff4757, // Red nose like in the reference
      roughness: 0.6,
      metalness: 0.1,
    });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.y = 1.85;
    rocketGroup.add(nose);
    
    // Add a small sphere at the top for a rounded tip
    const tipSphereGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const tipSphere = new THREE.Mesh(tipSphereGeometry, noseMaterial);
    tipSphere.position.y = 2.4;
    rocketGroup.add(tipSphere);
    
    // Circular window with border (like in the reference)
    const windowGeometry = new THREE.CircleGeometry(0.25, 32);
    // Create window glass with gradient-like effect for more depth
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2bbdfa, // Light blue window
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x0088cc, // Slight glow
      emissiveIntensity: 0.2,
      side: THREE.DoubleSide
    });
    
    // Window border
    const windowBorderGeometry = new THREE.RingGeometry(0.25, 0.32, 32);
    const windowBorderMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x333333, // Dark window border
      roughness: 0.4,
      metalness: 0.6,
      side: THREE.DoubleSide
    });
    
    // Create a window group for better positioning
    const windowGroup = new THREE.Group();
    const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
    windowMesh.position.z = 0.01; // Slight offset to prevent z-fighting
    windowGroup.add(windowMesh);
    
    const windowBorder = new THREE.Mesh(windowBorderGeometry, windowBorderMaterial);
    windowGroup.add(windowBorder);
    
    windowGroup.position.set(0, 0.6, 0.52); // Position on the front of the rocket
    rocketGroup.add(windowGroup);
    
    // Create curved fins like in the reference image
    const createCurvedFin = () => {
      // Create a curved shape using bezier curves
      const finShape = new THREE.Shape();
      finShape.moveTo(0, 0); // Start at rocket body
      
      // Create a curved fin shape using bezier curves to match reference
      finShape.bezierCurveTo(
        0.8, -0.4,    // control point 1
        1.0, -0.6,    // control point 2
        0.9, -0.8     // end point
      );
      finShape.bezierCurveTo(
        0.7, -0.5,    // control point 1
        0.5, 0.2,     // control point 2
        0, 0.4        // end point back at body
      );
      finShape.lineTo(0, 0); // Close shape
      
      const finGeometry = new THREE.ShapeGeometry(finShape);
      const finMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff4757, // Red fins matching nose cone
        roughness: 0.6,
        metalness: 0.1,
      });
      
      return new THREE.Mesh(finGeometry, finMaterial);
    };
    
    // Add large curved fins on either side (like in reference)
    const leftFin = createCurvedFin();
    leftFin.position.set(-0.47, -1.0, 0);
    leftFin.rotation.z = 0.1;
    rocketGroup.add(leftFin);
    
    const rightFin = createCurvedFin();
    rightFin.position.set(0.47, -1.0, 0);
    rightFin.rotation.z = -0.1;
    rightFin.rotation.y = Math.PI;
    rocketGroup.add(rightFin);
    
    // Thruster section (darker gray at bottom)
    const thrusterGroup = new THREE.Group();
    
    // Main thruster ring
    const thrusterRingGeometry = new THREE.TorusGeometry(0.45, 0.07, 16, 32);
    const thrusterMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4b4b4b, // Dark gray thruster base
      roughness: 0.4,
      metalness: 0.6,
    });
    const thrusterRing = new THREE.Mesh(thrusterRingGeometry, thrusterMaterial);
    thrusterRing.rotation.x = Math.PI / 2; // Rotate to horizontal
    thrusterRing.position.y = -1.65;
    thrusterGroup.add(thrusterRing);
    
    // Thruster interior (recessed)
    const thrusterInteriorGeometry = new THREE.CylinderGeometry(0.38, 0.38, 0.1, 32);
    const thrusterInteriorMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.7,
      metalness: 0.3,
    });
    const thrusterInterior = new THREE.Mesh(thrusterInteriorGeometry, thrusterInteriorMaterial);
    thrusterInterior.position.y = -1.7;
    thrusterGroup.add(thrusterInterior);
    
    rocketGroup.add(thrusterGroup);
    
    // Create fire (closely matching the narrower cone shape in reference)
    const fireGroup = new THREE.Group();
    fireGroup.name = "fire";
    
    // Main outer fire cone (orange) - narrower and longer like in reference
    const outerFireGeometry = new THREE.ConeGeometry(0.37, 2.2, 16);
    const outerFireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff6600, // Deep orange
      transparent: true,
      opacity: 0.9
    });
    const outerFire = new THREE.Mesh(outerFireGeometry, outerFireMaterial);
    outerFire.rotation.x = Math.PI; // Flip to point downward
    fireGroup.add(outerFire);
    
    // Wide base for the fire at thruster exit
    const baseFireGeometry = new THREE.CylinderGeometry(0.37, 0.32, 0.2, 16);
    const baseFireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff5500, // Darker orange at base
      transparent: true,
      opacity: 0.95
    });
    const baseFire = new THREE.Mesh(baseFireGeometry, baseFireMaterial);
    baseFire.rotation.x = Math.PI; // Flip to point downward
    baseFire.position.y = 1.1; // Position at the thruster exit
    fireGroup.add(baseFire);
    
    // Middle fire cone (yellow-orange) - narrower with oval shape
    const middleFireGeometry = new THREE.ConeGeometry(0.25, 1.8, 16);
    const middleFireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff9500, // Yellow-orange
      transparent: true,
      opacity: 0.95
    });
    const middleFire = new THREE.Mesh(middleFireGeometry, middleFireMaterial);
    middleFire.rotation.x = Math.PI;
    middleFire.position.y = 0.2;
    middleFire.name = "middleFire";
    fireGroup.add(middleFire);
    
    // Inner fire cone (yellow) - more elongated
    const innerFireGeometry = new THREE.ConeGeometry(0.18, 1.4, 16);
    const innerFireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffcc00, // Yellow
      transparent: true,
      opacity: 0.95
    });
    const innerFire = new THREE.Mesh(innerFireGeometry, innerFireMaterial);
    innerFire.rotation.x = Math.PI;
    innerFire.position.y = 0.4;
    innerFire.name = "innerFire";
    fireGroup.add(innerFire);
    
    // Core fire (brightest) - thin and straight like in reference
    const coreFireGeometry = new THREE.ConeGeometry(0.08, 1.1, 12);
    const coreFireMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffa0, // Light yellow/white core
      transparent: true,
      opacity: 0.95
    });
    const coreFire = new THREE.Mesh(coreFireGeometry, coreFireMaterial);
    coreFire.rotation.x = Math.PI;
    coreFire.position.y = 0.55;
    coreFire.name = "coreFire";
    fireGroup.add(coreFire);
    
    fireGroup.position.y = -2.8;
    rocketGroup.add(fireGroup);
    
    // Simple particles for fire effect
    const particlesGroup = new THREE.Group();
    particlesGroup.name = "particles";
    
    for (let i = 0; i < 20; i++) {
      // Use simple sphere particles
      const particleGeometry = new THREE.SphereGeometry(0.06 + Math.random() * 0.08, 8, 8);
      
      // Either orange or yellow particles
      const colorChoice = Math.random() > 0.5;
      const particleColor = colorChoice ? 0xff7700 : 0xffcc00;
      
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: particleColor,
        transparent: true,
        opacity: Math.random() * 0.6 + 0.3
      });
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      // Random position below thruster
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.4;
      const yOffset = -3 - Math.random() * 1.5;
      
      particle.position.set(
        Math.cos(angle) * radius,
        yOffset,
        Math.sin(angle) * radius
      );
      
      // Store original position and speed
      Object.assign(particle.userData, {
        originalY: particle.position.y,
        speed: Math.random() * 0.12 + 0.08,
        horizontalDrift: (Math.random() - 0.5) * 0.01
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
  
  // Cartoon-style lighting setup
  const addLights = (scene: THREE.Scene) => {
    // Strong ambient light for flat cartoon look
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    // Main directional light (less harsh shadows for cartoon look)
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.7);
    mainLight.position.set(2, 3, 5);
    scene.add(mainLight);
    
    // Add a subtle blue fill light for dimension
    const fillLight = new THREE.DirectionalLight(0xaaccff, 0.3);
    fillLight.position.set(-1, 1, -2);
    scene.add(fillLight);
    
    // Orange thruster glow
    const thrusterLight = new THREE.PointLight(0xff7700, 2, 5);
    thrusterLight.position.set(0, -3, 0);
    thrusterLight.name = "thrusterLight";
    scene.add(thrusterLight);
    
    // Yellow inner thruster light
    const innerThrusterLight = new THREE.PointLight(0xffcc00, 1, 3);
    innerThrusterLight.position.set(0, -2.7, 0);
    innerThrusterLight.name = "innerThrusterLight";
    scene.add(innerThrusterLight);
  };
  
  // Enhanced fire and particles animation to match the cartoon style
  const animateRocketFire = (rocket: THREE.Group) => {
    // Get the current time for animations
    const time = Date.now() * 0.001;
    
    // Animate fire group
    const fireGroup = rocket.getObjectByName("fire") as THREE.Group;
    if (fireGroup) {
      // Animate main outer fire - small subtle pulsing
      const outerFire = fireGroup.children[0] as THREE.Mesh;
      if (outerFire && outerFire.material) {
        const material = outerFire.material as THREE.MeshBasicMaterial;
        
        // Subtle pulse for the outer fire - minimal movement for cartoon-like stable look
        material.opacity = 0.85 + 0.15 * Math.sin(time * 5);
        
        // Very small scale changes for outer fire
        const outerFireScale = 0.98 + 0.04 * Math.sin(time * 3);
        outerFire.scale.set(outerFireScale, 1 + 0.05 * Math.sin(time * 4), outerFireScale);
      }
      
      // Animate base fire - steady glow at thruster exit
      const baseFire = fireGroup.children[1] as THREE.Mesh;
      if (baseFire && baseFire.material) {
        const material = baseFire.material as THREE.MeshBasicMaterial;
        
        // Pulsating glow at the base
        material.opacity = 0.9 + 0.1 * Math.sin(time * 7);
      }
      
      // Animate middle fire - medium pulsing
      const middleFire = fireGroup.getObjectByName("middleFire") as THREE.Mesh;
      if (middleFire && middleFire.material) {
        const material = middleFire.material as THREE.MeshBasicMaterial;
        
        // Medium pulse for the middle fire
        material.opacity = 0.85 + 0.15 * Math.sin(time * 8);
        
        // Medium scale changes
        const middleFireScale = 0.95 + 0.08 * Math.sin(time * 6);
        middleFire.scale.set(middleFireScale, 1 + 0.1 * Math.sin(time * 5), middleFireScale);
      }
      
      // Animate inner fire - more vibrant pulsing
      const innerFire = fireGroup.getObjectByName("innerFire") as THREE.Mesh;
      if (innerFire && innerFire.material) {
        const material = innerFire.material as THREE.MeshBasicMaterial;
        
        // More vibrant pulsing for inner fire
        material.opacity = 0.8 + 0.2 * Math.sin(time * 10);
        
        // Larger scale changes for inner fire
        const innerFireScale = 0.92 + 0.15 * Math.sin(time * 8);
        innerFire.scale.set(innerFireScale, 1 + 0.2 * Math.sin(time * 7), innerFireScale);
      }
      
      // Animate core fire (most rapid) - create the flickering effect
      const coreFire = fireGroup.getObjectByName("coreFire") as THREE.Mesh;
      if (coreFire && coreFire.material) {
        const material = coreFire.material as THREE.MeshBasicMaterial;
        
        // Rapid pulsing for core
        material.opacity = 0.85 + 0.15 * Math.sin(time * 15);
        
        // Most dynamic scale changes for the core
        const coreFireScale = 0.9 + 0.15 * Math.sin(time * 12);
        coreFire.scale.set(coreFireScale, 1 + 0.25 * Math.sin(time * 10), coreFireScale);
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