import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from "https://cdn.rawgit.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js"

const ThreeText = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Create 3D text
    const fontLoader = new THREE.FontLoader();
    fontLoader.load('../Assets/roboto_regular.json', (font) => {
      const textGeometry = new THREE.TextGeometry('Hello, 3D!', {
        font: font,
        size: 1,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });
      const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff00ff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      scene.add(textMesh);
    });

    // Set up the camera position
    camera.position.z = 5;

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    // Add ambient light
    scene.add(new THREE.AmbientLight(0x404040));

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up the scene and memory when the component unmounts
      sceneRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef}></div>;
};

export default ThreeText;
