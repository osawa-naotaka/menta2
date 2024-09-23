console.info("reading theme JavaScript.");

function tabClick(tabheader)
{
    ["tab-web", "tab-marketing", "tab-sns", "tab-consulting"].forEach(
        x => {
            const classes = document.getElementsByClassName(x)[0].classList
            if(x == tabheader.value) {
                classes.add("show-tab");
                classes.remove("hide-tab");
            } else {
                classes.remove("show-tab");
                classes.add("hide-tab");
            }
        });
}
