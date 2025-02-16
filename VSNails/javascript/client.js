document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const header = document.querySelector("header");
    const mobileHamburger = document.getElementById('hamburger');
    const mobileNavLinks = document.getElementById('nav-links');
    let isOpen = false;

    function scrollToTarget(targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            scrollToTarget(targetElement);
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll(".service-card").forEach((card, index) => {
        setTimeout(() => { card.classList.add("animated"); }, index * 300);
    });

    mobileHamburger.addEventListener('click', function () {
        isOpen = !isOpen;
        mobileNavLinks.style.height = isOpen ? mobileNavLinks.scrollHeight + 'px' : '0';
    });

    window.addEventListener('resize', function () {
        mobileNavLinks.style.height = (window.innerWidth <= 768) ? '0' : 'auto';
        isOpen = false;
    });
});
/* Manifolio */
(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll('.filter-buttons button');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.getAttribute('data-filter');
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-color') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
})();
