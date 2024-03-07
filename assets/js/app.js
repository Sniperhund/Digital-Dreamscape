window.addEventListener("scroll", () => {
    var element = document.getElementById("scroll");

    var distanceToTop =
        window.pageYOffset +
        element.getBoundingClientRect().top -
        document.documentElement.scrollTop / 2;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;

    var opacity = 1;

    // Increase the distance for fading effect
    var fadeDistance = elementHeight * 4;

    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / fadeDistance;
    }

    element.style.opacity = opacity;

    console.log(opacity);
});
