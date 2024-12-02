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
});

// 基础网格模型
const mesh = new THREE.Mesh(geometry, material);

const axesHelper = new THREE.AxesHelper(150);

// 添加光源
const pointLight = new THREE.PointLight(0xffffff, 40000);

const controls = new OrbitControls(camera, renderer.domElement);

controls.addEventListener('change', () => {
    console.info('相机参数: ', camera.position)
    renderer.render(scene, camera)
} )

pointLight.position.set(400, 200, 300);
// 光源强度
pointLight.intensity = 40000;
// 光源的衰减，默认为2, 0 为永不衰减
pointLight.decay = 1.5

scene.add(mesh);
scene.add(axesHelper)
scene.add(pointLight);

mesh.position.set(0, 10, 0);
camera.lookAt(mesh.position);

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
