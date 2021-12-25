// Option 1: Import the entire three.js core library.
import * as THREE from '../node_modules/three/build/three.module.js';
// import * as THREE from 'three';

/*



const scene = new THREE.Scene();

// Option 2: Import just the parts you need.
import { Scene } from 'three';

const scene = new Scene();

// OrbitControls 컴포넌트
// 카메라가 대상 주위를 공전 할 수 있다.
// examples 디렉토리의 모든 파일들이 HTML에 별도의 파일을 포함해야합니다.
// npm을 통해 three가 설치되었다면 아래와 같이 불러올 수 있다.
import { OrbitControls } from
        'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls();


// Drawing lines

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();


//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );


const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );*/

// Scene 만들기
// 카메라에 담을 장면을 설정하는 것.
// 어느 각도(시야)에서 보고있는지, 화면 크기에 대한 사물의 비율, 원근감등을 표현할 canvas를 만든다.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, // => 각도
    window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 렌더링 할 곳의 사이즈 설정
document.body.appendChild(renderer.domElement);

// 큐브
const geometry = new THREE.BoxGeometry(1,2,1); // 모양이 변한다!!
const material = new THREE.MeshBasicMaterial({color: "blue"});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5; // 거리조절

// scene 렌더링
// 화면이 새로고침 될 때마다 렌더링 해준다. (일반적으로 1초에 60번 렌더링)
// setInterval 을 쓰지 않는 이유 ? 유저가 브라우저 창에서 이탈했을 때 멈춰주는 기능 등등 이점이 많다.
function animate() {
  requestAnimationFrame(animate);

  // 큐브 애니메이팅 : 큐브를 회전시킨다 !!
  // 숫자가 커질 수록 speed up, -를 붙이면 반대방향
  cube.rotation.x += 0.01;
  cube.rotation.y += -0.01;
  renderer.render(scene, camera);
}

animate();


