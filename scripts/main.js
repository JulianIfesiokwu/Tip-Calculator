const billAmount = document.querySelector('.bill--amount');
const billInput = document.querySelector('.bill__input');
const peopleAmount = document.querySelector('.people__amount');
const peopleInput = document.querySelector('.people__input');
const customInput = document.querySelector('.custom');
const errorMessage = document.querySelector('.error--message');
const tipBtns = document.querySelectorAll('button');
const resetBtn = document.querySelector('.reset');

function highlightBorder(e) {
    let targetParent = e.target.parentElement;
    targetParent.style.border = '2px solid var(--Strong-cyan)';
}

function removeHighlight (e) {
    let targetParent = e.target.parentElement;
    targetParent.style.border = '2px solid var(--Light-grayish-cyan-2)';

    if( targetParent.classList.contains('people__input')) {
        if (peopleAmount.value === '0' || peopleAmount.value === '' || peopleAmount.value === null) {
            displayError(targetParent);
        }
    }

    // To calculate all fields must be filled
    if(billAmount.value > 0 ) {

    }
}

function displayError (targetParent) {
    errorMessage.style.visibility = 'visible';
    targetParent.style.border = '2px solid hsl(66, 74%, 62%)';

    setTimeout(() => {
        errorMessage.style.visibility = 'hidden';
        targetParent.style.border = '2px solid var(--Light-grayish-cyan-2)';
    },3000)
}

function calculate() {
    tipBtns.forEach((tipBtn) => {
        if( tipBtn.classList.contains('tip__percentage') ) {
            console.log('9')
        }
        
        if( tipBtn.classList.contains('tip__percentage') ) {
            console.log('9')
        }
    });
    
}

function resetAll () {
    customInput.value = '';
    peopleAmount.value = '';
    billAmount.value = '';
}

billAmount.addEventListener('focus', highlightBorder);
billAmount.addEventListener('blur', removeHighlight);

peopleAmount.addEventListener('focus', highlightBorder);
peopleAmount.addEventListener('blur', removeHighlight);

customInput.addEventListener('focus', highlightBorder);
customInput.addEventListener('blur', removeHighlight);

resetBtn.addEventListener('click', resetAll);

