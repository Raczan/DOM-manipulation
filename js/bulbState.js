const bulb = document.getElementById('bulb');
const onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById("offBtn");

onBtn.addEventListener("click", () => {
    bulb.src='../img/light-bulb-on.svg';
});

offBtn.addEventListener("click", () => {
    bulb.src='../img/light-bulb-off.svg';
});
