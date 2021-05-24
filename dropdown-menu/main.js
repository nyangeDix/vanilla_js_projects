const lists = document.getElementById('list-menu');
const dropdownmenu = document.getElementById('dropdown-menu');
const dropDown = document.getElementById('dropdown');

const addClass = (id, className) => {
    id.classList.add(className);
}
const removeClass = (id, className) => {
    return id.classList.remove(className);
}

dropdownmenu.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    addClass(dropDown, 'showDropmenu');
});

dropdownmenu.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    setTimeout(() => {
        removeClass(dropDown, 'showDropmenu');
    }, 2000)
});