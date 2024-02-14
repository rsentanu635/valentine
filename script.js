const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const buttonOne =  document.querySelector('.button1');
const buttonTwo =  document.querySelector('.button2');
const myGif = document.getElementById('gif');

const wrapperRect = wrapper.getBoundingClientRect();
const buttonTwoRect = buttonTwo.getBoundingClientRect();

buttonOne.addEventListener('click', () => {
    question.innerHTML = 'Yaaaay! I bet you said breh. Hehe. :)';
    if (myGif.src !=  'https://tenor.com/view/peach-goma-gif-12469418372825049035') {
        myGif.src !=  'https://tenor.com/view/peach-goma-gif-12469418372825049035';
    }
    else {
        Image.src = "https://tenor.com/view/peach-goma-gif-17346086270926655341";
    }
});

buttonTwo.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - buttonTwoRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - buttonTwoRect.height)) + 1;

    buttonTwo.style.left = i + 'px';
    buttonTwo.style.top = j + 'px';
});