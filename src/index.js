function showTab(tabId, event) {
    if (event)
        {
            event.preventDefault();
        }
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active'); // Hide all tabs
    });
    document.getElementById(tabId).classList.add('active'); // Show the selected tab
}

// Dynamically resize the iframe to fit the entire PDF
function adjustPDFHeight() {
    const pdfFrame = document.getElementById('pdf-frame');
    const aspectRatio = 11 / 8.5; // Standard aspect ratio of a letter-size page
    const containerWidth = pdfFrame.offsetWidth; // Get the width of the iframe container
    pdfFrame.style.height = `${containerWidth * aspectRatio}px`; // Calculate and set height
}

// Adjust the height on page load and whenever the window resizes
window.addEventListener('load', adjustPDFHeight);
window.addEventListener('resize', adjustPDFHeight);

// Add event listeners to the buttons
document.getElementById('icon1').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/nithin-rajesh-6194a1253/', '_blank');
});

document.getElementById('icon2').addEventListener('click', () => {
    window.open('https://github.com/nrajesh2305', '_blank');
});