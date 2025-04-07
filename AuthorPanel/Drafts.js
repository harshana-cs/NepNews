document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".sidebar ul li");
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.querySelector(".sidebar-toggle");

    // Define pages for each menu item
    const pages = {
        "Home": "dashboard.html",
        "Drafts": "drafts.html",
        "My Articles": "MyArticles.html",
        "To be Edited": "ToBeEdited.html",
        "🖋Continue Writing": "ContinueWriting.html"
    };

    // Restore active tab on page load
    const activePage = localStorage.getItem("activePage");
    if (activePage) {
        menuItems.forEach(item => {
            if (item.textContent.trim() === activePage) {
                item.classList.add("active");
            }
        });
    }

    // Sidebar Navigation Highlight & Click Event
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".sidebar .active")?.classList.remove("active");
            this.classList.add("active");

            // Save active tab in localStorage
            const pageName = this.textContent.trim();
            localStorage.setItem("activePage", pageName);

            // Navigate to the corresponding page
            if (pages[pageName]) {
                window.location.href = pages[pageName];
            }
        });
    });

    // Create New Button Click Event
    const createBtn = document.querySelector(".create-btn");
    if (createBtn) {
        createBtn.addEventListener("click", () => {
            alert("Redirecting to article creation...");
            window.location.href = "create-article.html";
        });
    }

    // Sidebar Toggle Functionality
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
        });
    }
});
