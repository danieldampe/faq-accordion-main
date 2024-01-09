import Accordion from "./components/Accordion.js";

// *** *** *** Variables *** *** ***
const d = document;

const $main = d.getElementById("main");

const accordion = {
    title: "FAQs",
    items: [
        {
            title: "What is Frontend Mentor, and how will it help me?",
            content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            title: "Is Frontend Mentor free?",
            content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
            title: "What is Frontend Mentor, and how will it help me?",
            content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            title: "What is Frontend Mentor, and how will it help me?",
            content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        }
    ]
};

// *** *** *** Funciones *** *** ***

// *** *** *** Ejecución *** *** ***
d.addEventListener("DOMContentLoaded", () => {
    $main.append(
        Accordion(accordion)
    );
});
