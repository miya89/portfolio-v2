
let checkbox = document.getElementById('checkbox');


checkbox.addEventListener('change', () => {
    document.querySelector(".main").classList.toggle('contrast');
    document.querySelector(".btn").classList.toggle('secondary');
    document.querySelector(".contact-main").classList.toggle('contrast');
});