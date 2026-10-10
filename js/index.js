
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ZAIN NAVBAR
    ========================== */

    const navbar = document.getElementById("zainNavbar");
    const menuToggle = document.getElementById("zainMenuToggle");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 40) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }


    /* =========================
       WHATSAPP - PACKAGE MESSAGES
    ========================== */

    const whatsappNumber = "966595001860";

    const packageMessages = {
        "5G الأساسية": `مرحباً، أرغب في الاشتراك في باقة 5G الأساسية من زين.

سرعة الباقة: 200 ميجابت/ث
السعر: 239 ريال شهرياً

مزايا الباقة:
- إنترنت لا محدود
- مقوي شبكة مجاني
- برنامج ترفيهي مجاني

أرجو تأكيد التغطية وتوضيح تفاصيل الاشتراك والتأسيس. شكراً لكم.`,

        "5G المنزلية بلس": `مرحباً، أرغب في الاشتراك في باقة 5G المنزلية بلس من زين.

سرعة الباقة: 300 ميجابت/ث
السعر: 299 ريال شهرياً

مزايا الباقة:
- إنترنت لا محدود
- مقويا شبكة Mesh مجاناً
- برامج ترفيهية مجانية

أرجو تأكيد التغطية وتوضيح تفاصيل الاشتراك والتأسيس. شكراً لكم.`,

        "5G سرعة لا محدودة": `مرحباً، أرغب في الاشتراك في باقة 5G سرعة لا محدودة من زين.

السرعة: مفتوحة حسب تفاصيل الباقة والتغطية
السعر: 299 ريال شهرياً

مزايا الباقة:
- إنترنت لا محدود
- مقوي شبكة مجاني
- اشتراك شاهد مجاناً

أرجو تأكيد التغطية وتوضيح تفاصيل الاشتراك. شكراً لكم.`,

        "فايبر المنزلية بلس": `مرحباً، أرغب في الاشتراك في باقة فايبر المنزلية بلس من زين.

سرعة الباقة: 300 ميجابت/ث
السعر: 289 ريال شهرياً

مزايا الباقة:
- مقويا شبكة مجاناً
- تطبيقان ترفيهيان مجاناً
- تأسيس وتركيب مجاني

أرجو التحقق من توفر الفايبر في عنواني وتوضيح تفاصيل الاشتراك. شكراً لكم.`,

        "فايبر بريميوم": `مرحباً، أرغب في الاشتراك في باقة فايبر بريميوم من زين.

سرعة الباقة: 500 ميجابت/ث
السعر: 399 ريال شهرياً

مزايا الباقة:
- مقويا شبكة مجاناً
- تطبيقان ترفيهيان مجاناً

أرجو التأكد من التغطية وتوضيح تفاصيل الاشتراك والعروض المتاحة. شكراً لكم.`,

        "فايبر المنزلية بلاك": `مرحباً، أرغب في الاشتراك في باقة فايبر المنزلية بلاك من زين.

سرعة الباقة: 1000 ميجابت/ث
السعر: 999 ريال شهرياً

مزايا الباقة:
- مقويا شبكة مجاناً
- 3 تطبيقات ترفيهية مجاناً

أرجو التحقق من توفر الفايبر في عنواني وتوضيح تفاصيل الاشتراك. شكراً لكم.`
    };

    document.querySelectorAll(".zain-package-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const packageName = button.dataset.package;
            const message = packageMessages[packageName];

            if (!message) {
                console.error(
                    "لم يتم العثور على رسالة الباقة:",
                    packageName
                );
                return;
            }

            const whatsappUrl =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );
        });
    });


    /* =========================
       MOBILE MENU
    ========================== */

    if (menuToggle) {
        const mobileMenu = document.createElement("div");

        mobileMenu.className = "zain-mobile-menu";

        mobileMenu.innerHTML = `
            <div class="zain-mobile-menu-header">
                <span class="text-white my-3 d-block">
                    القائمة الرئيسية
                </span>
            </div>

            <a href="#">
                <i class="fa-solid fa-house"></i>
                الرئيسية
            </a>

            <a href="#services">
                <i class="fa-solid fa-wifi"></i>
                الخدمات
            </a>

            <a href="#offers">
                <i class="fa-solid fa-tags"></i>
                عروض 5G
            </a>

            <a href="#coverage">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                التركيب
            </a>

            <a href="#faq">
                <i class="fa-solid fa-tower-cell"></i>
                الأسئلة الشائعة
            </a>

            <a href="#blog">
                <i class="fa-solid fa-newspaper"></i>
                المدونة
            </a>

            <a href="tel:0595001860" class="zain-mobile-phone">
                <i class="fa-solid fa-phone-volume"></i>
                <span>
                    <small>اتصل الآن</small>
                    0595001860
                </span>
            </a>
        `;

        document.body.appendChild(mobileMenu);

        function closeMobileMenu() {
            mobileMenu.classList.remove("active");
            document.body.classList.remove("zain-menu-open");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

        menuToggle.addEventListener("click", function () {
            const isOpen = mobileMenu.classList.toggle("active");

            document.body.classList.toggle("zain-menu-open", isOpen);

            const icon = menuToggle.querySelector("i");

            if (icon) {
                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMobileMenu);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 991) {
                closeMobileMenu();
            }
        });
    }


    /* =========================
       SPEED COUNTER
    ========================== */

    const speedNumber = document.querySelector(".zain-speed-number");

    if (speedNumber && "IntersectionObserver" in window) {
        let started = false;

        const speedObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting || started) {
                        return;
                    }

                    started = true;

                    const target = Number(speedNumber.dataset.speed);

                    if (!Number.isFinite(target)) {
                        speedObserver.disconnect();
                        return;
                    }

                    const duration = 1800;
                    const startTime = performance.now();

                    function animateSpeed(currentTime) {
                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        const eased = 1 - Math.pow(1 - progress, 3);

                        speedNumber.textContent = Math.floor(
                            target * eased
                        ).toLocaleString("en-US");

                        if (progress < 1) {
                            requestAnimationFrame(animateSpeed);
                        } else {
                            speedNumber.textContent =
                                target.toLocaleString("en-US");

                            speedObserver.disconnect();
                        }
                    }

                    requestAnimationFrame(animateSpeed);
                });
            },
            {
                threshold: 0.35
            }
        );

        speedObserver.observe(speedNumber);
    }


    /* =========================
       PACKAGE FILTER
    ========================== */

    const filterButtons = document.querySelectorAll(
        ".zain-package-switch button"
    );

    const packageItems = document.querySelectorAll(
        ".zain-package-item"
    );

    if (filterButtons.length && packageItems.length) {
        filterButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const filter = this.dataset.packageFilter;

                filterButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                this.classList.add("active");

                packageItems.forEach(function (item) {
                    const type = item.dataset.packageType;

                    if (filter === "all" || type === filter) {
                        item.classList.remove("package-hidden");
                    } else {
                        item.classList.add("package-hidden");
                    }
                });
            });
        });
    }


    /* =========================
       FAQ
    ========================== */

    const faqItems = document.querySelectorAll(
        ".zain-faq-dark-item"
    );

    if (faqItems.length) {
        faqItems.forEach(function (item) {
            const button = item.querySelector(
                ".zain-faq-dark-question"
            );

            if (!button) {
                return;
            }

            button.addEventListener("click", function () {
                const isActive = item.classList.contains("active");

                faqItems.forEach(function (faq) {
                    faq.classList.remove("active");
                });

                if (!isActive) {
                    item.classList.add("active");
                }
            });
        });
    }


    /* =========================
       BLOG SWIPER
    ========================== */

    const blogSwiperElement = document.querySelector(
        ".zain-blog-swiper"
    );

    if (
        blogSwiperElement &&
        typeof Swiper !== "undefined"
    ) {
        new Swiper(blogSwiperElement, {
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
    }


    /* =========================
       OFFERS SWIPER
    ========================== */

    const offersSwiperElement = document.querySelector(
        ".offersSwiper"
    );

    if (
        offersSwiperElement &&
        typeof Swiper !== "undefined"
    ) {
        new Swiper(offersSwiperElement, {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 15,
            loop: true,
            speed: 700,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },

            grabCursor: true,

            navigation: {
                nextEl: ".offers-next",
                prevEl: ".offers-prev"
            },

            pagination: {
                el: ".offers-pagination",
                clickable: true
            },

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
