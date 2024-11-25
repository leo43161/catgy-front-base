import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ModelViewer = () => {
    const mountRef = useRef(null);
    const velocity = useRef(0); // Velocidad de rotación para inercia
    let isDragging = false;
    let previousX = 0;

    useEffect(() => {
        // Crear escena, cámara y renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            20,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        );
        mountRef.current.appendChild(renderer.domElement);

        // Agregar luz
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 10, 1).normalize();
        scene.add(light);

        // Crear un modelo (cubo como ejemplo)
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

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
            cube.rotation.y += deltaX * 0.01; // Ajusta la sensibilidad
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
                cube.rotation.y += velocity.current;
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
