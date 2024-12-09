import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js"
import Stats from 'three/addons/libs/stats.module.js';

/** 全屏渲染 && 动态填充 ------- start **/
const width = window.innerWidth
const height = window.innerHeight
export const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

window.onresize = function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 相机观察口的长宽之比 aspect
    camera.aspect = window.innerWidth / window.innerHeight;
    // 渲染器执行render方法的时候，会读取相机对象的投影矩阵属性 projectionMatrix
    // 但是不会渲染每一帧，就通过相机的属性计算投影矩阵
    // NOTE: 如果相机的一些属性发生了变化，需要以这个函数更新相机的投影矩阵
    camera.updateProjectionMatrix();
}
/** 全屏渲染 && 动态填充 ------- end **/


export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 5000);

camera.position.set(200, 200, 200);

const geometry = new THREE.BoxGeometry(100, 100, 100);

// 基础网格材质
export const material = new THREE.MeshLambertMaterial({
    color: "red",
    // QUE: 对透明度的修改无用
    opacity: 0.4,
    visible: true
});

// 基础网格模型
export const mesh = new THREE.Mesh(geometry, material);

const axesHelper = new THREE.AxesHelper(150);

const controls = new OrbitControls(camera, renderer.domElement);
const stats = new Stats();
// stats.domElement显示：渲染帧率  刷新频率,一秒渲染次数
// stats.setMode(0);//默认模式

//stats.domElement显示：渲染周期 渲染一帧多长时间(单位：毫秒ms)
stats.setMode(2);

document.body.appendChild(stats.domElement);

scene.add(axesHelper)

mesh.position.set(0, 10, 0);
camera.lookAt(mesh.position);

export const fnList = []


function render() {
    fnList.forEach(fn => fn())
    renderer.render(scene, camera);
    stats.update()
    requestAnimationFrame(render)
}

render()