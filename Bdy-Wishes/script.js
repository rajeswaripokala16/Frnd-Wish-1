
        // Surprise button functionality
        const surpriseBtn = document.getElementById('surprise-btn');
        const surpriseMessage = document.querySelector('.surprise-message');
        const typewriter = document.querySelector('.typewriter');

        surpriseBtn.addEventListener('click', () => {
            surpriseMessage.style.display = 'block';
            typewriter.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';

            // Trigger confetti animation (simple floating hearts effect using vanilla JS and CSS)
            for (let i = 0; i < 20; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 2000); // Remove after animation
            }
        });

        // Music toggle button
        const musicBtn = document.getElementById('music-btn');
        const audio = document.getElementById('birthday-music');
        let isPlaying = false;

        musicBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                musicBtn.textContent = 'Toggle Music';
            } else {
                audio.play();
                musicBtn.textContent = 'Pause Music';
            }
            isPlaying = !isPlaying;
        });
    