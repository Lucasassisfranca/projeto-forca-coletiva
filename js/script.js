document.querySelectorAll('.header nav a').forEach(link => {
            link.addEventListener('click', function (e) {

                const href = this.getAttribute('href');

                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.slice(1);
                    const targetSection = document.getElementById(targetId);
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    document.querySelector('nav').classList.remove('active');
                }
            });
        });

        const header = document.querySelector('.header');
        const hero = document.querySelector('.hero');

        window.addEventListener('scroll', function () {
            const heroHeight = hero.offsetHeight;

            if (window.scrollY > heroHeight - header.offsetHeight) {
                header.classList.add('scroll-active');
            } else {
                header.classList.remove('scroll-active');
            }
        });

        const faders = document.querySelectorAll('.fade-in');

        const appearOptions = {
            threshold: 0.3
        };

        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });