const ip = document.querySelector('#input');
const btn = document.querySelector('#btn');
const op = document.querySelector('#output');
//const output = document.querySelector('#output-url');
btn.addEventListener('click', () => {
    op.value = ip.value/1.60934;
});
