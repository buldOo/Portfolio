let navMenu = document.querySelectorAll('.nav_menu');
let about = document.querySelector('.about_module');
let dev = document.querySelector('.dev_module');
let mockup = document.querySelector('.mockup_module');

navMenu.forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.classList.contains('active')) {
            // Nothing...

        } else {
            navMenu.forEach(element => {
                element.classList.remove('active');
                element.classList.remove('inactive');
                element.classList.add('inactive');
            });

            element.classList.remove('inactive');
            element.classList.add('active');

            if (element.classList.contains('about')) {
                about.classList.remove('hidden');
                dev.classList.add('hidden');
                mockup.classList.add('hidden');

            } else if(element.classList.contains('dev')) {
                about.classList.add('hidden');
                dev.classList.remove('hidden');
                mockup.classList.add('hidden');

            } else if(element.classList.contains('mockup')) {
                about.classList.add('hidden');
                dev.classList.add('hidden');
                mockup.classList.remove('hidden');
            }
        }
    })
});

let cursor = document.querySelector('.cursor');
let smallCursor = document.querySelector('.cursor_small');

document.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 15) + 'px; left: ' + (e.pageX - 15) + 'px;');
});