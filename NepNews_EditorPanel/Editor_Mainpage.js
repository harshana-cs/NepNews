document.addEventListener("DOMContentLoaded", function () {
    const pendingSection = document.querySelector(".section:nth-of-type(1)");
    const reviewedSection = document.querySelector(".section:nth-of-type(2)");

    // Ensure sections exist
    if (!pendingSection || !reviewedSection) {
        console.error("❌ Error: Article sections missing in DOM.");
        return;
    }

    async function loadArticles() {
        try {
            const res = await fetch("http://localhost:5000/api/articles");
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    
            const articles = await res.json();
    
            if (!articles.length) {
                pendingSection.innerHTML += "<p>No pending articles</p>";
                reviewedSection.innerHTML += "<p>No reviewed articles</p>";
                return;
            }
    
            pendingSection.querySelectorAll(".article").forEach(el => el.remove());
            reviewedSection.querySelectorAll(".article").forEach(el => el.remove());
    
            articles.forEach(article => {
                const articleDiv = document.createElement("div");
                articleDiv.classList.add("article");
    
                // Build article details
                let articleContent = `
                    <div>
                        <strong>${article.author}</strong><br>
                        ${article.title}<br>
                        <span class="status ${article.status.toLowerCase()}">Status: ${article.status}</span>
                    </div>
                `;
    
                // Only add "View" button for pending articles
                if (article.status.toLowerCase() === "pending") {
                    articleContent += `<button class="view-button" data-id="${article._id}">View</button>`;
                    pendingSection.appendChild(articleDiv);
                } else {
                    reviewedSection.appendChild(articleDiv);
                }
    
                articleDiv.innerHTML = articleContent;
            });
        } catch (error) {
            console.error("❌ Error fetching articles:", error);
            pendingSection.innerHTML += "<p>⚠️ Unable to fetch pending articles</p>";
            reviewedSection.innerHTML += "<p>⚠️ Unable to fetch reviewed articles</p>";
        }
    }
    
    // Handle "View" button
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("view-button")) {
            const articleId = e.target.getAttribute("data-id");
            if (!articleId) return console.error("❌ No article ID found");

            localStorage.setItem("selectedArticleId", articleId);
            window.location.href = "Editor_Homepage.html";
        }
    });

    loadArticles();
});
