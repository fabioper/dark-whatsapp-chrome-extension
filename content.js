(() => {
    const { body } = document
    const darkThemeClasses = "dark web";
    body.onload = () => body.setAttribute("class", darkThemeClasses)
})()