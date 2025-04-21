// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Find the continue button
    const continueButton = document.querySelector('.continue-btn');
    
    // Add click event listener to the button
    if (continueButton) {
        continueButton.addEventListener('click', function() {
            // Navigate to the ad summary page
            window.location.href = 'Admanager_Summary.html';
        });
    }
    
    // Find the upload area (if it exists on this page)
    const uploadArea = document.querySelector('.image-upload-area');
    
    // Add click event listener to the upload area
    if (uploadArea) {
        uploadArea.addEventListener('click', function() {
            // Create a file input element
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            
            // Trigger click event on the file input
            fileInput.click();
            
            // Handle file selection
            fileInput.addEventListener('change', function(event) {
                if (event.target.files && event.target.files[0]) {
                    const selectedFile = event.target.files[0];
                    
                    // Create a FileReader to read the selected image
                    const reader = new FileReader();
                    
                    // Setup the onload handler
                    reader.onload = function(e) {
                        // Create a preview of the uploaded image
                        const uploadPreview = document.createElement('div');
                        uploadPreview.style.width = '100%';
                        uploadPreview.style.height = '100%';
                        uploadPreview.style.backgroundImage = `url('${e.target.result}')`;
                        uploadPreview.style.backgroundSize = 'contain';
                        uploadPreview.style.backgroundPosition = 'center';
                        uploadPreview.style.backgroundRepeat = 'no-repeat';
                        
                        // Replace the upload area content with the preview
                        uploadArea.innerHTML = '';
                        uploadArea.appendChild(uploadPreview);
                        
                        // Store the image data in sessionStorage to access it on the next page
                        sessionStorage.setItem('uploadedImage', e.target.result);
                    };
                    
                    // Read the selected file as a data URL
                    reader.readAsDataURL(selectedFile);
                }
            });
        });
    }
    
    // Check if we're on the ad summary page
    const adPreview = document.querySelector('.ad-preview');
    
    // If we are on the summary page, check for saved image in sessionStorage
    if (adPreview) {
        const savedImage = sessionStorage.getItem('uploadedImage');
        if (savedImage) {
            // Replace the default image with the uploaded one
            const imgElement = adPreview.querySelector('img');
            if (imgElement) {
                imgElement.src = savedImage;
            } else {
                // Create new image element if one doesn't exist
                const newImage = document.createElement('img');
                newImage.src = savedImage;
                newImage.alt = 'Uploaded Advertisement';
                adPreview.appendChild(newImage);
            }
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const manageAdsTab = document.querySelector('.tab:nth-child(2)'); // Selects the second tab (Manage Ads)

    manageAdsTab.addEventListener('click', function() {
        window.location.href = 'AdManager_manager.html'; // Redirects to the Manage Ads page
    });
});

