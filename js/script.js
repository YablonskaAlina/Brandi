"use strict";

function radioButton(radBnt){
    radBnt.forEach(block => {
        block.addEventListener('click', () => {
            radBnt.forEach(block  => {
                block.classList.remove('radio__active');
            });
            block.classList.add('radio__active');

        });
    });
}

const radioBtns = document.querySelectorAll(".radio__button");

radioButton(radioBtns);