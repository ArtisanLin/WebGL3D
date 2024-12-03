import {camera, scene, renderer, mesh} from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 20, 20)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

// 环境光
const ambient = new THREE.AmbientLight(0xffffff, 1)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(100, 100, 100)
// NOTE: 对比不同入射角，mesh表面对光照的反射效果
directionalLight.position.set(100, 0, 0);
directionalLight.position.set(0, 100, 0);
directionalLight.position.set(100, 100, 100);
directionalLight.position.set(100, 60, 50);
//directionalLight.target默认指向坐标原点
directionalLight.target = mesh

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)

scene.add(ambient)
scene.add(pointLight)
// scene.add(pointLightHelper)
scene.add(directionalLight)
scene.add(directionalLightHelper)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
