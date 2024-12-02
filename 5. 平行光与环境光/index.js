import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js"

const width = 800;
const height = 500;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 5000);
camera.position.set(200, 200, 200);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

const geometry = new THREE.BoxGeometry(100, 100, 100);

// 基础网格材质
const material = new THREE.MeshLambertMaterial({
    color: "red",
    // QUE: 对透明度的修改无用
    opacity: 0.4,
    visible: true
});

// 基础网格模型
const mesh = new THREE.Mesh(geometry, material);
const axesHelper = new THREE.AxesHelper(150);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => renderer.render(scene, camera) )

scene.add(mesh);
scene.add(axesHelper)
scene.add(pointLight);

mesh.position.set(0, 10, 0);
camera.lookAt(mesh.position);

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
