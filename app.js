/* =========================================================
   RANJOS CAPITAL
   PREMIUM FASHION INTERACTIONS
   FULL FINAL JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const pageLoader =
        document.getElementById("pageLoader");

    const siteHeader =
        document.getElementById("siteHeader");

    const scrollProgress =
        document.getElementById("scrollProgress");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileClose =
        document.getElementById("mobileClose");

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav-link"
        );

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-image"
        );

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const lightboxCurrent =
        document.getElementById("lightboxCurrent");

    const lightboxTotal =
        document.getElementById("lightboxTotal");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxTriggers =
        document.querySelectorAll(
            ".lightbox-trigger"
        );

    const productOrders =
        document.querySelectorAll(
            ".product-order"
        );

    const currentYear =
        document.getElementById("currentYear");

    const cursor =
        document.querySelector(".cursor");

    const magneticElements =
        document.querySelectorAll(
            ".magnetic"
        );

    const heroImage =
        document.querySelector(
            ".hero-image img"
        );

    const heroWrap =
        document.querySelector(
            ".hero-image-wrap"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );

    const socialDock =
        document.getElementById(
            "socialDock"
        );

    const socialToggle =
        document.getElementById(
            "socialToggle"
        );


    /* =====================================================
       PAGE LOADER
    ===================================================== */

    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    pageLoader.classList.add(
                        "loaded"
                    );

                    body.classList.add(
                        "page-ready"
                    );

                },
                900
            );

        }
    );


    /* =====================================================
       YEAR
    ===================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       HEADER
    ===================================================== */

    function handleHeader() {

        if (window.scrollY > 40) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );

        }

    }

    handleHeader();

    window.addEventListener(
        "scroll",
        handleHeader,
        {
            passive: true
        }
    );


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (scrollHeight <= 0) {
            return;
        }

        const progress =
            (scrollTop / scrollHeight) * 100;

        scrollProgress.style.width =
            `${progress}%`;

    }

    updateScrollProgress();

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMenu() {

        mobileMenu.classList.add(
            "open"
        );

        body.classList.add(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function closeMenu() {

        mobileMenu.classList.remove(
            "open"
        );

        body.classList.remove(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            openMenu
        );

    }


    if (mobileClose) {

        mobileClose.addEventListener(
            "click",
            closeMenu
        );

    }


    mobileLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        }
    );


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );

                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }

                        const target =
                            document.querySelector(
                                targetId
                            );

                        if (!target) {
                            return;
                        }

                        event.preventDefault();

                        const headerHeight =
                            siteHeader
                                ? siteHeader.offsetHeight
                                : 0;

                        const targetPosition =
                            target.getBoundingClientRect().top +
                            window.scrollY -
                            headerHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: "smooth"
                        });

                    }
                );

            }
        );


    /* =====================================================
       REVEAL ANIMATIONS
    ===================================================== */

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: .12,
                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = [
        "home",
        "house",
        "collection",
        "campaign",
        "contact"
    ]
        .map(
            id =>
                document.getElementById(id)
        )
        .filter(Boolean);


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        const id =
                            entry.target.id;

                        navLinks.forEach(
                            link => {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                );

                            }
                        );

                    }
                );

            },
            {
                threshold: .35
            }
        );


    sections.forEach(
        section =>
            sectionObserver.observe(
                section
            )
    );


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const desktopCursorEnabled =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (
        desktopCursorEnabled &&
        cursor
    ) {

        let cursorX = 0;
        let cursorY = 0;

        let targetX = 0;
        let targetY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                targetX =
                    event.clientX;

                targetY =
                    event.clientY;

            }
        );


        function animateCursor() {

            cursorX +=
                (targetX - cursorX) * .16;

            cursorY +=
                (targetY - cursorY) * .16;

            cursor.style.left =
                `${cursorX}px`;

            cursor.style.top =
                `${cursorY}px`;

            requestAnimationFrame(
                animateCursor
            );

        }

        animateCursor();


        document
            .querySelectorAll(
                "a, button, .product-image"
            )
            .forEach(
                element => {

                    element.addEventListener(
                        "mouseenter",
                        () => {

                            cursor.classList.add(
                                "cursor-hover"
                            );

                        }
                    );


                    element.addEventListener(
                        "mouseleave",
                        () => {

                            cursor.classList.remove(
                                "cursor-hover"
                            );

                        }
                    );

                }
            );

    }


    /* =====================================================
       MAGNETIC BUTTONS
    ===================================================== */

    if (
        desktopCursorEnabled
    ) {

        magneticElements.forEach(
            element => {

                element.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            element.getBoundingClientRect();

                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;

                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;

                        element.style.transform =
                            `translate(${x * .12}px, ${y * .12}px)`;

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        element.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    if (
        desktopCursorEnabled &&
        heroWrap &&
        heroImage
    ) {

        heroWrap.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroWrap.getBoundingClientRect();

                const x =
                    (event.clientX -
                        rect.left) /
                    rect.width -
                    .5;

                const y =
                    (event.clientY -
                        rect.top) /
                    rect.height -
                    .5;

                heroImage.style.transform =
                    `translate(${x * 12}px, ${y * 12}px) scale(1.025)`;

            }
        );


        heroWrap.addEventListener(
            "mouseleave",
            () => {

                heroImage.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       LIGHTBOX
    ===================================================== */

    const galleryImages =
        Array.from(
            document.querySelectorAll(
                ".product-image img"
            )
        );


    if (lightboxTotal) {

        lightboxTotal.textContent =
            String(
                galleryImages.length
            ).padStart(2, "0");

    }


    function openLightbox(
        image,
        title,
        index
    ) {

        if (!lightbox) {
            return;
        }

        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt || title;

        lightboxTitle.textContent =
            title;

        lightboxCurrent.textContent =
            String(index + 1)
                .padStart(2, "0");

        lightbox.classList.add(
            "open"
        );

        body.classList.add(
            "menu-open"
        );

    }


    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove(
            "open"
        );

        body.classList.remove(
            "menu-open"
        );

    }


    lightboxTriggers.forEach(
        (trigger, index) => {

            trigger.addEventListener(
                "click",
                () => {

                    const image =
                        trigger.querySelector(
                            "img"
                        );

                    if (!image) {
                        return;
                    }

                    const card =
                        trigger.closest(
                            ".product-card"
                        );

                    const title =
                        card?.dataset.product ||
                        image.alt ||
                        "RANJOS CAPITAL";

                    openLightbox(
                        image,
                        title,
                        index
                    );

                }
            );

        }
    );


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                lightbox &&
                lightbox.classList.contains(
                    "open"
                )
            ) {

                closeLightbox();

            }

        }
    );


    /* =====================================================
       WHATSAPP PRODUCT ENQUIRIES
    ===================================================== */

    productOrders.forEach(
        link => {

            const product =
                link.dataset.product ||
                "a Ranjos Capital piece";

            const message =
                `Hi Ranjos Capital, I would like to enquire about ${product}. Please share more details about this piece.`;

            const url =
                `https://wa.me/254745303867?text=${encodeURIComponent(
                    message
                )}`;

            link.href = url;

        }
    );


    /* =====================================================
       SOCIAL TOGGLE
    ===================================================== */

    if (
        socialDock &&
        socialToggle
    ) {

        socialToggle.addEventListener(
            "click",
            () => {

                const collapsed =
                    socialDock.classList.toggle(
                        "collapsed"
                    );

                socialToggle.setAttribute(
                    "aria-expanded",
                    String(!collapsed)
                );

            }
        );

    }


    /* =====================================================
       IMAGE LOAD / ERROR HANDLING
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(
            image => {

                if (
                    image.complete
                ) {

                    image.classList.add(
                        "image-loaded"
                    );

                } else {

                    image.addEventListener(
                        "load",
                        () => {

                            image.classList.add(
                                "image-loaded"
                            );

                        }
                    );

                }


                image.addEventListener(
                    "error",
                    () => {

                        console.warn(
                            "Ranjos Capital image not found:",
                            image.src
                        );

                    }
                );

            }
        );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900 &&
                mobileMenu.classList.contains(
                    "open"
                )
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       INITIAL HERO ANIMATION
    ===================================================== */

    setTimeout(
        () => {

            document
                .querySelectorAll(
                    ".hero .reveal"
                )
                .forEach(
                    (element, index) => {

                        setTimeout(
                            () => {

                                element.classList.add(
                                    "visible"
                                );

                            },
                            300 +
                            index * 120
                        );

                    }
                );

        },
        950
    );


    /* =====================================================
       VISIBILITY REFRESH
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                !document.hidden
            ) {

                updateScrollProgress();

            }

        }
    );

});