import {renderer, camera, scene, mesh} from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

// 环境光
scene.add(pointLight)
scene.add(ambient)
scene.add(mesh)

renderer.antialias = false

renderer.setPixelRatio(window.devicePixelRatio);
console.info('设备像素比', window.devicePixelRatio)

renderer.setClearColor(0x444444, 1);
// 渲染器背景色
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
