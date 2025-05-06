document.addEventListener("DOMContentLoaded", function () {
    const pendingSection = document.querySelector(".section:nth-of-type(1)"); // Pending Articles section
    const reviewedSection = document.querySelector(".section:nth-of-type(2)"); // Reviewed Articles section

    let articles = [];

    // ✅ Ensure sections exist before modifying them
    if (!pendingSection || !reviewedSection) {
        console.error("❌ Error: Article sections missing in DOM.");
        return; // Stop execution to prevent errors
    }

    // ✅ Fetch articles from backend
    async function loadArticles() {
        try {
            const res = await fetch("http://localhost:3000/api/articles");
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

            articles = await res.json();

            if (!articles.length) {
                pendingSection.innerHTML += "<p>No pending articles</p>";
                reviewedSection.innerHTML += "<p>No reviewed articles</p>";
                return;
            }

            // ✅ Clear previous articles
            pendingSection.querySelectorAll(".article").forEach(el => el.remove());
            reviewedSection.querySelectorAll(".article").forEach(el => el.remove());

            articles.forEach((article, index) => {
                const articleDiv = document.createElement("div");
                articleDiv.classList.add("article");
                articleDiv.innerHTML = `
                    <div>
                        <strong>${article.author}</strong><br>
                        ${article.title}<br>
                        <span class="status ${article.status.toLowerCase()}">Status: ${article.status}</span>
                    </div>
                    <button class="view-button" data-index="${index}">View</button>
                `;

                if (article.status.toLowerCase() === "pending") {
                    pendingSection.appendChild(articleDiv);
                } else {
                    reviewedSection.appendChild(articleDiv);
                }
            });
        } catch (error) {
            console.error("❌ Error fetching articles:", error);
            pendingSection.innerHTML += "<p>⚠️ Unable to fetch pending articles</p>";
            reviewedSection.innerHTML += "<p>⚠️ Unable to fetch reviewed articles</p>";
        }
    }

    // ✅ Navigate to `Editor_Homepage.html` when "View" is clicked
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("view-button")) {
            const index = e.target.getAttribute("data-index");
            const article = articles[index];

            if (!article) {
                console.error("❌ Error: Selected article not found.");
                return;
            }

            localStorage.setItem("selectedArticle", JSON.stringify(article));
            window.location.href = "Editor_Homepage.html";
        }
    });

    // ✅ Load articles when the page starts
    loadArticles();
});