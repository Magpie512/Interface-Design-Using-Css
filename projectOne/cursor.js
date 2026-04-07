// Got inspo from https://codepen.io/sarahwfox/pen/pNrYGb
/* Proceeded to waste the time I shouldve used studying for pyPDF on this
web design is awesome so who cares

OH GOD THIS IS WHY IM ALWAYS TRYING TO WRITE FUNC IN JAVA THIS IS THE THIRD WEEK IVE BEEN STUDYING JS BEFORE CLASS
doms right i am my own biggest enemy

*/

(function () {
    // Store all active particles within an array
    const particles = [];

    // Create a canvas element via JS and position it over the entire page
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Fixed positioning so it covers the viewport regardless of scroll variation,
    // pointer-events: none so it doesn't block clicks/hovers beneath it
    Object.assign(canvas.style, {
        position: 'fixed', top: 0, left: 0,
        pointerEvents: 'none', zIndex: 99999 // Excessive I know :P
    });

    document.body.appendChild(canvas);

    // Match canvas resolution to the viewport, and re-match on resize
    // (without this, drawing coordinates would be wrong after resizing the window)
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Track the mouse position
    let mouse = { x: 0, y: 0 };

    // Add an event listener to track mouse movement
    document.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        // Spawn 3 particles per mouse move event for a dense trail effect
        for (let i = 0; i < 3; i++) {
            // Push a new particulate to the array
            particles.push({
                x: mouse.x,
                y: mouse.y,
                // Small random velocity so particles drift apart slightly
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                // Life value goes from 1 to 0 which is used for opacity and removal
                life: 1,
                // Random size between 2 – 8px for visual variety
                size: Math.random() * 6 + 2,
                // Hue between 200 – 240 covers the blue-to-violet range in HSL
                hue: Math.random() * 40 + 200
            });
        }
    });

    function animate() {
        // Clear the previous frame so old particle positions don't linger
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Iterate backwards so we can safely splice dead particles mid-loop
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];

            // Move the particle by its velocity each frame
            p.x += p.vx;
            p.y += p.vy;

            // Reduce life each frame to controls fade speed (lower = faster fade away)
            p.life -= 0.025;

            // Shrink the particle slightly each frame for a dissolving effect
            p.size *= 0.97;

            // Remove the particle once it's fully faded out
            if (p.life <= 0) { 
                particles.splice(i, 1); continue; 
            }

            // Draw the particle as a filled circle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

            // HSL lets us easily animate opacity via the alpha channel (life)
            // while keeping the blue/violet hue and full saturation constant
            ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.life})`;
            ctx.fill();
        }

        // Queues then next frame of animation 
        requestAnimationFrame(animate);
    }

    animate();
})();