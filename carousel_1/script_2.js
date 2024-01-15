document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;
    let prevItem = null;

    function showSlide(slideIndex) {
        carouselItems.forEach((item, index) => {
            if (item.classList.contains("active")) return;

            if (index === slideIndex) {
                item.classList.add('active');
                setTimeout(() => {

                    item.classList.add('next');
                }, 1000)

            } else {
                item.classList.remove('next', 'active');
            }


        });
    }

    function nextSlide() {
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

