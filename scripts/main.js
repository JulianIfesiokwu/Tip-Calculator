const billAmount = document.querySelector('.bill--amount');
const billInput = document.querySelector('.bill__input');
const peopleAmount = document.querySelector('.people__amount');
const peopleInput = document.querySelector('.people__input');
const customInput = document.querySelector('.custom');
const errorMessage = document.querySelector('.error--message');
const tipBtns = document.querySelectorAll('button');
const resetBtn = document.querySelector('.reset');

const tipValuePerPerson = document.querySelector('.tip--per--person');
const totalValuePerPerson = document.querySelector('.total--per--person');

function highlightBorder(e) {
    let targetParent = e.target.parentElement;
    targetParent.style.border = '2px solid var(--Strong-cyan)';

    // For custom input, when highlighted any percentage already highlighted is cleared
    let chose = Array.from(tipBtns);

    if( e.target.classList.contains('custom') ) {
        // Loop through to check for active class, if it exists remove all active and add to new btn
        chose.forEach(chosen => {
            if( chosen.classList.contains('active') ) {
                chosen.classList.remove('active');
            }
        }
    )}
}

function removeHighlight (e) {
    let targetParent = e.target.parentElement;
    targetParent.style.border = '2px solid var(--Light-grayish-cyan-2)';

    if( targetParent.classList.contains('people__input')) {
        // Show error for people amount
        if (peopleAmount.value === '0' || peopleAmount.value === '' || peopleAmount.value === null) {
            displayError(targetParent);
        }
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

function calculate(billAmt, peopleAmt, selectedPercentage) {
    tipAmountPerPerson(billAmt, peopleAmt, selectedPercentage);
    totalAmountPerPerson(billAmt, peopleAmt, selectedPercentage);    
}

// Calculate tip amount per person
function tipAmountPerPerson(billAmt, peopleAmt, selectedPercentage) {
    
    tipValuePerPerson.textContent = `$${((billAmt*(selectedPercentage/100))/peopleAmt).toFixed(2)}`;
    // console.log(eachTip)  
}

function totalAmountPerPerson(billAmt, peopleAmt, selectedPercentage) {
    let eachTip = (billAmt*(selectedPercentage/100))/peopleAmt;
    totalValuePerPerson.textContent = `$${((billAmt/peopleAmt) + eachTip).toFixed(2)}`;
}

function toggleActive(chosenPercentage) {    
    let chose = Array.from(tipBtns);

    if(chosenPercentage.classList.contains('active') ) {
        chosenPercentage.classList.remove('active');        
    } else {
        // Loop through to check for active class, if it exists remove all active and add to new btn
        chose.forEach(chosen => {
        if( chosen.classList.contains('active') ) {
            chosen.classList.remove('active');
        } else {
        chosen.classList.remove('active')
            }
        })
        chosenPercentage.classList.add('active');
        customInput.value = '';
    }
}

function resetAll () {
    customInput.value = '';
    peopleAmount.value = '';
    billAmount.value = '';
    tipValuePerPerson.textContent = `$${(0.00).toFixed(2)}`;
    totalValuePerPerson.textContent = `$${(0.00).toFixed(2)}`;
}

billAmount.addEventListener('focus', highlightBorder);
billAmount.addEventListener('blur', removeHighlight);

peopleAmount.addEventListener('focus', highlightBorder);
peopleAmount.addEventListener('blur', removeHighlight);

customInput.addEventListener('focus', highlightBorder);
customInput.addEventListener('blur', removeHighlight);

resetBtn.addEventListener('click', resetAll);

tipBtns.forEach((tipBtn) => {
    tipBtn.addEventListener('click', (e) => {
        let chosenPercentage = e.target;
        toggleActive(chosenPercentage);
    });
})

// Calculate function based on user interactions to number of people field
peopleAmount.addEventListener('input', () => {

    // To calculate all fields must be filled
    if(billAmount.value > 0 && peopleAmount.value > 0 ) {

        let selected = Array.from(tipBtns);
        let selectedPercentage;

        selected.forEach(select => {
            // Loop through and check for an active button,if none check for custom value
            if( select.classList.contains('active') ) {
                selectedPercentage = +select.value;
                calculate(+billAmount.value, +peopleAmount.value, selectedPercentage);
            }
            if ( customInput.value > 0 ) {
                selectedPercentage = +customInput.value;
                calculate(+billAmount.value, +peopleAmount.value, selectedPercentage);
            }
        })

    }

})

