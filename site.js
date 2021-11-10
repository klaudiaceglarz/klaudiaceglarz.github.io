const infoBtn = document.getElementById('infoBtn');
const leftPanel = document.querySelector('#leftPanel');
const icons = document.getElementById('siteIcons');
let isOpen = false;
infoBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
        leftPanel.classList.add('opening');
        icons.classList.add('opening');
        leftPanel.classList.remove('closing');
    } else {
        leftPanel.classList.add('closing');
        icons.classList.remove('opening');
        leftPanel.classList.remove('opening');
    }
});