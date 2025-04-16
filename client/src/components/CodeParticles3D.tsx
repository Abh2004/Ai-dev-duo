import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

interface CodeParticles3DProps {
  className?: string;
  color?: string;
}

export default function CodeParticles3D({ 
  className = '', 
  color = '#0066FF'
}: CodeParticles3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const codeTexts = useRef<THREE.Mesh[]>([]);
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

    // Create background particles
    const createParticles = () => {
      const particleCount = 500;
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const colors = new Float32Array(particleCount * 3);
      const speeds = new Float32Array(particleCount);
      
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
        
        // Random sizes weighted towards smaller particles
        sizes[i] = Math.random() * 1.5 + 0.5;
        
        // Alternate between main color and white
        const particleColor = Math.random() > 0.7 ? mainColor : secondaryColor;
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
      
      // Custom shader material for better looking particles
      const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pixelRatio: { value: renderer.getPixelRatio() }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          attribute float speed;
          uniform float time;
          uniform float pixelRatio;
          varying vec3 vColor;
          
          void main() {
            vColor = color;
            
            // Animate vertical position
            vec3 pos = position;
            pos.y = mod(pos.y - time * speed * 15.0, 200.0) - 100.0;
            
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
          
          void main() {
            // Create soft circular particle
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(gl_PointCoord, center);
            if (dist > 0.5) discard;
            
            // Add soft edge and glow
            float intensity = 1.0 - dist * 2.0;
            intensity = pow(intensity, 1.2);
            
            gl_FragColor = vec4(vColor, intensity);
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
    
    // Create floating code snippets
    const createCodeSnippets = () => {
      const codeSnippets = [
        "function app() {",
        "  return (",
        "    <Component />",
        "  );",
        "}",
        "const data = api.get();",
        "async function init() {",
        "class Service {",
        "interface Props {",
        "export default App;",
        "<div className=''>",
        "npm install",
        "git commit -m 'fix'",
        "const [state, setState]",
        "useEffect(() => {",
        "@tailwind base;",
        "docker-compose up",
        "import React from 'react';"
      ];
      
      const fontLoader = new FontLoader();
      
      // Try loading the font
      fontLoader.load('/node_modules/three/examples/fonts/helvetiker_regular.typeface.json', 
      (font: any) => {
        codeSnippets.forEach((snippet, index) => {
          const textGeometry = new TextGeometry(snippet, {
            font: font,
            size: 3,
            depth: 0.1,
            curveSegments: 4,
            bevelEnabled: false
          });
          
          // Create gradient material
          const textMaterial = new THREE.ShaderMaterial({
            uniforms: {
              color1: { value: new THREE.Color(color) },
              color2: { value: new THREE.Color('#ffffff') },
              time: { value: 0 }
            },
            vertexShader: `
              varying vec2 vUv;
              
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform vec3 color1;
              uniform vec3 color2;
              uniform float time;
              varying vec2 vUv;
              
              void main() {
                // Animated gradient
                float pulse = sin(time * 2.0 + vUv.x * 3.0) * 0.5 + 0.5;
                vec3 finalColor = mix(color1, color2, vUv.x * 0.8 + pulse * 0.2);
                
                // Add subtle scan line effect
                float scanLine = sin(vUv.y * 40.0 + time * 5.0) * 0.05 + 0.95;
                
                gl_FragColor = vec4(finalColor * scanLine, 0.8);
              }
            `,
            transparent: true,
            depthWrite: false
          });
          
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);
          textGeometry.computeBoundingBox();
          
          // Center pivot point
          if (textGeometry.boundingBox) {
            const width = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
            textMesh.position.x = -width / 2;
          }
          
          // Random position
          textMesh.position.x += (Math.random() - 0.5) * 100;
          textMesh.position.y = (Math.random() - 0.5) * 100;
          textMesh.position.z = -30 - Math.random() * 50;
          
          // Slight random rotation
          textMesh.rotation.x = (Math.random() - 0.5) * 0.2;
          textMesh.rotation.y = (Math.random() - 0.5) * 0.2;
          textMesh.rotation.z = (Math.random() - 0.5) * 0.1;
          
          scene.add(textMesh);
          codeTexts.current.push(textMesh);
        });
      });
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
    createParticles();
    createCodeSnippets();
    createLighting();
    
    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !particlesRef.current) return;
      
      const elapsedTime = clockRef.current.getElapsedTime();
      
      // Update particle shader time uniform
      const particleMaterial = particlesRef.current.material as THREE.ShaderMaterial;
      particleMaterial.uniforms.time.value = elapsedTime;
      
      // Animate code snippets
      codeTexts.current.forEach((textMesh, index) => {
        // Gently move up and down
        textMesh.position.y += Math.sin(elapsedTime * 0.5 + index) * 0.03;
        
        // Slow rotation
        textMesh.rotation.y += 0.001;
        
        // Update shader time uniform
        const material = textMesh.material as THREE.ShaderMaterial;
        if (material.uniforms && material.uniforms.time) {
          material.uniforms.time.value = elapsedTime;
        }
      });
      
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
      
      codeTexts.current.forEach(textMesh => {
        textMesh.geometry.dispose();
        (textMesh.material as THREE.Material).dispose();
        scene.remove(textMesh);
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [color]);

  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
}