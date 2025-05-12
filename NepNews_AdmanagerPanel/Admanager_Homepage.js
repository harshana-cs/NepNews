document.addEventListener('DOMContentLoaded', function() {
    const continueButton = document.querySelector('.continue-btn');
    const uploadArea = document.querySelector('.image-upload-area');

    let selectedImageFile = null; // Store the selected image file globally

    if (uploadArea) {
        uploadArea.addEventListener('click', function() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';

            document.body.appendChild(fileInput);
            fileInput.click(); // Open file picker

            fileInput.addEventListener('change', function(event) {
                if (event.target.files && event.target.files[0]) {
                    selectedImageFile = event.target.files[0]; // Store image file globally
                    const reader = new FileReader();
console.log("Selected Image File:", selectedImageFile);
                    reader.onload = function(e) {
                        uploadArea.style.backgroundImage = `url('${e.target.result}')`;
                        uploadArea.style.backgroundSize = 'cover';
                        uploadArea.style.backgroundPosition = 'center';
                    };

                    reader.readAsDataURL(selectedImageFile);
                }
            });
        });
    }

    if (continueButton) {
        continueButton.addEventListener('click', async function() {
            const title = document.querySelector('.form-control[placeholder="Ad Title"]')?.value;
            const websiteLink = document.querySelector('.form-control[placeholder="Ad website link"]')?.value;
            const position = document.querySelector('.form-control select')?.value;
            const placementPlan = document.querySelector('.plan-box.selected .location-title')?.innerText;
            const durationInput = document.querySelector('input[name="duration"]:checked');
            const duration = durationInput ? durationInput.nextSibling.textContent.trim() : null;

            if (!title || !websiteLink || !position || !placementPlan || !duration || !selectedImageFile) {
                alert("Please fill in all fields and upload an image before proceeding.");
                return;
            }

            const formData = new FormData();
            formData.append("title", title);
            formData.append("websiteLink", websiteLink);
            formData.append("position", position);
            formData.append("placementPlan", placementPlan);
            formData.append("duration", parseInt(duration.split(' ')[0]));
            formData.append("image", selectedImageFile);
            console.log("Form Data:", formData);
           


            try {
                const response = await fetch("http://localhost:5000/api/ads/upload", {
                    method: "POST",
                    body: formData
                });

                const result = await response.json();

                if (response.ok) {
                    console.log("Ad uploaded successfully:", result);
                    window.location.href = 'Admanager_Summary.html';
                } else {
                    alert("Error saving ad: " + result.error);
                }
            } catch (error) {
                console.error("Error uploading ad:", error);
                alert("Something went wrong. Please try again.");
            }
        });
    }
});