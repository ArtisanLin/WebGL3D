import {camera, scene, renderer, mesh } from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)


const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    wireframe:true,//线条模式渲染mesh对应的三角形数据
});

// const circle = new THREE.SphereGeometry(50, 32, 16);
const circle = new THREE.SphereGeometry(50, 8, 8);
const circleMesh = new THREE.Mesh(circle, material)
circleMesh.position.set(0, 0, 0);


// 环境光
scene.add(pointLight)
scene.add(ambient)
scene.add(circleMesh)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
