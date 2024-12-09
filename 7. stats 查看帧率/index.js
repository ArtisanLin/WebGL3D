import {camera, scene, renderer, mesh} from "lib/scene/basic.js"
import * as THREE from "three";
import {addpendRandomBox} from "../lib/index.js";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

// 环境光
scene.add(pointLight)
scene.add(ambient)

addpendRandomBox(1000, scene)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
