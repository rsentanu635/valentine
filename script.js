const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const buttonOne =  document.querySelector('.button1');
const buttonTwo =  document.querySelector('.button2');
const myGif = document.getElementById('gif');

const wrapperRect = wrapper.getBoundingClientRect();
const buttonTwoRect = buttonTwo.getBoundingClientRect();

buttonOne.addEventListener('click', () => {
    question.innerHTML = 'Yaaaay! I bet you said breh. Hehe. :)';
    if (myGif.src =  'Images/peach-goma.gif') {
        myGif.src = 'Images/good-night.gif';
    }
    buttonOne.style.display = 'none';
    buttonTwo.style.display = 'none';
});

buttonTwo.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - buttonTwoRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - buttonTwoRect.height)) + 1;

    buttonTwo.style.left = i + 'px';
    buttonTwo.style.top = j + 'px';
});
