import {camera, scene, renderer} from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 1);
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)

pointLight.position.set(400, 200, 200);
pointLight.intensity = 4000;
pointLight.decay = 1

scene.add(pointLight)
scene.add(pointLightHelper)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
