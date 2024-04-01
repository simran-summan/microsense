// const div = document.querySelector(".head");
// const text ="World's Smallest Facial Emotion Recognition AI"

// function textTypingEffect(element , text , i=0){
//     element.textContent += text[i];
//     if (i === text.length - 1) {
//         return;
//     }
//     setTimeout(()=> {
//         textTypingEffect(element, text, i + 1)

//     },50);
//     // setTimeout(()=> textTypingEffect(element, text, i + 1),50);
// }

// textTypingEffect(div,text);
const animElements = document.querySelectorAll('.anim');

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  animElements.forEach(animElement => {
    const slideInAt = (window.scrollY + window.innerHeight) - animElement.clientHeight / 2;
    const elementBottom = animElement.offsetTop + animElement.clientHeight;
    const isHalfShown = slideInAt > animElement.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;
    if (isHalfShown && isNotScrolledPast) {
      animElement.classList.add('active');
    } else {
      animElement.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
checkSlide();