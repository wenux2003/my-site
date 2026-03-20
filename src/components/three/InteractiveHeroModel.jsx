import { useEffect, useRef } from "react";
import * as THREE from "three";

function InteractiveHeroModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);

    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    const ambientLight = new THREE.AmbientLight("#ffffff", 1.6);
    const pointLightA = new THREE.PointLight("#f59e0b", 16, 30);
    pointLightA.position.set(4, 4, 6);
    const pointLightB = new THREE.PointLight("#7c3aed", 10, 28);
    pointLightB.position.set(-4, -3, 5);
    scene.add(ambientLight, pointLightA, pointLightB);

    const laptopGroup = new THREE.Group();
    sceneGroup.add(laptopGroup);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(2.9, 0.14, 2),
      new THREE.MeshPhysicalMaterial({
        color: "#b8c4d6",
        roughness: 0.22,
        metalness: 0.88,
        clearcoat: 0.7,
        clearcoatRoughness: 0.08,
      }),
    );
    base.position.y = -0.65;

    const keyboard = new THREE.Mesh(
      new THREE.BoxGeometry(2.15, 0.04, 1.38),
      new THREE.MeshStandardMaterial({
        color: "#243447",
        roughness: 0.7,
        metalness: 0.08,
      }),
    );
    keyboard.position.set(0, -0.56, 0.05);

    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.01, 0.38),
      new THREE.MeshStandardMaterial({
        color: "#9caec2",
        roughness: 0.55,
        metalness: 0.2,
      }),
    );
    trackpad.position.set(0, -0.52, 0.58);

    const lid = new THREE.Group();
    lid.position.set(0, -0.52, -0.92);
    lid.rotation.x = -1.16;
    laptopGroup.add(lid);

    const lidShell = new THREE.Mesh(
      new THREE.BoxGeometry(2.9, 1.82, 0.12),
      new THREE.MeshPhysicalMaterial({
        color: "#c2ccdc",
        roughness: 0.2,
        metalness: 0.84,
        clearcoat: 0.8,
        clearcoatRoughness: 0.08,
      }),
    );

    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.52, 1.48),
      new THREE.MeshStandardMaterial({
        color: "#07111b",
        emissive: "#4f46e5",
        emissiveIntensity: 0.35,
        roughness: 0.2,
        metalness: 0.05,
      }),
    );
    screen.position.z = 0.066;

    const glowFrame = new THREE.Mesh(
      new THREE.TorusGeometry(0.94, 0.03, 20, 90),
      new THREE.MeshStandardMaterial({
        color: "#22d3ee",
        emissive: "#22d3ee",
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.5,
      }),
    );
    glowFrame.scale.set(1.16, 0.8, 1);
    glowFrame.position.z = 0.07;

    lid.add(lidShell, screen, glowFrame);

    const stars = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
        color: "#ffffff",
        size: 0.03,
        transparent: true,
        opacity: 0.8,
      }),
    );

    const starPositions = new Float32Array(180 * 3);
    for (let index = 0; index < 180; index += 1) {
      const stride = index * 3;
      const radius = 2.8 + Math.random() * 1.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[stride] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[stride + 1] = radius * Math.cos(phi);
      starPositions[stride + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    stars.geometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

    laptopGroup.add(base, keyboard, trackpad);
    sceneGroup.add(stars);
    laptopGroup.rotation.x = -0.22;
    laptopGroup.rotation.y = -0.55;
    laptopGroup.rotation.z = 0.06;

    const pointer = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const handlePointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      pointer.x = normalizedX;
      pointer.y = normalizedY;
      targetRotation.y = normalizedX * 0.7;
      targetRotation.x = normalizedY * -0.45;
    };

    const handlePointerLeave = () => {
      targetRotation.x = 0;
      targetRotation.y = 0;
    };

    mount.addEventListener("pointermove", handlePointerMove);
    mount.addEventListener("pointerleave", handlePointerLeave);

    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      sceneGroup.rotation.x += (targetRotation.x - sceneGroup.rotation.x) * 0.06;
      sceneGroup.rotation.y += (targetRotation.y - sceneGroup.rotation.y) * 0.06;
      sceneGroup.position.x += (pointer.x * 0.16 - sceneGroup.position.x) * 0.04;
      sceneGroup.position.y += (pointer.y * 0.14 - sceneGroup.position.y) * 0.04;

      laptopGroup.position.y = Math.sin(elapsed * 1.2) * 0.12;
      laptopGroup.rotation.z = 0.06 + Math.sin(elapsed * 0.9) * 0.03;
      glowFrame.rotation.z = elapsed * 0.45;
      stars.rotation.y = elapsed * 0.08;
      stars.rotation.x = Math.sin(elapsed * 0.2) * 0.1;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", handlePointerMove);
      mount.removeEventListener("pointerleave", handlePointerLeave);
      base.geometry.dispose();
      base.material.dispose();
      keyboard.geometry.dispose();
      keyboard.material.dispose();
      trackpad.geometry.dispose();
      trackpad.material.dispose();
      lidShell.geometry.dispose();
      lidShell.material.dispose();
      screen.geometry.dispose();
      screen.material.dispose();
      glowFrame.geometry.dispose();
      glowFrame.material.dispose();
      stars.geometry.dispose();
      stars.material.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="h-full min-h-[360px] w-full cursor-grab active:cursor-grabbing" ref={mountRef} />;
}

export default InteractiveHeroModel;
