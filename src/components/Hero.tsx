import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 2000; i++) {
      const x = THREE.MathUtils.randFloatSpread(200);
      const y = THREE.MathUtils.randFloatSpread(200);
      const z = THREE.MathUtils.randFloatSpread(200);
      vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.5,
      transparent: true,
      opacity: 0.8
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center relative p-8">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-20 max-w-4xl mx-auto px-4 animate-fade-in flex flex-col justify-center items-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
          Start Earning Serious, Reliable WIFI Money.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          A User-Generated Content Agency designed to help you earn a stable monthly income by creating short-form videos.
        </p>
        <p className="mt-6 text-xl sm:text-2xl font-semibold text-white">
          Quit your job and earn thousands monthly by providing valuable content for brands.
        </p>
        <a 
          href="#join" 
          className="mt-8 inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-xl"
        >
          Join MediaLabs
        </a>
      </div>
    </section>
  );
};

export default Hero;