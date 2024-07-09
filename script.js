const ShowText1 = document.querySelector('.txt1') 
const ShowText2 = document.querySelector('.txt2')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')

// -------------------- FUNÇÕES --------------------------------

ShowText1.addEventListener('click', () => {
    p1.classList.toggle('hidden')
})

ShowText2.addEventListener('click', () => {
    p2.classList.toggle('hidden')
})



// document.querySelectorAll('h2').forEach(title => {
//     title.addEventListener('click', () => {
//         const nextElement = title.nextElementSibling;
//         if (nextElement) {
//             nextElement.classList.toggle('hidden');
//             if (nextElement.classList.contains('hidden')) {
//                 nextElement.style.maxHeight = '0';
//             } else {
//                 nextElement.style.maxHeight = nextElement.scrollHeight + 'px';
//             }
//         }
//     });
// })
