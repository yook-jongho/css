window.onload = () => {
    const button = document.querySelector(".btn");
    const options = document.querySelector(".options");
    const choiceItem = document.querySelector(".choice");

    button.addEventListener("click", () => {
        console.log("click");
        options.classList.toggle("expended");
        showMenu();
    });

    const showMenu = () => {
        const items = document.querySelectorAll(".content");
        items.forEach((item) => {
            item.addEventListener("click", () => itemClick(item));
        });
    };

    const itemClick = (item) => {
        choiceItem.textContent = item.textContent;
        options.classList.remove("expended");
    };
};
