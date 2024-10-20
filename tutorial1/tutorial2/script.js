function changeBackgroundColor() {
    const selectedColor = document.getElementById('colorPicker').value; // Get selected value
    document.body.style.backgroundColor = selectedColor; // Change background color
}

document.getElementById('colorPicker').addEventListener('change', changeBackgroundColor); // Add event listener