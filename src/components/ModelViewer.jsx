import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { LumaSplatsSemantics, LumaSplatsThree } from "@lumaai/luma-web";

const ModelViewer = () => {
    const mountRef = useRef(null);
    const velocity = useRef(0); // Velocidad de rotación para inercia
    let isDragging = false;
    let previousX = 0;

    useEffect(() => {
        // Crear escena, cámara y renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            40,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        renderer.setPixelRatio(1);
        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        );
        renderer.setClearColor(0x000000, 0); // Color negro con transparencia
        mountRef.current.appendChild(renderer.domElement);

        // Agregar luz
        /* const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 1).normalize();
        scene.add(light); */

        // Crear un modelo (cubo como ejemplo)
        /* const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube); */

        //LUMA ESCULTURE
        let splats = new LumaSplatsThree({
            // Jules Desbois La Femme à l’arc @HouseofJJD
            source: 'https://lumalabs.ai/capture/1b5f3e33-3900-4398-8795-b585ae13fd2d',
            enableThreeShaderIntegration: false,
        });

        scene.add(splats);

        let layersEnabled = {
            Background: false,
            Foreground: true,
        }

        function updateSemanticMask() {
            splats.semanticsMask =
                (layersEnabled.Background ? LumaSplatsSemantics.BACKGROUND : 0) |
                (layersEnabled.Foreground ? LumaSplatsSemantics.FOREGROUND : 0);
        }
    
        updateSemanticMask();

        // Configurar cámara
        camera.position.z = 5;

        // Manejo de eventos de arrastre
        const handleMouseDown = (event) => {
            isDragging = true;
            previousX = event.clientX || event.touches[0].clientX;
            velocity.current = 0; // Resetear la inercia al iniciar el arrastre
        };

        const handleMouseMove = (event) => {
            if (!isDragging) return;

            const currentX = event.clientX || event.touches[0].clientX;
            const deltaX = currentX - previousX;
            splats.rotation.y += deltaX * 0.01; // Ajusta la sensibilidad
            velocity.current = deltaX * 0.005; // Guarda la velocidad para la inercia
            previousX = currentX;
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        // Animar el render con inercia
        const animate = () => {
            requestAnimationFrame(animate);

            if (!isDragging) {
                // Aplicar inercia si no hay interacción
                splats.rotation.y += velocity.current;
                velocity.current *= 0.95; // Reducir la velocidad (fricción)

                // Detener inercia cuando sea casi cero
                if (Math.abs(velocity.current) < 0.0001) {
                    velocity.current = 0;
                }
            }

            renderer.render(scene, camera);
        };
        animate();

        // Agregar listeners
        const canvas = renderer.domElement;
        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseleave", handleMouseUp);
        canvas.addEventListener("touchstart", handleMouseDown);
        canvas.addEventListener("touchmove", handleMouseMove);
        canvas.addEventListener("touchend", handleMouseUp);

        // Limpiar recursos (verificando que mountRef.current no sea null)
        return () => {
            if (mountRef.current) {
                canvas.removeEventListener("mousedown", handleMouseDown);
                canvas.removeEventListener("mousemove", handleMouseMove);
                canvas.removeEventListener("mouseup", handleMouseUp);
                canvas.removeEventListener("mouseleave", handleMouseUp);
                canvas.removeEventListener("touchstart", handleMouseDown);
                canvas.removeEventListener("touchmove", handleMouseMove);
                canvas.removeEventListener("touchend", handleMouseUp);
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100%", height: "300px" }} />;
};

export default ModelViewer;
