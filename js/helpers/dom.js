// *** *** *** Funciones *** *** *** 
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const addStateClass = (element, className) => element.classList.add(element.classList[0] + "--" + className);
const removeStateClass = (element, className) => element.classList.remove(element.classList[0] + "--" + className);
const toggleStateClass = (element, className) => element.classList.toggle(element.classList[0] + "--" + className);

// *** *** *** Ejecución *** *** ***
const dom = {
    addClass,
    removeClass,
    toggleClass,
    addStateClass,
    removeStateClass,
    toggleStateClass
};

export default dom;
