function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active'); // Hide all tabs
    });
    document.getElementById(tabId).classList.add('active'); // Show the selected tab
}
