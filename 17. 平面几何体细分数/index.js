import {camera, scene, renderer, mesh} from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    wireframe:true,//线条模式渲染mesh对应的三角形数据
});

const plane = new THREE.PlaneGeometry(100, 100, 2, 2);
// const plane = new THREE.PlaneGeometry(100, 100, 2, 1);
// const plane = new THREE.PlaneGeometry(100, 100, 1, 1);
const planeMesh = new THREE.Mesh(plane, material)
planeMesh.position.set(0, -100, -100);

// 环境光
scene.add(pointLight)
scene.add(ambient)
scene.add(planeMesh)
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
