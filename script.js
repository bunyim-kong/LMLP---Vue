// nav-dropdown animayion
    document.addEventListener("DOMContentLoaded", function () {
        const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
            const btn = document.createElement("button");
        btn.className = "question-toggle";
        btn.textContent = "+";
        question.appendChild(btn);

        question.addEventListener("click", function () {
            const answerItem = this.nextElementSibling;
            const btn = this.querySelector(".question-toggle");


        document.querySelectorAll(".answer-items").forEach(item => {
            if (item !== answerItem) 
            {
                item.style.height = "0px";
                item.style.padding = "0 0";
                const otherBtn = item.previousElementSibling.querySelector(".question-toggle");
            if (otherBtn) otherBtn.classList.remove("rotate");
            }
                });


            if (answerItem.style.height && answerItem.style.height !== "0px") {
                answerItem.style.height = "0px";
                answerItem.style.padding = "0 0";
                btn.classList.remove("rotate");
                } else {
            const content = answerItem.querySelector(".answer");
                answerItem.style.height = content.scrollHeight + "px";
                answerItem.style.padding = "15px 0";
                btn.classList.add("rotate");
                }
                });
            });
        });



    
// the slider animation    
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const sliderList = document.querySelector('.slider .list');
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnails = document.querySelectorAll('.thumnail-item');

    let currentIndex = 0;

    function updateSlider(index) {
    if (index < 0) index = sliderItems.length - 1;
    if (index >= sliderItems.length) index = 0;
    currentIndex = index;

    sliderItems.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
    });

    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
    });
    }



    updateSlider(currentIndex);

    nextBtn.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
    });

    thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        updateSlider(i);
    });
    });

    setInterval(() => {
     updateSlider(currentIndex + 1);
    }, 6000);








     document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.card-slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});