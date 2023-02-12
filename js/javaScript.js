let allLis = document.querySelectorAll("ul li a");
allLis.forEach (function (ele) {
    ele.onclick = function () {
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        })
        this.classList.add("active");
    }
})