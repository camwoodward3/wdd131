document.addEventListener("DOMContentLoaded", function () {
    // Grab modal elements
    const viewer = document.getElementById('imageViewer');
    const viewerImage = document.getElementById('viewerImage');
    const closeButton = document.querySelector('.close-viewer');
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    // Add click event to each gallery image
    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            viewer.style.display = 'flex'; // Show the modal
            viewerImage.src = this.src; // Set the clicked image source to the viewer
        });

    });

    
    
    // Close modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        viewer.style.display = 'none'; // Hide the modal
    });

    // Optionally, close modal when clicking outside the image
    viewer.addEventListener('click', function (e) {
        if (e.target === viewer) {
            viewer.style.display = 'none'; // Hide the modal
        }
    });

    // 2. Menu toggle functionality
    const menuButton = document.getElementById('menuButton');
    const menuItems = document.getElementById('menuItems');

    menuButton.addEventListener('click', function () {
        // Toggle the "hide" class to show/hide the menu items
        menuItems.classList.toggle('hide');
    });

});

