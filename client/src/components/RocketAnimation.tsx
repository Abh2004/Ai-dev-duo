import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface RocketAnimationProps {
  className?: string;
}

export default function RocketAnimation({ className = '' }: RocketAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  // Three.js setup
  useEffect(() => {
    if (isInitialized.current || !containerRef.current || !canvasRef.current) return;
    isInitialized.current = true;

    // Initialize scene, camera, renderer
    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        rocket: THREE.Object3D | null = null;

    const createScene = () => {
      const HEIGHT = window.innerHeight;
      const WIDTH = window.innerWidth;

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x1a032b, 10, 1500);

      const aspectRatio = WIDTH / HEIGHT;
      const fieldOfView = 60;
      const nearPlane = 1;
      const farPlane = 10000;
      
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );

      camera.position.x = 0;
      camera.position.z = 500;
      camera.position.y = -10;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;

      if (canvasRef.current) {
        // Clear previous canvas if it exists
        canvasRef.current.innerHTML = '';
        canvasRef.current.appendChild(renderer.domElement);
      }

      window.addEventListener('resize', handleWindowResize, false);

      // Load rocket model
      const loader = new GLTFLoader();
      loader.load('/rocket.gltf', (gltf) => {
        rocket = gltf.scene;
        rocket.position.y = 50;
        scene.add(rocket);
      });
    };

    const handleWindowResize = () => {
      const HEIGHT = window.innerHeight;
      const WIDTH = window.innerWidth;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    };

    const createLights = () => {
      const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);

      const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
      directionalLight.position.set(-300, 0, 600);

      const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
      pointLight.position.set(200, -100, 50);

      scene.add(ambientLight, directionalLight, pointLight);
    };

    const targetRocketPosition = 40;
    const animationDuration = 2000;

    const loop = () => {
      const t = (Date.now() % animationDuration) / animationDuration;
      renderer.render(scene, camera);

      const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);
      if (rocket) {
        rocket.rotation.y += 0.1;
        rocket.position.y = delta;
      }

      requestAnimationFrame(loop);
    };

    const main = () => {
      createScene();
      createLights();
      renderer.render(scene, camera);
      loop();
    };

    main();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      if (canvasRef.current) {
        canvasRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`rocket-animation-container relative ${className}`}>
      <div className="fire-wrapper">
        <img className="fire" src="/fire.svg" alt="Rocket fire" />
      </div>

      <div className="rain rain1"></div>
      <div className="rain rain2">
        <div className="drop drop2"></div>
      </div>
      <div className="rain rain3"></div>
      <div className="rain rain4"></div>
      <div className="rain rain5">
        <div className="drop drop5"></div>
      </div>
      <div className="rain rain6"></div>
      <div className="rain rain7"></div>
      <div className="rain rain8">
        <div className="drop drop8"></div>
      </div>
      <div className="rain rain9"></div>
      <div className="rain rain10"></div>
      <div className="drop drop11"></div>
      <div className="drop drop12"></div>
      
      <div ref={canvasRef} id="canvas"></div>
    </div>
  );
}