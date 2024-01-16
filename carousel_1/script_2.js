document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;
    let isInitialRender = true;
    let prevSlideIndex = null;
    let prevSlide = null;

    function showSlide(slideIndex) {
        carouselItems.forEach((item, index) => {
            !isInitialRender && (prevSlide = carouselItems[prevSlideIndex]);
             if (index === slideIndex && !isInitialRender) {

                prevSlide.classList.add('next');
                setTimeout(() => {
                    item.classList.add('active');
                    setTimeout(() => {
                        item.classList.add('next');
                    }, 500);
                }, 0);
                setTimeout(() => {
                    prevSlide.classList.remove('next', 'active');
                    item.classList.remove('next');
                    if (currentSlide === carouselItems.length - 3) {
                        item.classList.remove('active');
                        carouselItems[carouselItems.length - 2].classList.add('active');
                        currentSlide = carouselItems.length - 2;
                    }
                    if (currentSlide === carouselItems.length - 1) {
                        item.classList.remove('active');
                        carouselItems[0].classList.add('active');
                        currentSlide = 0;
                    }
                }, 2000);

            }
        });
    }

    function showNextSlide() {

        prevSlideIndex = currentSlide;
        currentSlide = (currentSlide + 1) % carouselItems.length;
        isInitialRender = false;
        showSlide(currentSlide);
    }

    function showPrevSlide() {
        isInitialRender = false;
        prevSlideIndex = currentSlide;
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentSlide);
    }

    // Добавляем обработчики событий для кнопок переключения слайдов
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Показываем первый слайд при загрузке страницы
    showSlide(currentSlide);
});

