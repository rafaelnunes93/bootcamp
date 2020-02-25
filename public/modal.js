const modalOverlay = document.querySelector('.modal-overlay');
const BtnModal = document.querySelectorAll('.Btn_know');

for (let btn of BtnModal){
    btn.addEventListener("click",function(){
        const videosId = btn.getAttribute("id")
        modalOverlay.classList.add('active')    
        modalOverlay.querySelector("iframe").src=`https://www.youtube.com/embed/${videosId}`   

    })
}

document.querySelector('.close-modal').addEventListener("click",function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src="";

})



