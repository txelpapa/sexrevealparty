const gameArea = document.getElementById('gameArea');

// Number of balloons
const totalBalloons = 20;
let popSound = new Audio('pop2.mp3');
let popSound2 = new Audio('tada.mp3');
let revealBalloonIndex = Math.floor(Math.random() * totalBalloons);

for (let i = 0; i < totalBalloons; i++) {
    let balloon = document.createElement('div');
    balloon.classList.add('balloon', 'unpopped');
    balloon.style.left = `${Math.random() * (gameArea.clientWidth - 50)}px`; // 50 is the width of the balloon
    balloon.style.top = `${Math.random() * (gameArea.clientHeight - 50)}px`; // 50 is the height of the balloon
    //balloon.style.backgroundColor = 'green'; // All balloons are blue initially

    balloon.addEventListener('click', function() {
    if (i === revealBalloonIndex) {
        balloon.classList.remove('unpopped');
		popSound2.play();
		balloon.classList.add('popped');
		document.body.innerHTML = `<img src="mario.jpg" style="width: 100vw; height: 100vh; object-fit: contain; display: block; margin: auto;">`;

		
		//balloon.style.backgroundColor = 'pink'; // Change the color to pink

        // Delay the alert by a short time to allow the color change to render
        setTimeout(function() {
            alert('Es Niño!');
        }, 50);
    } else {
		popSound.play();
		balloon.classList.add('balloon', 'unpopped2');
		//balloon.style.display = 'none';
		
       // balloon.style.opacity = 0; // Hide the balloon or change its color
    }
});

    gameArea.appendChild(balloon);
}
