function toggleSection() {
    const section = document.getElementById('moreInfo');
    const button = document.getElementById('toggleButton');

    if (section.style.display === 'none') {
        section.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        section.style.display = 'none';
        button.textContent = 'Show More';
    }
}

document.getElementById('toggleButton').addEventListener('click', toggleSection);