function toggleMenu() {
    const body = document.getElementsByTagName('body')[0];
    const iconMenu = document.getElementById('iconMenu');
    const sideBar = document.getElementById('sideBar');

    if (sideBar.style.left === '-250px') {
        sideBar.style.left = '0'
        body.classList.add('class')

    } else {
        sideBar.style.left = '-250px'
        body.classList.remove('class')
    }
}