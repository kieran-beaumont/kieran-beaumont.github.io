function togglePage(id) {
    activePage = document.getElementsByClassName("active");
    activePage[0].classList.add("inactive");
    activePage[0].classList.remove("active");
    document.getElementById(id).classList.add("active");
    document.getElementById(id).classList.remove("inactive");
}