function togglePage(id) {
    activePage = document.getElementsByClassName("active");
    activePage[0].className = "inactive";
    document.getElementById(id).className = "active";
}