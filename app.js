'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == 'light_theme') {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log(document.body.classList);
    
    console.log('current class name:' + className);

});