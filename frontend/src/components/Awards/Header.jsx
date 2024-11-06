
"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load("/assets/banner/image1.jpg");
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const geometry = new THREE.PlaneGeometry(2 * aspectRatio, 2); 
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 1;
    
    const handleResize = () => {
      const newAspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = newAspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      plane.scale.set(newAspectRatio, 1, 1);
    };

    window.addEventListener('resize', handleResize);
    let offsetX = 0; 
    let offsetY = 0; 

    function animate() {
      requestAnimationFrame(animate);
      offsetX = Math.sin(Date.now() * 0.0001) * 0.1;  
      offsetY = Math.cos(Date.now() * 0.0001) * 0.05; 

      plane.position.x = offsetX;
      plane.position.y = offsetY;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mb-12">
      <div className="absolute top-0 left-0 w-full h-full" ref={containerRef}></div>
      <div className="absolute inset-x-0 top-20 text-center">
        <h1 className="text-yellow-500 text-4xl font-bold">Awards & recognition</h1>
        <hr className="mx-auto mt-2 w-24 border-yellow-500" />
      </div>
    </div>
  );
}
