function nav() {
   let navigationSelect = document.querySelector('#nav');
   let selectedValue = navigationSelect.value;

   switch(selectedValue) {
     case 'home':
       window.location.href = 'index.html';
       break;
     case 'calculator':
       window.location.href = 'calculators.html';
       break;
       case 'road':
       window.location.href = 'roadmap.html';
       break;
   }
}
