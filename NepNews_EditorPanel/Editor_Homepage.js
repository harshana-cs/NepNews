document.addEventListener('DOMContentLoaded', function () {
    const articleList = document.querySelector(".article-list");
    const titleField = document.querySelector(".editor-section p:nth-of-type(1)");
    const authorField = document.querySelector(".editor-section p:nth-of-type(2)");
    const statusField = document.querySelector(".editor-section p:nth-of-type(3)");
    const dateField = document.querySelector(".date");
    const editorTextArea = document.querySelector(".editor-box textarea");

    let articles = [];

    // Fetch articles from backend
    async function loadArticles() {
        try {
            const res = await fetch("http://localhost:5000/api/articles");
            articles = await res.json();

            articleList.innerHTML = ""; // Clear old list

            articles.forEach((article, index) => {
                const li = document.createElement("li");
                li.className = article.status.toLowerCase();
                li.innerHTML = `
                    ${article.author}<br>
                    <span>${article.title}</span><br>
                    Status: ${article.status} 
                    <button class="view-btn" data-index="${index}">View</button>
                `;
                articleList.appendChild(li);
            });
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    }

    // Display selected article in main panel
    function showArticle(index) {
        const article = articles[index];
        if (!article) return;

        titleField.innerHTML = `<strong>Title:</strong> ${article.title}`;
        authorField.innerHTML = `<strong>Author:</strong> ${article.author}`;
        statusField.innerHTML = `<strong>Status:</strong> ${article.status}`;
        dateField.innerHTML = `Date: ${article.date}`;
        editorTextArea.value = article.description;
    }

    // View button click handler
    articleList.addEventListener('click', function (e) {
        if (e.target.classList.contains('view-btn')) {
            const index = e.target.getAttribute('data-index');
            showArticle(index);
        }
    });

    // Dialog Buttons
    const showDialogButton = document.getElementById('showDialog');
    const dialog = document.getElementById('dialog');
    const cancelButton = document.getElementById('cancel-btn');
    const rejectConfirmButton = document.getElementById('reject-confirm');

    const showResendDialogButton = document.getElementById('showResendDialog');
    const resendDialog = document.getElementById('resendDialog');
    const submitResendButton = document.getElementById('submitResend');

    const approveButton = document.getElementById('approveButton');
    const approveDialog = document.getElementById('approveDialog');
    const approveOkButton = document.getElementById('approveOkButton');

    // Reject
    showDialogButton?.addEventListener('click', () => dialog.style.display = 'block');
    cancelButton?.addEventListener('click', () => dialog.style.display = 'none');
    rejectConfirmButton?.addEventListener('click', () => {
        alert('Article rejected!');
        dialog.style.display = 'none';
    });

    // Resend
    showResendDialogButton?.addEventListener('click', () => resendDialog.style.display = 'block');
    submitResendButton?.addEventListener('click', () => {
        alert('Resend submitted!');
        resendDialog.style.display = 'none';
    });

    // Approve
    approveButton?.addEventListener('click', () => approveDialog.style.display = 'block');
    approveOkButton?.addEventListener('click', () => {
        approveDialog.style.display = 'none';
        alert('Article Approved!');
    });

    // Edit
    const editButton = document.querySelector('.edit_button');
    editButton?.addEventListener('click', () => {
        window.location.href = "Artical_editor.html";
    });

    // Load data on start
    loadArticles();
});
