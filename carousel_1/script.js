document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentSlide = 1;
    let isInitialRender = true;
    let direction = "next";
    let prevSlideIndex = null;
    let prevSlide = null;

    function showSlide(slideIndex) {
        carouselItems.forEach((item, index) => {
            !isInitialRender && (prevSlide = carouselItems[prevSlideIndex]);
            if (index === slideIndex && !isInitialRender) {
                if (direction === "next") {
                    prevSlide.classList.add("next");
                    item.classList.add("active");
                    setTimeout(() => {
                        item.classList.add("next");
                    }, 0);
                    setTimeout(() => {
                        prevSlide.classList.remove("next", "active");
                        item.classList.remove("next");
                        if (currentSlide === carouselItems.length - 1) {
                            item.classList.remove("active");
                            carouselItems[1].classList.add("active");
                            currentSlide = 1;
                        }
                    }, 1000);
                }
                if (direction === "prev") {
                    prevSlide.classList.add("prev");
                    setTimeout(() => {
                        item.classList.add("active");
                    }, 1000);
                    setTimeout(() => {
                        item.classList.add("prev");
                    }, 1500);
                    setTimeout(() => {
                        prevSlide.classList.remove("prev", "active");
                        item.classList.remove("prev");
                        if (currentSlide === 0) {
                            item.classList.remove("active");
                            carouselItems[
                                carouselItems.length - 2
                            ].classList.add("active");
                            currentSlide = carouselItems.length - 2;
                        }
                    }, 3000);
                }
            }
        });
    }

    const handleChangeSlide = (direction) => {
        prevSlideIndex = currentSlide;
        currentSlide =
            direction === "next"
                ? (currentSlide + 1) % carouselItems.length
                : (currentSlide - 1 + carouselItems.length) %
                  carouselItems.length;
        isInitialRender = false;
        showSlide(currentSlide);
    };
    function showNextSlide() {
        direction = "next";
        handleChangeSlide("next");
    }

    function showPrevSlide() {
        direction = "prev";
        handleChangeSlide("prev");
    }

    // Добавляем обработчики событий для кнопок переключения слайдов
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Показываем первый слайд при загрузке страницы
    showSlide(currentSlide);
});
