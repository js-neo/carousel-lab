document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;
    let isInitialRender = true;
    let previousSlide = null

    function showSlide(slideIndex) {
        carouselItems.forEach((item, index) => {

            if (index === slideIndex && !isInitialRender) {
                console.log("previousSlide:", previousSlide);
                item.classList.add('active');
                carouselItems[previousSlide].classList.add('next');
                setTimeout(() => {
                    item.classList.add('next');
                    setTimeout(() => {
                        console.log("previousSlide_2:", previousSlide);
                        console.log("currentSlide_2:", currentSlide);
                        carouselItems[previousSlide].classList.remove('next', 'active');
                        item.classList.remove('next');
                    }, 3000);
                }, 1000);

            }


        });
    }

    function nextSlide() {
        isInitialRender = false;
        previousSlide = currentSlide;
        currentSlide = (currentSlide + 1) % carouselItems.length;
        console.log("currentSlide:", currentSlide);
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentSlide);
    }

    // Добавляем обработчики событий для кнопок переключения слайдов
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Показываем первый слайд при загрузке страницы
    showSlide(currentSlide);
});

