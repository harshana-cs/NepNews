// Sample article data - in a real application, this would come from a database
const articles = {
    1: {
        id: 1,
        author: 'Olivia Bennet',
        title: 'Anautho anautho lagcha jindagi yo timi binaa',
        status: 'Pending',
        content: 'This is the full content of the first pending article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    2: {
        id: 2,
        author: 'Olivia Bennet',
        title: 'Anautho anautho lagcha jindagi yo timi binaa',
        status: 'Pending',
        content: 'This is the full content of the second pending article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    3: {
        id: 3,
        author: 'Amelia Clarke',
        title: 'Random news idk what to write',
        status: 'Rejected',
        content: 'This is the full content of the rejected article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    4: {
        id: 4,
        author: 'Jacob Reynolds',
        title: 'Wallu dun dun dunali wapablu tob tobali',
        status: 'Approved',
        content: 'This is the full content of the approved article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
};

// Function to handle viewing an article
function viewArticle(articleId) {
    // Store the selected article ID in localStorage
    localStorage.setItem('selectedArticleId', articleId);
    
    // Navigate to the article view page
    window.location.href = 'Editor_Homepage.html';
}

// Login modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const loginIcon = document.getElementById('loginIcon');
    const closeModal = document.getElementById('closeModal');
    
    if (loginIcon && loginModal && closeModal) {
        // Open modal when user icon is clicked
        loginIcon.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });
        
        // Close modal when X is clicked
        closeModal.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
        
        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }
});