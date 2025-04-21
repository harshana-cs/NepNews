document.addEventListener('DOMContentLoaded', function() {
    const viewAdButtons = document.querySelectorAll('.view-ad-btn');
    const viewPerformanceButtons = document.querySelectorAll('.view-performance-btn');

    viewAdButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'Admanager_summary.html';
        });
    });

    viewPerformanceButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'Admanager_AdPerformance.html';
        });
    });
});
