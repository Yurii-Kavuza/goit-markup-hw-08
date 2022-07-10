const tagsContainer = document.querySelector('.categories.list');

console.log(tagsContainer);

tagsContainer.addEventListener('click', onCategoriesClick);

function onCategoriesClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentActiveBtn = document.querySelector('.categories__btn--active');

    // if (currentActiveBtn) {
    //     currentActiveBtn.classList.remove("categories__btn--active");
    // }

    currentActiveBtn?.classList.remove("categories__btn--active");

    const nextActiveBtn = e.target;
    nextActiveBtn.classList.add('categories__btn--active');
}