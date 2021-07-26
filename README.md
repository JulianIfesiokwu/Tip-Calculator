# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://github.com/JulianIfesiokwu/Tip-Calculator)
- Live Site URL: [Add live site URL here](https://julianifesiokwu.github.io/Tip-Calculator/)

## My process

I first built the HTML according to desktop version then I wrote the CSS by starting from mobile view and working my way up to desktop view. I did not add a style sheet for tablets as this was not one of the requirements for the project. Therefore it is only mobile view and desktoip view that are catered for. Mobile view starts from 320px and desktop starts from 741px.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt alot about javascript event listeners which I knew but never tried to use. The project Javascript felt simple at first but got more complicated as I continued. Despite this I completed the project.

I am proud of the function below, I created the button to remove and keep active on the buttons or if the custom field is populated.

```
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
```

### Useful resources

w3schools

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/egbuna09)