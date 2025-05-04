document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggleSidebar");

    // Sidebar Toggle Functionality
    toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });

    // Initialize Quill Editor for Title
    var titleQuill = new Quill("#title-editor", {
        theme: "snow",
        placeholder: "Enter the news title...",
        modules: {
            toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline"]
            ]
        }
    });

    // Initialize Quill Editor for Content
    var contentQuill = new Quill("#content-editor", {
        theme: "snow",
        placeholder: "Enter the news content...",
    });

    // Load saved draft if exists
    const savedTitle = localStorage.getItem("newsTitle");
    const savedContent = localStorage.getItem("newsContent");

    if (savedTitle) {
        titleQuill.root.innerHTML = savedTitle;
    }
    if (savedContent) {
        contentQuill.root.innerHTML = savedContent;
    }

    // Save Draft Functionality
    document.querySelector(".save-draft").addEventListener("click", () => {
        const newsTitle = titleQuill.root.innerHTML;
        const newsContent = contentQuill.root.innerHTML;
        
        localStorage.setItem("newsTitle", newsTitle);
        localStorage.setItem("newsContent", newsContent);
        
        alert("Draft saved!");
    });

    document.querySelector(".send-review").addEventListener("click", () => {
        const newsTitle = titleQuill.root.innerHTML;
        const newsContent = contentQuill.root.innerHTML;
        
        localStorage.setItem("newsTitle", newsTitle);
        localStorage.setItem("newsContent", newsContent);
        
        alert("Sent for review!");
    });

    document.querySelector(".image-upload").addEventListener("click", () => {
        const newsTitle = titleQuill.root.innerHTML;
        const newsContent = contentQuill.root.innerHTML;
        
        localStorage.setItem("newsTitle", newsTitle);
        localStorage.setItem("newsContent", newsContent);
        
        alert("Image Added Successfully!");
    });

    document.querySelector(".cover-image").addEventListener("click", () => {
        const newsTitle = titleQuill.root.innerHTML;
        const newsContent = contentQuill.root.innerHTML;
        
        localStorage.setItem("newsTitle", newsTitle);
        localStorage.setItem("newsContent", newsContent);
        
        alert("Cover image added successfully!");
    });


    // Go Back Function
    window.goBack = function () {
        window.history.back();
    };
});
