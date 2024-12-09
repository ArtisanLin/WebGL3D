import {camera, scene, renderer, mesh} from "lib/scene/basic.js"
import * as THREE from "three";

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

// 环境光
scene.add(pointLight)
scene.add(ambient)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);
//材质对象Material
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff, //设置材质颜色
    transparent: true,//开启透明
    opacity: 0.5,//设置透明度
});

// 双 for 循环创建立方体
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        // 在XOZ平面上分布
        mesh.position.set(i * 200, 0, j * 200);
        scene.add(mesh); //网格模型添加到场景中
    }
}

camera.position.set(800, 800, 800)
camera.lookAt(0,0,0)