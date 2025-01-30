document.getElementById('toggle-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  });
  
document.addEventListener('DOMContentLoaded', function () {
    const card = document.getElementById('card');
    const images = Array.from(card.getElementsByClassName('img'));
    const bulletsContainer = document.getElementById('carousel-bullets');

    let currentIndex = 0;
    const visibleItems = 4;

    // Create bullets dynamically based on number of images
    images.forEach((_, index) => {
        const bullet = document.createElement('button');
        bullet.classList.add('bullet');
        bullet.setAttribute('data-index', index);
        bulletsContainer.appendChild(bullet);
    });

    const bullets = document.querySelectorAll('.bullet');
    bullets[currentIndex].classList.add('active');

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', function () {
            if (index === currentIndex) return;

            if (index > currentIndex) {
                card.appendChild(images[currentIndex]); // Move first item to last position
            }

            currentIndex = index;
            card.style.transform = `translateX(-${currentIndex * (275 + 30)}px)`;

            bullets.forEach(b => b.classList.remove('active'));
            bullet.classList.add('active');
        });
    });
});
