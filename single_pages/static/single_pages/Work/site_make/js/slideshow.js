let slides = document.querySelectorAll("#slides>img");
let prev = document.getElementById("prev")
let next = document.getElementById("next")

let current = 0;
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n){
    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = "none"; /* 모든이미지 화면에서 감춤 */
    }
    slides[n].style.display = "block";//n번쨰 이미지만 화면에 표시
}

function prevSlide(){
    if(current>0) current -= 1; /* currnet값이 0보다 크면 이전위치로 */
    else current = slides.length -1 /* 그렇지 않으면 마지막위치로 */
        showSlides(current)/* 이동한 위치의 이미지 표시 */    
}

function nextSlide(){
    if(current<slides.length-1) current += 1; /* currnet값이 2보다 작으면 다음위치로 */
    else current = 0 /* 그렇지 않으면 첫번째위치로 */
        showSlides(current)/* 이동한 위치의 이미지 표시 */    
}
