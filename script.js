//tornar botões de pista opacos no clique
const checkButton = document.querySelectorAll('.check-button');

checkButton.forEach(button => button.addEventListener('click', () => {
    button.classList.toggle('check-button--clicked');
}))

//tornar botões de pista opacos no clique (usando for pra iterar entra cada elemento da array)
// for (let i = 0; i < checkButton.length; i++){
//     checkButton[i].addEventListener('click', () => {
//         checkButton[i].classList.toggle('check-button--clicked');
//     })
// }

//esconder a seção de botões ao clicar no botão título
const sectionTitleButton = document.querySelectorAll('.section-title-button');
const downArrow = document.getElementById('down-arrow');

sectionTitleButton.forEach(button => button.addEventListener('click', () => {
    button.parentElement.classList.toggle('hide');
    //flipImage();
}))

function flipImage(){
    downArrow.style.transform = 'rotate(180deg)';
}

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
