import * as THREE from "three";

const width = 800;
const height = 500;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 5000);
camera.position.set(200, 200, 200);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

camera.lookAt(0, 0, 0);

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
