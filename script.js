document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Simple Testimonial Slider
    const testimonials = [
        {
            image: "https://i0.wp.com/kredivo.id/wp-content/uploads/2023/09/Erwin-Dermawan.png?fit=73%2C73&ssl=1",
            name: "Erwin Dermawan",
            rating: "https://i0.wp.com/kredivo.id/wp-content/uploads/2023/03/5-Star.png?fit=121%2C22&ssl=1",
            text: "Aplikasi fintech ok, ga ribet, ga lama. Limit fantastis, proses pencairan dana atau pembayaran barang sangat cepat sekali."
        },
        {
            image: "https://i0.wp.com/kredivo.id/wp-content/uploads/2023/09/A.-Putra-Gunawanpng.png?fit=73%2C73&ssl=1",
            name: "A. Putra Gunawan",
            rating: "https://i0.wp.com/kredivo.id/wp-content/uploads/2023/03/5-Star.png?fit=121%2C22&ssl=1",
            text: "Mantul aplikasinya, hanya Kredivo yang bunga nya kecil dan banyak membantu saya, yang lain lewat dan bunganya terlalu besar."
        },
        {
            image: "https://i0.wp.com/kredivo.id/wp-content/uploads/2023/09/Yudi-Adriayana.png?fit=73%2C73&ssl=1",
            name: "Yudi Adriayana",
            rating: "https://i0.wp.com/kredivo.id/wp-content/uploads/2023/03/5-Star.png?fit=121%2C22&ssl=1",
            text: "Saya bisa menikmati cicilan 12 bulan dengan mudah dan pembayaran yang ga riber."
        }
        
    ];

    let currentTestimonial = 0;
    const testimonialSlider = document.querySelector('.testimonial-slider');

    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        testimonialSlider.innerHTML = `
            <div class="testimonial-item">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                <h3>${testimonial.name}</h3>
                <img src="${testimonial.rating}" alt="5 stars" class="rating">
                <p>${testimonial.text}</p>
            </div>
        `;
    }

    // Initialize first testimonial
    updateTestimonial();

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);

    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-out');
        observer.observe(section);
    });

    // Add scroll-based header styling
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});
