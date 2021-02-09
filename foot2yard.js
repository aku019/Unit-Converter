const ip = document.querySelector('#input');
const btn = document.querySelector('#btn');
const op = document.querySelector('#output');
btn.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    op.value = ip.value/3;
});
