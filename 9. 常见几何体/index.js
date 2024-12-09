import {camera, scene, renderer, material } from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)
// 环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.5)

const box = new THREE.BoxGeometry(100, 100, 100);
const boxMesh = new THREE.Mesh(box, material);
boxMesh.position.set(0, -100, 0);

const sphere  = new THREE.SphereGeometry(50)
const sphereMesh = new THREE.Mesh(sphere, material)
sphereMesh.position.set(0, 200, 200);

const cylinder = new THREE.CylinderGeometry(50, 50, 100);
const cylinderMesh = new THREE.Mesh(cylinder, material)
cylinderMesh.position.set(0, 400, 400);

const plane = new THREE.PlaneGeometry(100, 100, 100);
const planeMesh = new THREE.Mesh(plane, material)
planeMesh.position.set(0, 600, 600);

const Circle = new THREE.CircleGeometry(100, 100, 100);
const circleMesh = new THREE.Mesh(Circle, material)
circleMesh.position.set(0, 800, 800);




// 环境光
scene.add(pointLight)
scene.add(ambient)
scene.add(boxMesh)
scene.add(sphereMesh)
scene.add(cylinderMesh)
scene.add(circleMesh)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
