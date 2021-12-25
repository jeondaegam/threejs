const renderrer = new THREE.WebGLRenderer();
renderrer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderrer.domElement);

const camera = new THREE.PerspectiveCamera(45,
    window.innerWidth / windo.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const meterial = new THREE.LineBasicMaterial({color: 0x0000ff});

const points = [];
points.push(new THREE.vector3(-10, 0, 0));
points.push(new THREE.vector3(0, 10, 0));
points.push(new THREE.vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, meterial);

scene.add(line);
renderer.render(scene, camera);