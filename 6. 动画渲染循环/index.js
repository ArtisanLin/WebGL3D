import {camera, scene, renderer, mesh} from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

// 环境光
scene.add(pointLight)
scene.add(ambient)

const clock = new THREE.Clock();


function render() {
    const spt = clock.getDelta()*1000;//毫秒
    console.log('两帧渲染时间间隔(毫秒)',spt);
    console.log('帧率FPS',1000/spt);

    mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}

render()
document.body.appendChild(renderer.domElement);
