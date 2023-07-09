
const slides = document.getElementById("slides-container");

const slidesBtnRight = document.getElementById("slide-btn-r");
const slidesBtnLeft = document.getElementById("slide-btn-l");

const carModel = document.getElementById("car-model-txt");
const carData = document.getElementById("car-data-txt");

const openNav = document.getElementById('nav-bottom-open');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click',()=>{
    openNav.classList.toggle('d-none')
    const icon = document.getElementById('hmb-ico');
    if(icon.classList.contains('bx-menu')){
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    }else if(icon.classList.contains('bx-x')){
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
})


slidesBtnRight.addEventListener("click", () => {
    let last = slides.lastElementChild;
    slides.prepend(last);
    slides.lastElementChild.classList.replace('slide-dark', 'active');
    last.classList.replace('active', 'slide-dark');

    let dataIndex = slides.lastElementChild.getAttribute('data-index');
    if (dataIndex == 0) {
        carModel.innerText = "HURACÁN";
        carData.innerText = "BEYOND THE CONCRETE";
    } else if (dataIndex == 1) {
        carModel.innerText = "URUS";
        carData.innerText = "UNLOCK ANY ROAD";
    } else if (dataIndex == 2) {
        carModel.innerText = "REVUELTO";
        carData.innerText = "FROM NOW ON";
    }
})
slidesBtnLeft.addEventListener("click", () => {

    let last = slides.lastElementChild;
    let first = slides.firstElementChild;
    slides.append(first);
    first.classList.replace('slide-dark', 'active');
    last.classList.replace('active', 'slide-dark');

    let dataIndex = slides.lastElementChild.getAttribute('data-index');
    if (dataIndex == 0) {
        carModel.innerText = "HURACÁN";
        carData.innerText = "BEYOND THE CONCRETE";
    } else if (dataIndex == 1) {
        carModel.innerText = "URUS";
        carData.innerText = "UNLOCK ANY ROAD";
    } else if (dataIndex == 2) {
        carModel.innerText = "REVUELTO";
        carData.innerText = "FROM NOW ON";
    }
})

const slider_bg = document.getElementById("second-slider-section");
const tdSliderSpan = document.getElementById("td-slider-span");
const tdSliderH2 = document.getElementById("td-slider-h2");

function removeClass(){
    tdSliderSpan.classList.remove('letter-by-letter-animation');
    tdSliderH2.classList.remove('letter-by-letter-animation');
}
function slideSection(str) {
    

    if (str == 'rev') {
        slider_bg.style.backgroundImage = "url('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/revuelto_home.jpg')";
        tdSliderSpan.innerText = "CONFIGURATOR";
        tdSliderH2.innerHTML = "CREATE YOUR<br>REVUELTO";
        tdSliderSpan.classList.add('letter-by-letter-animation');
        tdSliderH2.classList.add('letter-by-letter-animation');
        setTimeout(() => {removeClass();},1200);

    } else if (str == 'hur') {
        slider_bg.style.backgroundImage = "url('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/huracan_sterrato_home.jpg')";
        tdSliderSpan.innerText = "CONFIGURATOR";
        tdSliderH2.innerHTML = "CREATE YOUR<br>HURACÁN";
        tdSliderSpan.classList.add('letter-by-letter-animation');
        tdSliderH2.classList.add('letter-by-letter-animation');
        setTimeout(() => {removeClass();},1200);
    } else if (str == 'uru') {
        slider_bg.style.backgroundImage = "url('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/urus_s_home.jpg')";
        tdSliderSpan.innerText = "CONFIGURATOR";
        tdSliderH2.innerHTML = "CREATE YOUR<br>URUS";
        tdSliderSpan.classList.add('letter-by-letter-animation');
        tdSliderH2.classList.add('letter-by-letter-animation');
        setTimeout(() => {removeClass();},1200);
    }

}





