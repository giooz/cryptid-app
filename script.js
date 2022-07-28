//armazenar/resgatar nome do jogador na localStorage
const nameBtn = document.getElementById('player-number');

nameBtn.addEventListener('change', (e) => {
    localStorage.setItem('playername', e.target.value);
})
if (nameBtn.value === ''){
    const name = localStorage.getItem('playername');
    nameBtn.value = name;
}

//tornar botões de pista opacos no clique (1) e armazenar estado do botão de pista na localStorage
const checkButton = document.querySelectorAll('.check-button');

checkButton.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        button.classList.toggle('check-button--clicked'); 
        if (e.target.classList.contains('check-button--clicked')) {
            localStorage.setItem('clicked_' + index, true);
        } else {
            localStorage.setItem('clicked_'+ index, false);
        }
    })
    
//buscar o estado na localStorage e atualizar o botão de acordo no refresh
    const isClicked = JSON.parse(localStorage.getItem('clicked_' + index));
    if (isClicked == true){
        button.classList.add('check-button--clicked');
    }
})

//esconder a seção de botões ao clicar no botão título (2), girar a arrow 180deg (3) e armazenar estado do botão de pista na localStorage
const sectionTitleButton = document.querySelectorAll('.section-title-button');

sectionTitleButton.forEach((button, index) => {
    button.addEventListener('click', (e)=> {
        button.parentElement.classList.toggle('hide');
        const arrowDown = button.querySelector('.arrow-down');
        arrowDown.classList.toggle('arrow-up');
        if (e.target.parentElement.classList.contains('hide')){
            localStorage.setItem('colapsed_' + index, true);
        } else {
            localStorage.setItem('colapsed_' + index, false);
        }
    })
    
//buscar o estado na localStorage e atualizar o botão de acordo no refresh
    const isColapsed = JSON.parse(localStorage.getItem('colapsed_' + index));
    if (isColapsed == true){
        button.parentElement.classList.toggle('hide');
    }
})

//abrir o modal de fim de jogo ao clicar no end button e esconder a main
const endButton = document.getElementById('end-button');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const endContainer = document.querySelector('.end-container');

endButton.addEventListener('click', ()=> {
    endContainer.classList.add('end-container--modal');
    document.body.style = "overflow: hidden";
})

yesButton.addEventListener('click', ()=> {
    localStorage.clear();
    nameBtn.value = '';
    location.reload();
})

noButton.addEventListener('click', ()=> {
    endContainer.classList.remove('end-container--modal');
    document.body.style = '';
})



    //métodos alternativos de fazer a mesma coisa - somente p/ fins de estudo

//1
// checkButton.forEach(button => button.addEventListener('click', () => {
//     button.classList.toggle('check-button--clicked'); 
// }))

//tornar botões de pista opacos no clique (usando for pra iterar entra cada elemento da array)
// for (let i = 0; i < checkButton.length; i++){
//     checkButton[i].addEventListener('click', () => {
//         checkButton[i].classList.toggle('check-button--clicked');
//     })
// }

//2
//esconder a seção de botões ao clicar no botão título (usando iteração e mexendo só no JS)
// for (let i = 0; i < sectionTitleButton.length; i++){
//     sectionTitleButton[i].addEventListener('click', () => {
//         let nextButton = sectionTitleButton[i].nextElementSibling;
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