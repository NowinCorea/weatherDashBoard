
//make range javascript;
const rangeInputSlider = ()=>{
   const rangeThumb = document.getElementById('range-thumb');
   const rangeNumber = document.getElementById('range-number');
   const rangeLine= document.getElementById('range-line');
   const rangeInput= document.getElementById('range-input');
   rangeNumber.textContent = rangeInput.value;

   //Calculate
   //rangeInput.value = 50, rangeInput.max = 100, (50 / 100 = 0.5)
   //rangeInput.offsetWidth = 248, rangeThumb.offsetWidth = 32, (248 - 32 = 216)

   const thumbPosition = (rangeInput.value / rangeInput.max);
   space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

      if(thumbPosition == 0){
         document.getElementById('range__value').style.left = '52.5714px';
         document.getElementById('range__value').style.transform = 'rotate(0deg)';
         document.getElementById('range-number').style.transform =  `rotate(0)`;
         //document.getElementById('range__value').style.backgroundColor = 'coral';
         rangeThumb.style.left = (thumbPosition * space) + 'px';
         rangeLine.style.width = (rangeInput.value*4.761) + '%';
      }
      else{
         document.getElementById('range__value').style.transform = 'rotate(-45deg)';
         document.getElementById('range__value').style.left =  `-10px`;
         document.getElementById('range-number').style.transform =  `rotate(45deg)`;
         //rangeInput.value = 50, ancho = 50%
         rangeThumb.style.left = (thumbPosition * space) + 'px';
         rangeLine.style.width = (rangeInput.value*4.761) + '%';
      }
   

   rangeInput.addEventListener('input', rangeInputSlider)
}
rangeInputSlider();


//make selector javascript;
const selectCity = ()=>{
   const label = document.querySelectorAll('.label');
   label.forEach(function(lb){
      lb.addEventListener('click', e => {
         let optionList = lb.nextElementSibling;
         let optionItems = optionList.querySelectorAll('.optionItem');

         document.getElementById("optionList").classList.toggle('addBoard');
         clickLabel(lb, optionItems);
      })
   });

   const clickLabel = (lb, optionItems) => {
      if(lb.parentNode.classList.contains('active')) {
         lb.parentNode.classList.remove('active');
         document.getElementById("optionList").classList.remove('addBoard');
         optionItems.forEach((opt) => {
               opt.removeEventListener('click', () => {
                  handleSelect(lb, opt)
               })
         })
      } else {
         lb.parentNode.classList.add('active');
         optionItems.forEach((opt) => {
               opt.addEventListener('click', () => {
                  handleSelect(lb, opt)
               })
         })
      }
   }

   const handleSelect = (label, item) => {
      label.innerHTML = item.textContent;
      document.getElementById("optionList").classList.remove('addBoard');
      label.parentNode.classList.remove('active');
   }
}

selectCity();
console.log(document.getElementById("optionList").childNodes);

//manageBtn
document.getElementById("manageBtn").addEventListener('click',()=>{
   document.getElementById("manageArea").classList.toggle("manageToggle");
   document.getElementById("manageArea").style.transition = "all .3s";
})


window.addEventListener("resize", function() {
   //console.log(window.innerWidth);
   const innerWidth = window.innerWidth;
   const rangeLine= document.getElementById('range-line');
   document.getElementById("manageArea").classList.add("manageToggle");
   rangeInputSlider();

   if(innerWidth > 1000){
      console.log(innerWidth);
   }
})