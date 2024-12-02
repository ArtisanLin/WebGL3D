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

// NOTE: 漫反射材质
const material = new THREE.MeshLambertMaterial({
    color: "red",
    opacity: 0.3
});

// 基础网格模型
const mesh = new THREE.Mesh(geometry, material);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => renderer.render(scene, camera) )

// 添加光源
const pointLight = new THREE.PointLight(0xffffff, 1);
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)

pointLight.position.set(400, 200, 200);
pointLight.intensity = 4000;
pointLight.decay = 1

const axesHelper = new THREE.AxesHelper(150);

scene.add(mesh);
scene.add(axesHelper);
scene.add(pointLight)
scene.add(pointLightHelper)
scene.add(controls)

mesh.position.set(0, 10, 0);
camera.lookAt(mesh.position);

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
