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

    const robotGroup = new THREE.Group();
    sceneGroup.add(robotGroup);

    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: "#05070b",
      roughness: 0.16,
      metalness: 0.55,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
    });
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: "#f8fafc",
      roughness: 0.18,
      metalness: 0.24,
      clearcoat: 0.8,
      clearcoatRoughness: 0.08,
    });
    const jointMaterial = new THREE.MeshStandardMaterial({
      color: "#020617",
      roughness: 0.35,
      metalness: 0.75,
    });
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: "#22d3ee",
      emissive: "#22d3ee",
      emissiveIntensity: 2.2,
      roughness: 0.25,
      metalness: 0.2,
    });

    const head = new THREE.Mesh(new THREE.SphereGeometry(1.05, 64, 48), shellMaterial);
    head.scale.set(1.08, 0.9, 0.9);
    head.position.y = 1.25;

    const faceGlow = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.012, 16, 120),
      new THREE.MeshStandardMaterial({
        color: "#38bdf8",
        emissive: "#38bdf8",
        emissiveIntensity: 0.55,
        transparent: true,
        opacity: 0.6,
      }),
    );
    faceGlow.scale.set(1.14, 0.72, 1);
    faceGlow.position.set(0, 1.25, 0.78);

    const eyeGeometry = new THREE.BoxGeometry(0.13, 0.42, 0.035);
    const leftEye = new THREE.Mesh(eyeGeometry, glowMaterial);
    leftEye.position.set(-0.34, 1.28, 0.88);
    const rightEye = new THREE.Mesh(eyeGeometry, glowMaterial);
    rightEye.position.set(0.34, 1.28, 0.88);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.25, 24), jointMaterial);
    neck.position.y = 0.35;

    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.58, 0.72, 8, 32), bodyMaterial);
    body.position.y = -0.28;
    body.scale.set(1.08, 1, 0.72);

    const core = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 16, 80), glowMaterial);
    core.position.set(0, -0.18, 0.46);

    const makeLimb = (side) => {
      const limb = new THREE.Group();

      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 16), bodyMaterial);
      shoulder.position.set(side * 0.66, -0.02, 0.08);

      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.11, 0.72, 20), jointMaterial);
      arm.position.set(side * 0.8, -0.33, 0.04);
      arm.rotation.z = side * -0.34;

      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.15, 24, 16), shellMaterial);
      hand.position.set(side * 0.96, -0.68, 0.06);

      limb.add(shoulder, arm, hand);
      return limb;
    };

    const leftArm = makeLimb(-1);
    const rightArm = makeLimb(1);

    const makeLeg = (side) => {
      const leg = new THREE.Group();
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.58, 20), jointMaterial);
      upper.position.set(side * 0.28, -0.92, 0);
      upper.rotation.z = side * 0.12;

      const foot = new THREE.Mesh(new THREE.SphereGeometry(0.2, 28, 18), shellMaterial);
      foot.scale.set(1.35, 0.55, 1);
      foot.position.set(side * 0.34, -1.28, 0.12);

      leg.add(upper, foot);
      return leg;
    };

    const leftLeg = makeLeg(-1);
    const rightLeg = makeLeg(1);

    const shadowRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.9, 0.018, 16, 120),
      new THREE.MeshStandardMaterial({
        color: "#22d3ee",
        emissive: "#22d3ee",
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.45,
      }),
    );
    shadowRing.position.y = -1.55;
    shadowRing.rotation.x = Math.PI / 2;
    shadowRing.scale.set(1.2, 0.62, 1);

    robotGroup.add(
      head,
      faceGlow,
      leftEye,
      rightEye,
      neck,
      body,
      core,
      leftArm,
      rightArm,
      leftLeg,
      rightLeg,
      shadowRing,
    );

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

    sceneGroup.add(stars);
    robotGroup.rotation.x = -0.08;
    robotGroup.rotation.y = -0.42;
    robotGroup.rotation.z = 0.04;

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

      robotGroup.position.y = Math.sin(elapsed * 1.2) * 0.14;
      robotGroup.rotation.z = 0.04 + Math.sin(elapsed * 0.9) * 0.035;
      leftArm.rotation.z = Math.sin(elapsed * 1.4) * 0.08;
      rightArm.rotation.z = Math.sin(elapsed * 1.4 + Math.PI) * 0.08;
      leftEye.scale.y = 0.82 + Math.sin(elapsed * 5.5) * 0.12;
      rightEye.scale.y = 0.82 + Math.sin(elapsed * 5.5) * 0.12;
      core.rotation.z = elapsed * 0.8;
      shadowRing.rotation.z = elapsed * 0.35;
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
      stars.geometry.dispose();
      stars.material.dispose();
      scene.traverse((object) => {
        if (!object.isMesh || object === stars) {
          return;
        }

        object.geometry?.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material?.dispose();
        }
      });
      renderer.dispose();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="h-full min-h-[360px] w-full cursor-grab active:cursor-grabbing" ref={mountRef} />;
}

export default InteractiveHeroModel;
