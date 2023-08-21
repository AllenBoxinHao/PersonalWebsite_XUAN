function toggle() {
    let collapsible = document.getElementById("collapsible");
    collapsible.classList.toggle("collapsible--expanded");
}

const menuItems = document.querySelectorAll(".menu__link");

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
        menuItems.forEach((item) => item.classList.remove("active"));
        e.currentTarget.classList.add("active");
    });
});

const navIinks = document.querySelectorAll(".nav__links");

navIinks.forEach((navIink) => {
    navIink.addEventListener("click", (e) => {
        navIinks.forEach((item) => item.classList.remove("active"));
        e.currentTarget.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.getElementById("emailLink");

    emailLink.addEventListener("click", function () {
        const emailAddress = "xuanchang15@gmail.com";
        const subject = "General Inquiry";
        const body = "Hi, I came across your information on...";

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        const popupOptions = "width=600,height=500,resizable=yes,scrollbars=yes";
        const popupWindow = window.open(mailtoLink, "EmailPopup", popupOptions);

        if (!popupWindow) {
            window.location.href = mailtoLink;
        }
    });
});
