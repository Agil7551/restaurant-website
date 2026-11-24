const allowedMeals = ['breakfast', 'lunch', 'dinner'];

// Read the meal from the URL or default at breakfast
let meal = new URLSearchParams(window.location.search).get('meal');
if (!allowedMeals.includes(meal)) {
    meal = 'breakfast';
}

function showCarousel(selectedMeal) {
    allowedMeals.forEach(function (m) {
        const carousel = document.getElementById('carousel-' + m);
        carousel.classList.toggle('d-none', m !== selectedMeal);
    });
}

document.querySelectorAll('#mealTabs [data-bs-toggle="pill"]').forEach(function (tabButton) {
    tabButton.addEventListener('shown.bs.tab', function () {
        meal = tabButton.dataset.meal;
        showCarousel(meal);
        history.replaceState(null, '', '?meal=' + meal);
    });
});


const startTab = document.getElementById(meal + '-tab');
bootstrap.Tab.getOrCreateInstance(startTab).show();
showCarousel(meal);
