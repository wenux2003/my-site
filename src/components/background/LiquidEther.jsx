import { useEffect, useRef } from "react";
import * as THREE from "three";

function LiquidEther({
  className = "",
  colors = ["#f59e0b", "#f97316", "#22d3ee"],
  intensity = 0.35,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return undefined;
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColorA: { value: new THREE.Color(colors[0]) },
      uColorB: { value: new THREE.Color(colors[1]) },
      uColorC: { value: new THREE.Color(colors[2]) },
      uIntensity: { value: intensity },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        uniform float uIntensity;

        float blob(vec2 p, vec2 center, float radius, float blur) {
          float dist = length(p - center);
          return smoothstep(radius + blur, radius - blur, dist);
        }

        void main() {
          vec2 uv = vUv;
          vec2 aspectUv = uv;
          aspectUv.x *= uResolution.x / uResolution.y;

          vec2 c1 = vec2(0.25 + sin(uTime * 0.45) * 0.08, 0.55 + cos(uTime * 0.3) * 0.05);
          vec2 c2 = vec2(0.62 + cos(uTime * 0.35) * 0.08, 0.35 + sin(uTime * 0.48) * 0.07);
          vec2 c3 = vec2(0.48 + sin(uTime * 0.22) * 0.06, 0.72 + cos(uTime * 0.4) * 0.05);

          vec2 ac1 = vec2(c1.x * (uResolution.x / uResolution.y), c1.y);
          vec2 ac2 = vec2(c2.x * (uResolution.x / uResolution.y), c2.y);
          vec2 ac3 = vec2(c3.x * (uResolution.x / uResolution.y), c3.y);

          float b1 = blob(aspectUv, ac1, 0.28, 0.2);
          float b2 = blob(aspectUv, ac2, 0.26, 0.18);
          float b3 = blob(aspectUv, ac3, 0.22, 0.16);
          float field = clamp(b1 + b2 + b3, 0.0, 1.0);

          vec3 color = vec3(0.0);
          color += uColorA * b1;
          color += uColorB * b2;
          color += uColorC * b3;
          color = mix(color, normalize(color + 0.0001), 0.25);

          float glow = smoothstep(0.12, 1.0, field) * uIntensity;
          gl_FragColor = vec4(color, glow);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);

    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
    };

    resize();

    let animationFrame;
    const clock = new THREE.Clock();

    const render = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      material.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [colors, intensity]);

  return <div aria-hidden="true" className={className} ref={mountRef} />;
}

export default LiquidEther;
