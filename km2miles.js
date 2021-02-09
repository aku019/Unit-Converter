const ip = document.querySelector('#input');
const btn = document.querySelector('#btn');
//const decode = document.querySelector('#decode');
const op = document.querySelector('#output');
btn.addEventListener('click', () => {
    op.value = ip.value*1.60934;
});
