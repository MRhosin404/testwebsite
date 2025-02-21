
const max_fireworks = 5,
    max_sparks = 50;
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let fireworks = [];

for (let i = 0; i < max_fireworks; i++) {
    let firework = { sparks: [] };
    for (let n = 0; n < max_sparks; n++) {
        let spark = {
            vx: Math.random() * 3 + 0.5,  // Controls horizontal spread
            vy: Math.random() * 3 + 0.5,  // Controls vertical spread
            weight: Math.random() * 0.02 + 0.01,  // Controls gravity effect
            red: Math.floor(Math.random() * 2),
            green: Math.floor(Math.random() * 2),
            blue: Math.floor(Math.random() * 2)
        };

        if (Math.random() > 0.5) spark.vx = -spark.vx;
        if (Math.random() > 0.5) spark.vy = -spark.vy;
        firework.sparks.push(spark);
    }
    fireworks.push(firework);
    resetFirework(firework);
}
window.requestAnimationFrame(explode);

// Resets the firework to a new starting position
function resetFirework(firework) {
    firework.x = Math.floor(Math.random() * canvas.width);
    firework.y = canvas.height;
    firework.age = 0;
    firework.phase = 'fly';
}


// canvas click function 

// Play sound for firework explosion (boom)
function playSound() {
    let sound = new Audio("audio/firework boom.MP3");
    sound.play();
}

// Play secondary sound effect (sooouuu)
function fireworksou() {
    let fireworksou = new Audio("audio/firework sooouuu.MP3");
    fireworksou.play();
}


// Main function to animate fireworks created by deloyer 
function explode() {
    const speed = document.getElementById('speedControl').value; // Controls firework speed
    const size = document.getElementById('sizeControl').value;   // Controls spark size
    const colorIntensity = document.getElementById('colorControl').value; // Controls color brightness

    context.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, e) => {
        if (firework.phase === 'explode') {
            firework.sparks.forEach((spark) => {
                for (let i = 0; i < 20; i++) {
                    let trailAge = firework.age + i;
                    let x = firework.x + spark.vx * trailAge;
                    let y = firework.y + spark.vy * trailAge + spark.weight * trailAge ** 2;
                    let fade = i * colorIntensity / 10 - firework.age * 2;
                    let r = Math.floor(spark.red * fade);
                    let g = Math.floor(spark.green * fade);
                    let b = Math.floor(spark.blue * fade);
                    context.beginPath();
                    context.fillStyle = `rgba(${r},${g},${b},1)`;
                    context.rect(x, y, size, size * 2);
                    context.fill();
                }
            });
            firework.age++;
            if (firework.age > 100 && Math.random() < 0.05) {
                resetFirework(firework);
                fireworksou(); // Play sound on explosion created by deloyer 
            }
        } else {
            firework.y -= speed;
            for (let spark = 0; spark < 15; spark++) {
                context.beginPath();
                context.fillStyle = `rgba(${spark * 20}, ${spark * 10}, 255, 1)`;
                context.rect(firework.x, firework.y - spark * 4, size, size * 2);
                context.fill();
            }
            if (Math.random() < 0.002 || firework.y < 200) {
                firework.phase = 'explode';
                playSound(); // Play sound on explosion
            }
        }

    });
    window.requestAnimationFrame(explode);
}
