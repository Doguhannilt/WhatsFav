// src/components/ParticleCanvas.js
import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Arka plan rengini ayarla
    const backgroundColor = '#000000'//'#1E293B'; // bg-slate-950 renk kodu
    const particleColors = ['#334155', '#475569', '#64748B']; // bg-slate-950'ye yakın renkler

    const particles = [];
    const particleCount = 100;

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(updateParticles);
    };

    // Ekran boyutunu güncelle
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateParticles();

    // Ekran boyutunda değişiklikleri dinle
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      canvas.width = 0;
      canvas.height = 0;
      window.removeEventListener('resize', () => { });
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 h-full w-full min-h-screen" />;
};

export default ParticleCanvas;
