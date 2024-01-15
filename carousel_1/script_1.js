document.addEventListener('DOMContentLoaded', function() {

    function showNextSlide() {
        // Получаем контейнер слайдов
        const carouselInner = document.querySelector('.carousel-inner');
        // Находим текущий активный слайд
        const currentSlide = document.querySelector('.carousel-item.active');
        // Определяем следующий слайд; если текущий слайд последний, выбираем первый слайд, создавая эффект бесконечной карусели
        const nextSlide = currentSlide.nextElementSibling || carouselInner.firstElementChild;
        console.log("nextSlide:", nextSlide);

        // Добавляем класс .next к следующему слайду для анимации его появления
        nextSlide.classList.add('active');

        setTimeout(() => {
            currentSlide.classList.remove('active', 'next');

        }, 1000);

        // Начинаем слушать событие transitionend для следующего слайда
        nextSlide.addEventListener('transitionend', function transitionEndHandler() {
            console.log("transitionend:");
            // После завершения анимации добавляем класс .active к следующему слайду
            nextSlide.classList.add('active');
            // Удаляем класс .active с текущего слайда
            currentSlide.classList.remove('active', 'next');
            // Удаляем класс .next с обоих слайдов
            nextSlide.classList.remove('next');

            // Удаляем обработчик события transitionend после его выполнения, чтобы избежать множественных вызовов
            nextSlide.removeEventListener('transitionend', transitionEndHandler);
        });

        // Запускаем анимацию перемещения слайдов
        setTimeout(function() {
            // Добавляем класс .next к текущему активному слайду для анимации его скрытия
            currentSlide.classList.add('next');
            // Устанавливаем свойство transform, чтобы начать анимацию перемещения следующего слайда на экран

        }, 50); // Задержка для запуска анимации
    }


    function nextSlide() {
        showNextSlide();
    }

    // function prevSlide() {
    //     currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    //     showSlide(currentSlide);
    // }

    // Добавляем обработчики событий для кнопок переключения слайдов
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    // prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Показываем первый слайд при загрузке страницы

});
