console.log('hello world!')

const element = $("#workrelated")[0];
// element.innerHTML = "Werk'"

// const images = $("img");
// console.log(images)

// let iterations = 0;
// setInterval(() => {
//     iterations++;
//     for (let i = 0; i < images.length; i++) {
//         const currImage = images[i];
//         const borderColor = `hsl(${iterations * 30 % 255}, 100%, 50%)`
//         currImage.style.border = `10px solid ${borderColor}`
//     }
// }, 250) //250 is the milliseconds

// setTimeout(() => {
//     const tempTextElement = $("#main")[0];
//     tempTextElement.classList.add("invisible")
// }, 3000)

//set Timeout -- takes an id element
// adds the properties from the class .invisble and has them happen once the time passes (3 seconds, 3000 ms)


// const pageHeroElement = $("#pagehero")[0];
// pageHeroElement.addEventListener("click", () => console.log("hello!"))




//////////////******HOME PAGE******/////////////
let generalAdviceButton = document.getElementById('generaladvice') //div to be clicked
let makeMeVisible = document.querySelector('.hidden')
let shopAdviceButton = document.getElementById('wheretobuy')
let notAmazonButton = document.getElementById('notamazon')


generalAdviceButton.addEventListener("click", toggleSection1)
shopAdviceButton.addEventListener("click", toggleSection2)
notAmazonButton.addEventListener("click", toggleSection3)


function toggleSection1() {
    let elementToShow = document.getElementById("generaladvice");
    if (elementToShow.children[1].className === "hidden") {
        elementToShow.children[1].className = 'display' 
    } else {
        elementToShow.children[1].className = "hidden"    }
}

function toggleSection2() {
    let elementToShow = document.getElementById("wheretobuy");
    if (elementToShow.children[1].className === "hidden") {
        elementToShow.children[1].className = 'display' 
    } else {
        elementToShow.children[1].className = "hidden"    }
}

function toggleSection3() {
    let elementToShow = document.getElementById("notamazon");
    if (elementToShow.children[1].className === "hidden") {
        elementToShow.children[1].className = 'display' 
    } else {
        elementToShow.children[1].className = "hidden"    }
}

//     if (
//         event.target.style.display = 'none'
//     } else {
//         event.target.style.display === 'block' 
// }










// //////////////******PRODUCT PAGE******/////////////
// //click event

// let preferred = $('#preferred')[0]
// let avoid = $('#avoid')[0]
// let chemicals = $('#chemicals')[0]

// let makeVisible = $('.invisible')[0]
// let makeVisible1 = $('.invisible1')[0]
// let makeVisible2 = $('.invisible2')[0]
// let preferredheader = $('#preferredheader')[0]


// //when the preferred box is clicked, the .invisible class will appear
// preferred.addEventListener("click", () => makeVisible.style.display = 'block')
// avoid.addEventListener("click", () => makeVisible1.style.display = 'block' )



// let avoidHeader = $('#avoidheader')[0]
// // avoidHeader.addEventListener("click", () => makeVisible3.style.display = 'none' )

