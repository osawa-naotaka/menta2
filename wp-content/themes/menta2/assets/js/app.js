'use strict';

console.info('reading theme JavaScript...');

/* Humberger Menu */
const hamburger_event          = document.querySelectorAll('.hamburger-event');
const hamberger_event_listener = document.querySelectorAll('.hambarger-event-listener')
hamburger_event.forEach((x) => {
    x.addEventListener('click', (e) => {
        hamburger_event.forEach((y) => y.classList.toggle('open'));
        hamberger_event_listener.forEach((y) => y.classList.toggle('open'));
    });
});

// Header Transparency
function floatToHex2String(val)
{
    const s = parseInt(val).toString(16);
    return s.length == 1 ? '0' + s : s;
}

const header_element = document.querySelector('header');
const hero_element   = document.querySelector('.about > .section-heading');
const header_intersection_callback = (entries, observer) => {
    entries.forEach((entry) => {
        header_element.style.backgroundColor = 
            '#ffffff' + floatToHex2String(0xff * entry.intersectionRatio);
    });
};
const header_intersection_opt = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0], 
};
const header_intersection_observer = new IntersectionObserver(header_intersection_callback, header_intersection_opt);
header_intersection_observer.observe(hero_element);


// Fade effect
const fade_opt = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.25, 0.5, 0.75, 1.0],
};
const fade_elements = document.querySelectorAll('.fade');
function fade_intersection_callback(entries, observer)
{
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0.5) {
            entry.target.classList.add('show');
            fade_observer.unobserve(entry.target);
            console.log("hoge");
        }
    })
}

const fade_observer = new IntersectionObserver(fade_intersection_callback, header_intersection_opt);
fade_elements.forEach((e) => {
    fade_observer.observe(e);
});



/* Add Event Listner for tab-header-item */
const tab_header_items = document.querySelectorAll('.tab-header-item');
const tab_contents     = document.querySelectorAll('.tab-content');
tab_header_items.forEach((x) => {
    x.addEventListener('click', (e) => {
        const tab_name = e.currentTarget.classList[1]; /* ad-hock: must be fixed. */

        // make selected .tab-header-item highlighted
        const is_selected = 'tab-is-selected';
        tab_header_items.forEach((y) => {
            if(y.classList.contains(tab_name)) {
                y.classList.add(is_selected);
            } else {
                y.classList.remove(is_selected);
            }
        });

        // make selected .tab-content visible
        const is_visible = 'content-is-visible';
        tab_contents.forEach((y) => {
            if(y.classList.contains(tab_name)) {
                y.classList.add(is_visible);
            } else {
                y.classList.remove(is_visible);
            }
        });
    });
});

console.info('reading theme JavaScript done.');
