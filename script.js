document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", () => {

            card.style.transform =
                "perspective(1000px) rotateY(15deg) translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateY(0deg) translateY(0px)";

        });

    });

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    sections.forEach((section) => {

        observer.observe(section);

    });

});