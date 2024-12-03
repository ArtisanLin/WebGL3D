import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js"

const container = document.documentElement
// TODO: 将宽高设置与屏幕尺寸相同
const width = container.clientWidth;
const height = container.clientHeight;

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 5000);
export const renderer = new THREE.WebGLRenderer();

camera.position.set(200, 200, 200);
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
export const mesh = new THREE.Mesh(geometry, material);

const axesHelper = new THREE.AxesHelper(150);

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(mesh);
scene.add(axesHelper)

mesh.position.set(0, 10, 0);
camera.lookAt(mesh.position);

export const fnList = []


function render() {
    fnList.forEach(fn => fn())
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}

render()

export default {
    camera, scene, renderer
}