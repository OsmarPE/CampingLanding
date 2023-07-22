document.addEventListener('DOMContentLoaded', main);
function main() {
    var header = document.querySelector('.header');
    var main = document.querySelector('.main');
    window.addEventListener('scroll', function () {
        var _a;
        var y = (_a = main === null || main === void 0 ? void 0 : main.getBoundingClientRect().y) !== null && _a !== void 0 ? _a : 0;
        y <= -5 ? header === null || header === void 0 ? void 0 : header.classList.add('active') : header === null || header === void 0 ? void 0 : header.classList.remove('active');
    });
    gsap.from('.main__image-2', 1.2, { opacity: 0, y: 200, delay: .1 });
    gsap.from('.main__image-3', 1.2, { opacity: 0, y: 200, delay: .5 });
    gsap.from('.main__body', 1.2, { opacity: 0, y: -60, delay: 1 });
    gsap.from('.main__bird-1', 1.2, { opacity: 0, x: 80, delay: 1 });
    gsap.from('.main__bird-2', 1.2, { opacity: 0, x: -80, delay: 1 });
    gsap.from('.main__image-1', 1.2, { opacity: 0, y: 200, delay: 1.2 });
    gsap.from('.main__image-4', 1.2, { opacity: 0, x: 200, delay: 1.3 });
}
