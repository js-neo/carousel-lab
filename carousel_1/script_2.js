document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 1;
    let isInitialRender = true;
    let direction = 'next';
    let prevSlideIndex = null;
    let prevSlide = null;

    function showSlide(slideIndex) {
        carouselItems.forEach((item, index) => {
            !isInitialRender && (prevSlide = carouselItems[prevSlideIndex]);
            if (index === slideIndex && !isInitialRender) {
                if (direction === 'next') {
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
                        if (currentSlide === carouselItems.length - 1) {
                            item.classList.remove('active');
                            carouselItems[1].classList.add('active');
                            currentSlide = 1;
                        }
                    }, 2000);
                }
                if (direction === 'prev') {
                    console.log("currentSlide:", currentSlide);
                }
            }
        });
    }

    function showNextSlide() {
        direction = 'next';
        prevSlideIndex = currentSlide;
        currentSlide = (currentSlide + 1) % carouselItems.length;
        isInitialRender = false;
        showSlide(currentSlide);
    }

    function showPrevSlide() {
        direction = 'prev';
        prevSlideIndex = currentSlide;
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        isInitialRender = false;
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

