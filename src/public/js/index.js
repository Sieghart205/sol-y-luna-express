
const btnModal1 = document.getElementById("btn-modal-1");
btnModal1.addEventListener("click",()=>{
    document.getElementById("modal-1").classList.remove("show");
})


const upModal1 = document.getElementById("up-modal-1");
upModal1.addEventListener("click",()=>{
    document.getElementById("modal-1").classList.add("show");
})

const upModal2 = document.getElementById("up-modal-2");
upModal2.addEventListener("click",()=>{
    document.getElementById("modal-2").classList.add("show");
})

const btnModal2 = document.getElementById("btn-modal-2");
btnModal2.addEventListener("click",()=>{
    document.getElementById("modal-2").classList.remove("show");
})

const upModal3 = document.getElementById("up-modal-3");
upModal3.addEventListener("click",()=>{
    document.getElementById("modal-3").classList.add("show")
})

const btnModal3 = document.getElementById("btn-modal-3");
btnModal3.addEventListener("click",()=>{
    document.getElementById("modal-3").classList.remove("show");
})