



console.clear();
var deletMe = document.querySelectorAll(".deletMe");
var table = document.querySelector(".title-table");
var year = document.querySelector(".year");
var mon = document.querySelector(".month");
var days = document.querySelector(".days");
var hours = document.querySelector(".hours");
var minute = document.querySelector(".minite");
var second = document.querySelector(".second");
var h1 = document.querySelector(".h1");
var image = document.querySelector(".image-section");
var lastSecond = document.querySelector(".lastSecond");
var hr = document.querySelector(".meH");
var cleckme = document.querySelector(".cleckme");

console.log()

var timeOBJ = {
    year: 2025,
    month: 2,
    day: 22,
    hours: +0,
    minute: 0,
}
const targetDate = new Date(timeOBJ.year, timeOBJ.month - 1, timeOBJ.day, timeOBJ.hours, timeOBJ.minute).getTime();
function updateCountdown() {

    h1.innerHTML = `YOU WILL BE `;
    const currentTime = new Date().getTime();
    const remainingTime = targetDate - currentTime;
    if (remainingTime <= 0) {
        deletMe.forEach((e, index) => {
            e.style.display = "none";
        });
        table.style.display = "none";
        h1.style.display = "none";
        lastSecond.style.display = "block";
        var count = 10;
        var timerRunning = true;



        var timsup = setInterval(() => {
            count--;
            lastSecond.innerHTML = count;

            if (count == 0) {
                clearInterval(timsup);
                timerRunning = false;
                lastSecond.remove();
                // fire work start from here 

                console.log("timse up firework start");


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


                // fire work Close here created by deloyer 
            }
        }, 1000);





        // Check if timer is running
        setTimeout(() => {
            if (!timerRunning) {
                deletMe.forEach((e, index) => {
                    e.style.display = "block";
                });



                function latesttime() {
                    const newtime = new Date();

                    const birthDate = new Date("2003-02-22"); // Month is 0-based in JS

                    year.innerHTML = newtime.getFullYear() - birthDate.getFullYear();
                    mon.innerHTML = newtime.getMonth() - birthDate.getMonth();
                    days.innerHTML = newtime.getDate() - birthDate.getDate();
                    hours.innerHTML = newtime.getHours() - birthDate.getHours();
                    minute.innerHTML = newtime.getMinutes() - birthDate.getMinutes();
                    second.innerHTML = newtime.getSeconds() - birthDate.getSeconds();
                }
                h1.innerHTML = `Mr Belayet You are now 22 `;
                h1.style.display = "block";
                table.style.display = "block";
                image.style.display = "block";

                const latestime = setInterval(latesttime, 1000);


            }
        }, 11000);




        clearInterval(timer);
        return;


    } else {
        const totalMonths = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30.44)); // Approximate month length in days
        const day = Math.floor(remainingTime / (1000 * 60 * 60 * 24)) % 30; // Remaining days after months
        const hour = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minut = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const se = Math.floor((remainingTime % (1000 * 60)) / 1000);

        year.innerHTML = 0;
        mon.innerHTML = totalMonths;
        days.innerHTML = day;
        hours.innerHTML = hour;
        minute.innerHTML = minut;
        second.innerHTML = se;
    }

}

const timer = setInterval(updateCountdown, 1000);

cleckme.addEventListener("click", () => {
    cleckme.remove();
})




