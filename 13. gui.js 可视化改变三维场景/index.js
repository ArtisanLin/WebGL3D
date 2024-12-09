import {camera, scene, renderer, mesh} from "lib/scene/basic.js"
import * as THREE from "three";
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const pointLight = new THREE.PointLight(0xffffff, 40000)
pointLight.position.set(400, 200, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)

const gui = new GUI();
//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
    x: 30,
    y: 60,
    z: 300,
    bool: false,
};
// gui增加交互界面，用来改变obj对应属性
gui.add(obj, 'x', 0, 100);
gui.add(obj, 'y', 0, 50);
gui.add(obj, 'z', 0, 60);

// 参数3数据类型：对象(下拉菜单)
gui.add(obj, 'scale', {
    left: -100,
    center: 0,
    right: 100
    // 左: -100,//可以用中文
    // 中: 0,
    // 右: 100
}).name('位置选择').onChange(function (value) {
    mesh.position.x = value;
});

gui.add(obj, 'bool').name('旋转动画');

// 渲染循环
function render() {
    // 当gui界面设置obj.bool为true,mesh执行旋转动画
    if (obj.bool) mesh.rotateY(0.01);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

// 调整物体位置
gui.add(mesh.position, 'x', 0, 100).step(1).name('物体坐标：x')
gui.add(mesh.position, 'y', 0, 100).step(1).name('物体坐标：y')
gui.add(mesh.position, 'z', 0, 100).step(1).name('物体坐标：z')

// 调整光照强度
gui.add(ambient, 'intensity', 0, 2.0);
// 环境光
scene.add(pointLight)
scene.add(ambient)
scene.add(mesh)

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
