let scene, camera, renderer, earth;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('earth-container').appendChild(renderer.domElement);

  // 创建地球
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const texture = new THREE.TextureLoader().load('images/earth-texture.jpg');
  const material = new THREE.MeshPhongMaterial({ map: texture });
  earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  // 添加光源
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  camera.position.z = 15;

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.002;
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();



