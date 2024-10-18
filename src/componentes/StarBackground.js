import React, { useEffect, useRef } from 'react';

const StarBackground = ({ stars = 300, vel = 1, radius = 1 }) => {
    const canvasRef = useRef(null);
    const starsArray = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const center = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            center.x = canvas.width / 2;
            center.y = canvas.height / 2;
        };

        const initStars = () => {
            starsArray.current = [];
            for (let i = 0; i < stars; i++) {
                setTimeout(() => {
                    starsArray.current.push(new Star());
                }, i * 30);
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);
            render(context);
        };

        const render = (ctx) => {
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "white";
            starsArray.current.forEach(star => star.update(ctx));
        };

        class Star {
            constructor() {
                this.init();
            }

            init() {
                this.radius = Math.random() * radius;
                this.x = center.x;
                this.y = center.y;
                this.lineWidth = 0;
                // Reducir aún más la velocidad inicial
                this.vel = {
                    x: (Math.random() * 1 - 0.5) * vel, // De -0.5 a 0.5
                    y: (Math.random() * 1 - 0.5) * vel, // De -0.5 a 0.5
                };
            }

            update(ctx) {
                // Cambiar el multiplicador para hacer la transición aún más lenta
                this.vel.x *= 1.01; // Cambiado a 1.01
                this.vel.y *= 1.01; // Cambiado a 1.01
                this.lineWidth += 0.01; // Reducido para líneas más delgadas
                const x0 = this.x;
                const y0 = this.y;
                this.x += this.vel.x;
                this.y += this.vel.y;
                this.draw(ctx, x0, y0);
                if (this.isDead()) this.init();
            }

            draw(ctx, x0, y0) {
                ctx.beginPath();
                ctx.moveTo(x0, y0);
                ctx.lineTo(this.x, this.y);
                ctx.lineWidth = this.lineWidth;
                ctx.stroke();
            }

            isDead() {
                return (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height);
            }
        }

        window.addEventListener('resize', resize);
        resize();
        initStars();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [stars, vel, radius]);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                display: 'block', 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100vw', 
                height: '100vh', 
                zIndex: -1 
            }} 
        />
    );
};

export default StarBackground;
