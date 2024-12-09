import {camera, scene, renderer, mesh } from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

const material = new THREE.MeshBasicMaterial({color: 'red', side: THREE.DoubleSide});


const plane = new THREE.PlaneGeometry(100, 100, 100);
const planeMesh = new THREE.Mesh(plane, material)
planeMesh.position.set(0, -100, -100);

const circle = new THREE.CircleGeometry(50, 100, 100);
const circleMesh = new THREE.Mesh(circle, material)
circleMesh.position.set(0, 0, 0);


// 环境光
scene.add(pointLight)
scene.add(ambient)
scene.add(planeMesh)
scene.add(circleMesh)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
