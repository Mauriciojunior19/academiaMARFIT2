let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
/* Slides */

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 4000,  
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

document.addEventListener("DOMContentLoaded", function() {
    let lerMaisBtn = document.querySelectorAll('.btn');

    lerMaisBtn.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            let box = this.closest('.box'); // Encontra a div .box mais próxima do botão clicado

            let descricaoServico = box.querySelector('.content p:nth-child(3)'); // Seleciona o parágrafo de descrição do serviço

            // Cria um novo parágrafo
            let novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta explicabo voluptatibus sequi inventore, facilis architecto totam maxime eveniet sapiente illum voluptates dignissimos sunt maiores accusamus optio? Voluptate, odit quod!';
            novoParagrafo.classList.add('descricao-servico');
            box.querySelector('.content').appendChild(novoParagrafo); // Adiciona o novo parágrafo à div .content
        });
    });
});




