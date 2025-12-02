// Mobile Menu
document.getElementById("menuBtn").onclick = function () {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};

// Download Resume
function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf"; 
    link.download = "Gian_Resume.pdf";
    link.click();
}
