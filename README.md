# threejs
lets begin threejs

# threejs.org 
<https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene>

### 지켜야 할 것!
- 모든 파일의 버전을 동일하게 맞추는 것이 무엇보다 중요하다.
- 서로 다른 버전에서 import 하거나, 다른 버전의 예제를 사용하지 마세요.

### WebGL이란
Web Graphics Library의 약자로  
웹에서 2D 및 3D를 렌더링하기위한 JavaScript API


### three.js import
doc 예시와 다르게 경로를 끝까지 작성해야했음.
```javascript
import * as THREE from '../node_modules/three/build/three.module.js';
// import * as THREE from 'three';
```
html에 type="module" 추가

```html

<script type="module" src="js/scene.js"></script>
```


### Creating a Scene
three.js로 무언가를 표현하려면 scene, camera 그리고 renderer가 필요합니다.   
이를 통해 카메라로 장면을 구현할 수 있습니다.
```javascript
const camera = new THREE.PerspectiveCamera(90, // => 각도
window.innerWidth / window.innerHeight, 0.1, 1000);
THREE.PerspectiveCamera(시야각(FOV), )
```
1. FOV(Field of view, 시야각) : 각도값. 시점의 화면이 보여지는 정도
2. aspect ratio(종횡비) : 스크린 높이와 너비의 비율 ?
3. near과 far 절단면 : 원근감을 표현한다. 
   - far보다 멀리 있거나 near보다 가까이 있으면 렌더링 되지 않는다.


