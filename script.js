//tela inicial (seleção de qtd de players)
const template = document.getElementById('main-container');
const homeBtn = document.querySelectorAll('.home-button');
const homeContainer = document.getElementById('home-container');

homeBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        localStorage.setItem('player_amount', index + 3);
        location.reload();
    })
})

//cria a qtd de telas de acordo com a qtd de players 
const playerAmount = JSON.parse(localStorage.getItem('player_amount'));
if (playerAmount != null){
    homeContainer.style.display = 'none';
    document.body.style = "overflow: visible";
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    for (let i = 0; i < (playerAmount - 1); i++){
        const playerContainer = template.content.cloneNode(true);
        swiperWrapper.prepend(playerContainer);
    }
}

//resgata na localStorage o jogador ativo (setado após init o swiper) pra usar como slide inicial
const currentPlayer = JSON.parse(localStorage.getItem('current_player') - 1);

//inicialização swiper (carousel)
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    observer: true,
    observeSlideChildren: true,
    allowTouchMove: true,
    autoHeight: true,
    grabCursor: true,
    threshold: 20,
    speed: 400,
    initialSlide: currentPlayer || 0,
    
    // Navigation arrows
    navigation: {
        nextEl: '.fwd-arrow',
        prevEl: '.back-arrow',
    },
});

//salva o slide atual como jogador ativo na localStorage
swiper.on('slideChange', function () {
    localStorage.setItem('current_player', (swiper.activeIndex + 1));
    swiper.update();
});

//armazenar/resgatar nome do jogador na localStorage
const nameBtn = document.querySelectorAll('.player-name');
nameBtn.forEach((input, index) => {
    input.placeholder = `Player ${index + 1}`;
    input.addEventListener('change', (e) => {
        localStorage.setItem('player_name_' + (index + 1), e.target.value);
    })
    if (input.value === ''){
        input.value = localStorage.getItem('player_name_' + (index + 1));
        swiper.update();
    }
})

//tornar botões de pista opacos no clique (1) e armazenar estado do botão de pista na localStorage
const clueBtn = document.querySelectorAll('.clue-button');

clueBtn.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        button.classList.toggle('clue-button--clicked'); 
        if (e.target.classList.contains('clue-button--clicked')) {
            localStorage.setItem('clicked_' + index, true);
        } else {
            localStorage.setItem('clicked_'+ index, false);
        }
        swiper.update();
    })
    
    //buscar o estado na localStorage e atualizar o botão de acordo no refresh
    const isClicked = JSON.parse(localStorage.getItem('clicked_' + index));
    if (isClicked == true){
        button.classList.add('clue-button--clicked');
    }
})

//esconder a seção de botões ao clicar no botão título (2), girar a arrow 180deg (3) e armazenar estado do botão de pista na localStorage
const sectionTitleBtn = document.querySelectorAll('.section-title-button');

sectionTitleBtn.forEach((button, index) => {
    const arrow = button.querySelector('.arrow-up');
    button.addEventListener('click', (e)=> {
        button.parentElement.classList.toggle('hide');
        arrow.classList.toggle('arrow-down');
        if (e.target.parentElement.classList.contains('hide')){
            localStorage.setItem('colapsed_' + index, true);
        } else {
            localStorage.setItem('colapsed_' + index, false);
        }
        swiper.update();
    })
    
    //buscar o estado na localStorage e atualizar o botão de acordo no refresh
    const isColapsed = JSON.parse(localStorage.getItem('colapsed_' + index));
    if (isColapsed == true){
        button.parentElement.classList.toggle('hide');
        arrow.classList.toggle('arrow-down');
    }
})

//abrir o modal de fim de jogo ao clicar no end button e esconder a main
const endButton = document.getElementById('end-button');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const endContainer = document.querySelector('.end-container');

endButton.addEventListener('click', ()=> {
    endContainer.classList.add('container-modal');
    document.body.style = "overflow: hidden";
    swiper.update();
})

yesButton.addEventListener('click', ()=> {
    localStorage.clear();
    nameBtn.value = '';
    location.reload();
})

noButton.addEventListener('click', ()=> {
    endContainer.classList.remove('container-modal');
    document.body.style = 'overflow: visible';
    swiper.update();
})



//métodos alternativos de fazer a mesma coisa - somente p/ fins de estudo

//1
// clueBtn.forEach(button => button.addEventListener('click', () => {
//     button.classList.toggle('clue-button--clicked'); 
// }))

//tornar botões de pista opacos no clique (usando for pra iterar entra cada elemento da array)
// for (let i = 0; i < clueBtn.length; i++){
//     clueBtn[i].addEventListener('click', () => {
//         clueBtn[i].classList.toggle('clue-button--clicked');
//     })
// }

//2
//esconder a seção de botões ao clicar no botão título (usando iteração e mexendo só no JS)
// for (let i = 0; i < sectionTitleBtn.length; i++){
//     sectionTitleBtn[i].addEventListener('click', () => {
//         let nextButton = sectionTitleBtn[i].nextElementSibling;
//         while (nextButton){
//             if (nextButton.style.display == "none"){
//                 nextButton.style.display = "block";
//             } else {
//                 nextButton.style.display = "none";
//             }
//             nextButton = nextButton.nextElementSibling;
//         }
//     })
// }

//3
//flipImage(downArrow);
//flipar a imagem no JS usando style.transform e uns if chatos
// function flipImage(img){
//     if (img.style.transform != 'scale(0.75) rotate(0deg)'){
//         img.style.transform = 'scale(0.75) rotate(0deg)';
//     } else {
//         img.style.transform = 'scale(0.75) rotate(180deg)';
//     }
// }