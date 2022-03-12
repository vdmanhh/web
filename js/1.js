const menuIcon = document.querySelector('.menu-small')
const btnExit = document.querySelector('.exit')
const showDrawer = document.querySelector('.menu-resposive')
menuIcon.addEventListener('click',()=>{
    showDrawer.classList.toggle("show");
})
btnExit.addEventListener('click',()=>{
    showDrawer.classList.remove("show");
})
window.addEventListener('scroll',()=>{
    if(window.pageYOffset  > 90){
        document.querySelector('.header_main').classList.add('scroll_menu')
    }
    else{
        document.querySelector('.header_main').classList.remove('scroll_menu')
    }

})
document.querySelector('.scroll_to_top').addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
//slide

const wrapper = document.querySelector('.cards-wrapper');
const dots = document.querySelectorAll('.dot');
let activeDotNum = 0;

dots.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
//   add a click event listener to each dot
  dot.addEventListener('click', (e) => {
    console.log(e);
    let clickedDotNum = e.target.dataset.num;
//     if the dot clicked is already active, then do nothing
    if(clickedDotNum == activeDotNum) {
      return;
    }
    else {
      // shift the wrapper
      let displayArea = wrapper.parentElement.clientWidth;
      console.log('displayArea=>',displayArea);
      // let pixels = -wrapper.clientWidth * clickedDotNum;
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots[activeDotNum].classList.remove('active');
//       add the active class to the clicked dot
      dots[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
    
  });
});