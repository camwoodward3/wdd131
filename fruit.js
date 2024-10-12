document.addEventListener('DOMContentLoaded', function() {
    const fruitDropdown = document.getElementById('fruits');
    const selectedFruitDisplay = document.getElementById('selectedFruit');

    fruitDropdown.addEventListener('change', function() {
        const selectedFruit = fruitDropdown.options[fruitDropdown.selectedIndex].text;
        selectedFruitDisplay.textContext = `Selected fruit: ${selectedFruit}`;
    });
});