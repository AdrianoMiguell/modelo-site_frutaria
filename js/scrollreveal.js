ScrollReveal({ mobile: false });

ScrollReveal().reveal('.appear', {
    duration: 500,
    reset: false
});

ScrollReveal().reveal('.appearLeft', {
    delay: 100,
    duration: 500,
    origin: 'left',
    distance: '60px'
});
ScrollReveal().reveal('.appearRight', {
    delay: 50,
    duration: 500,
    origin: 'right',
    distance: '60px',
});
ScrollReveal().reveal('.appearTop', {
    delay: 50,
    duration: 500,
    origin: 'top',
    distance: '60px',
});