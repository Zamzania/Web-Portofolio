document.addEventListener('DOMContentLoaded', function() {
    
    // --- Fungsionalitas untuk Menu Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Animasi untuk Skill Bars saat di-scroll ---
    // Pastikan GSAP dan ScrollTrigger sudah ter-load
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Target semua elemen dengan class .skill-progress
        gsap.utils.toArray('.skill-progress').forEach(bar => {
            // Kita akan menganimasikan DARI 0 ke nilai yang ada di style HTML
            gsap.from(bar, {
                width: 0, // Mulai dari lebar 0%
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 85%', // Mulai animasi saat elemen 85% terlihat di layar
                    toggleActions: 'play none none none', // Hanya jalankan sekali saat masuk
                }
            });
        });

        // --- TAMBAHAN DIMULAI: Animasi "Fade-in on Scroll" ---
        // Kita akan menargetkan semua elemen yang memiliki kelas 'anim-reveal'
        const animatedElements = gsap.utils.toArray('.anim-reveal');

        // Untuk setiap elemen, kita terapkan animasi
        animatedElements.forEach((element) => {
            gsap.from(element, {
                opacity: 0,         // Mulai dari transparan
                y: 50,              // Mulai dari 50px di bawah posisi aslinya
                duration: 1,        // Durasi animasi 1 detik
                ease: 'power3.out', // Jenis efek transisi yang halus
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%', // Mulai animasi saat elemen 90% terlihat di layar
                    toggleActions: 'play none none none', // Hanya jalankan sekali saat masuk
                }
            });
        });
        // --- TAMBAHAN SELESAI ---

    } else {
        console.error("GSAP atau ScrollTrigger tidak ter-load.");
    }
});