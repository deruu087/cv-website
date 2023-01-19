


let save_el = document.getElementById("save-el")
let count_el = document.getElementById("count-el")

let count = 0
function increment() {
    
    count = count +1
    count_el.innerText = count
    console.log(count)
}

function save(){
    let count_saved = " "+ count + " - " 
    save_el.textContent = save_el.innerText + count_saved
    count_el.textContent = 0
    count = 0

}