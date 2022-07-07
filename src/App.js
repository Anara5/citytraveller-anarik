import './App.css';
import CityTravel from './components/CityTravel';
import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import React from 'react';
import earthImg from './background/earthmap1k.jpg';
import gsap from 'gsap';


function App() {
  return (
    <>
      <CityTravel />
    </>
  );
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(
  { antialias: true, alpha: true }
);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(earthImg),
  }),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().load(earthImg)
      }
    }
  })
);

scene.add(sphere);
sphere.scale.set(1.0, 1.0, 1.0);

camera.position.z = 8;

const group = new THREE.Group();
group.add(sphere);
scene.add(group);

const mouse = {
  x: undefined,
  y: undefined
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.003;
  group.rotation.y += 0.003;
  gsap.to(group.rotation, {
    x: -mouse.y * 0.5,
    y: mouse.x * 0.5,
    duration: 5,
  })
}
animate();

window.self.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

export default App;
