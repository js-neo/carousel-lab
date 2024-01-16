document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;
    let isInitialRender = true;
    let prevSlideIndex = null;
    let prevSlide = null;

    function showSlide(slideIndex) {
        carouselItems.forEach((item, index) => {

            if (index === slideIndex && !isInitialRender) {
                prevSlide = carouselItems[prevSlideIndex];
                prevSlide.classList.add('next');
                setTimeout(() => {
                    item.classList.add('active');
                    setTimeout(() => {
                        item.classList.add('next');
                    }, 500)

                    setTimeout(() => {
                        prevSlide.classList.remove('next', 'active');
                        item.classList.remove('next');
                    }, 3000);
                }, 1000);
            }
        });
    }

    function showNextSlide() {
        isInitialRender = false;
        prevSlideIndex = currentSlide;
        currentSlide = (currentSlide + 1) % carouselItems.length;
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

