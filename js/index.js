
var header_fix = function () {
    if (window.scrollY >= 5) {
        document.querySelector('header').classList.add('header_fix');
    } else {
        document.querySelector('header').classList.remove('header_fix');
        }
    }
document.addEventListener('scroll', header_fix)
