import {camera, scene, renderer } from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)
// 环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.5)


// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(100, 100, 100)
directionalLight.lookAt(0, 0, 0)

// 模拟镜面反射，产生一个高光效果
const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 20, //高光部分的亮度，默认30
    side: THREE.DoubleSide,
    specular: 'green'
});

const plane =new THREE.PlaneGeometry(100,50);
const planeMesh = new THREE.Mesh(plane, material)
planeMesh.position.set(0, 0, 0);

const Circle = new THREE.CircleGeometry(50);
const circleMesh = new THREE.Mesh(Circle, material)
planeMesh.position.set(0, 200, 200);

const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5,0xff0000);
scene.add(dirLightHelper);

// 环境光
scene.add(pointLight)
scene.add(ambient)
scene.add(directionalLight)

scene.add(circleMesh)
scene.add(planeMesh)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
