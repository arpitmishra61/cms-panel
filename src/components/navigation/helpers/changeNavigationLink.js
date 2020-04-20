//helper function which help in routing on navigation
const changeNavigationLink = (e) => {
    if (!e.target.classList.contains("active-nav") && e.target.classList.contains("navigation-item")) {
        document.querySelectorAll(".navigation-item").forEach(navItem => navItem.classList.remove("active-nav"))
        e.target.classList.add("active-nav")
    }
}

export default changeNavigationLink