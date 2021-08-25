/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import "./src/styles/global.css"
require("./src/styles/global.css")

class SideBarBtns {
    Initialize() {
        window.addEventListener("scroll", this.ToggleButtons)
        document.getElementById("scroll-btn").addEventListener("click", this.ScrollToTop);
    }

    ToggleButtons() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            document.getElementById("scroll-btn").style.display = "block";
        } else{
            document.getElementById("scroll-btn").style.display = "none";
        }
    }

    ScrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop= 0;
    }
}

module.exports.onRouteUpdate = () => {
    let sidebarbtns = new SideBarBtns();
    if (document.getElementById("scroll-btn")) {
        sidebarbtns.Initialize();
    }
}
