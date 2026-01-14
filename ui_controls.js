document.addEventListener('DOMContentLoaded', () => {
    
    // --- Music Logic ---
    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-music');
    const iconMuted = document.getElementById('icon-muted');
    const iconPlaying = document.getElementById('icon-playing');
    
    // Set initial volume
    audio.volume = 0.3;

    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            iconPlaying.style.display = 'none';
            iconMuted.style.display = 'block';
        } else {
            audio.play().catch(error => {
                console.log("", error);
            });
            iconPlaying.style.display = 'block';
            iconMuted.style.display = 'none';
        }
        isPlaying = !isPlaying;
    });

    // Scroll to Top Logic
    const scrollBtn = document.getElementById('scroll-top-btn');

    // Show/Hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });

    // Smooth scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});