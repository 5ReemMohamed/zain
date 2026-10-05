document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.getElementById("zainNavbar");
    const menuToggle = document.getElementById("zainMenuToggle");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    const mobileMenu = document.createElement("div");

    mobileMenu.className = "zain-mobile-menu";

    mobileMenu.innerHTML = `
        <a href="#offers">
            <i class="fa-solid fa-bolt"></i>
            العروض
        </a>

        <a href="#features">
            <i class="fa-solid fa-wifi"></i>
            المميزات
        </a>

        <a href="#coverage">
            <i class="fa-solid fa-tower-broadcast"></i>
            التغطية
        </a>

        <a href="tel:0535173600">
            <i class="fa-solid fa-phone"></i>
            0535173600
        </a>
    `;

    document.querySelector(".zain-hero").appendChild(mobileMenu);

    menuToggle.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (mobileMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    const speedNumber = document.querySelector(".zain-speed-number");

    if (!speedNumber) return;

    let started = false;

    const speedObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting || started) return;

            started = true;

            const target = Number(speedNumber.dataset.speed);
            const duration = 1800;
            const startTime = performance.now();

            function animateSpeed(currentTime) {

                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const eased = 1 - Math.pow(1 - progress, 3);

                speedNumber.textContent =
                    Math.floor(target * eased).toLocaleString("en-US");

                if (progress < 1) {
                    requestAnimationFrame(animateSpeed);
                } else {
                    speedNumber.textContent =
                        target.toLocaleString("en-US");
                }

            }

            requestAnimationFrame(animateSpeed);

        });

    }, {
        threshold: 0.35
    });

    speedObserver.observe(speedNumber);

    const filterButtons = document.querySelectorAll(
        ".zain-package-switch button"
    );

    const packageItems = document.querySelectorAll(
        ".zain-package-item"
    );

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const filter = this.dataset.packageFilter;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            packageItems.forEach(item => {

                const type = item.dataset.packageType;

                if (filter === "all" || type === filter) {
                    item.classList.remove("package-hidden");
                } else {
                    item.classList.add("package-hidden");
                }

            });

        });

    });
    const faqItems = document.querySelectorAll(".zain-faq-dark-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".zain-faq-dark-question");

        button.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            faqItems.forEach(faq => {
                faq.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }

        });

    });

    new Swiper(".zain-blog-swiper", {

        slidesPerView: 1,
        spaceBetween: 24,
        speed: 700,
        loop: true,

        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: ".zain-blog-next",
            prevEl: ".zain-blog-prev"
        },

        pagination: {
            el: ".zain-blog-slider-pagination",
            clickable: true
        },

        breakpoints: {
            576: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 28
            }
        }

    });
  const offersSwiperElement = document.querySelector(".offersSwiper");

if (
    offersSwiperElement &&
    typeof Swiper !== "undefined"
) {

    new Swiper(offersSwiperElement, {

        /* عدد الصور */
        slidesPerView: 1,
        centeredSlides: true,

        spaceBetween: 15,

        /* الحركة */
        loop: true,
        speed: 700,

        /* التشغيل التلقائي */
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        /* السماح بالسحب */
        grabCursor: true,

        /* Navigation */
        navigation: {
            nextEl: ".offers-next",
            prevEl: ".offers-prev"
        },

        /* Pagination */
        pagination: {
            el: ".offers-pagination",
            clickable: true
        },

        /* Responsive */
        breakpoints: {

            576: {
                slidesPerView: 1.5,
                spaceBetween: 18,
                centeredSlides: true
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 22,
                centeredSlides: true
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 25,
                centeredSlides: true
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true
            }
        }

    });
}

});
