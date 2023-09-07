"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { useLoader } from '@react-three/fiber';

const ThreeText = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  sceneRef.current.appendChild(renderer.domElement);


  // Create 3D text
  const font = useLoader(FontLoader, '../Assets/roboto_regular.json')
  const textMeshRef = useRef();

  useEffect(() => {
    const textGeometry = new THREE.TubeGeometry('Welcome to the Website!', {
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
    textMeshRef.current = textMesh;
  }, [font]);


  // Set up the camera position
  camera.position.z = 5;

  // Add lighting
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 3, 5);
  scene.add(light);

  // Add ambient light
  scene.add(new THREE.AmbientLight(0x404040));

  // Animation loop
  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the text mesh
      textMesh.rotation.x += 0.01;
      textMesh.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();
  }, [])

  const currentView = 0;


  if (!textMeshRef.length) {
    return (
      <group>
        {textMeshRef.current && <primitive object={textMeshRef.current} />}
      </group>
    )
  }
  else{
    return(
      <>Your browser doesn't support webGL heheheh</>
    )
  }


}


export default ThreeText;
