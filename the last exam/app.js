// Fibanachi number

// let prev = 0;
// let next = 1;
// let limit = 144;

// console.log(prev); 
// if (limit > 0) console.log(next); 

// let intervalId = setInterval(() => {
//     let sum = prev + next;
//     prev = next;
//     next = sum;

//     if (sum <= limit) {
//         console.log(sum);
//     } else {
//         clearInterval(intervalId); 
//     }
// }, 1000); 

// API

// const url = `https://fakestoreapi.com/products/1`

// const getData = async () => {
//     try {
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data.title);
//     } catch (e) {
//         console.log(e);        
//     }
// }

// getData()


// BTN color

// const buttons = document.querySelectorAll("button")


// buttons.forEach(button => {
//     button.onclick = (event) => {
//         event.target.classList.toggle('red')
//     }
// })

// Blure block


// const button = document.querySelector('.btn');
    
// const container = document.querySelectorAll('blur');

// button.addEventListener('click', function() {

//     if (block.style.display === 'none') {
//       block.style.display = 'block';
//       button.textContent = 'Скрыть блок';
//     } else {
//       block.style.display = 'none';
//       button.textContent = 'Показать блок';
//     }
// });

// 6
// let i = 0

// const interval = setInterval(() => {
//     i++
//     console.log(interval);
    
// }, 1000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)