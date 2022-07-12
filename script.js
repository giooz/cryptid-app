//tornar botões de pista opacos no clique
const checkButton = document.querySelectorAll('.check-button');

for (let i = 0; i < checkButton.length; i++){
    checkButton[i].addEventListener('click', () => {
        checkButton[i].classList.toggle('check-button--clicked');
    })
}

//esconder a seção de botões ao clicar no botão título
const sectionTitleButton = document.querySelectorAll('.section-title-button');

for (let i = 0; i < sectionTitleButton.length; i++){
    sectionTitleButton[i].addEventListener('click', () => {
        sectionTitleButton[i].parentElement.classList.toggle('hide')
    })
}

//esconder a seção de botões ao clicar no botão título (mexendo só no JS)
// for (let i = 0; i < sectionTitleButton.length; i++){
//     sectionTitleButton[i].addEventListener('click', () => {
//         let nextSibling = sectionTitleButton[i].nextElementSibling;
//         while (nextSibling){
//             if (nextSibling.style.display == "none"){
//                 nextSibling.style.display = "block";
//             } else {
//                 nextSibling.style.display = "none";
//             }
//             nextSibling = nextSibling.nextElementSibling;
//         }
//     })
// }

