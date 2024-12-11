import {camera, scene, renderer, mesh} from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

// 通过描述顶点位置，在 BufferGeometry 上 自定义几何体
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    0, 0, 10, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
])
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;
// 将原本物体的几何体属性更换，借用其材质属性

const material = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 10,
})

const custom = new THREE.Points(geometry, material)

// 环境光
scene.add(pointLight)
scene.add(ambient)
// scene.add(mesh)
scene.add(custom)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
