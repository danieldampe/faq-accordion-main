import dom from "../helpers/dom.js";

export default function Accordion(obj) {
    // *** *** *** Variables *** *** ***
    const ICON_STAR_SRC = "./assets/images/icon-star.svg",
        ICON_STAR_ALT = "Icon Star",
        ICON_PLUS_SRC = "./assets/images/icon-plus.svg",
        ICON_PLUS_ALT = "Icon Plus",
        ICON_MINUS_SRC = "./assets/images/icon-minus.svg",
        ICON_MINUS_ALT = "Icon Minus";

    // *** Variables / Accordion ***
    let $accordionTemplate = document.getElementById("accordion").content,
        $accordionClone = document.importNode($accordionTemplate, true),
        $accordion = $accordionClone.querySelector(".accordion"),
        $title = $accordionClone.querySelector(".accordion-title"),
        $icon = $accordionClone.querySelector(".accordion-icon"),
        $body = $accordionClone.querySelector(".accordion-body");

    // *** Variables / Accordion Item ***
    let $itemTemplate = document.getElementById("accordion-item").content,
        $fragment = document.createDocumentFragment(),
        allItems = [];

    // *** *** *** Funciones *** *** ***
    const collapse = obj => {
        obj.$item.dataset.collapse = true;
        obj.$icon.src = ICON_PLUS_SRC;
        obj.$icon.alt = ICON_PLUS_ALT
        dom.addStateClass(obj.$content, "collapse");
    };

    const extend = obj => {
        obj.$item.dataset.collapse = false;
        obj.$icon.src = ICON_MINUS_SRC;
        obj.$icon.alt = ICON_MINUS_ALT
        dom.removeStateClass(obj.$content, "collapse");
    };

    const selectItem = obj => {
        // *** Variables - Desestructuración ***
        let {$item, $icon, $content} = obj;
        // *** Ejecución ***
        if($item.dataset.collapse === "true") {
            allItems.forEach((element, index) => {
                if(index === $item.dataset.accordionItemId - 1) {
                    extend({
                        $item,
                        $icon,
                        $content
                    })
                } else {
                    collapse({
                        $item: element.$item,
                        $icon: element.$icon,
                        $content: element.$content
                    })
                };
            });
        } else {
            collapse({
                $item,
                $icon,
                $content
            })
        };
    };

    // *** *** *** Ejecución *** *** ***
    $title.textContent = obj.title;
    $icon.src = ICON_STAR_SRC;
    $icon.alt = ICON_STAR_ALT;
    obj.items.forEach((item, index) => {
        // *** Ejecución / Accordion Item ***
        let $itemClone = document.importNode($itemTemplate, true),
            $item = $itemClone.querySelector(".accordion-item"),
            $header = $item.querySelector(".accordion-item-header"),
            $title = $item.querySelector(".accordion-item-title"),
            $icon = $item.querySelector(".accordion-item-icon"),
            $content = $item.querySelector(".accordion-item-content");
        $title.textContent = item.title;
        $content.textContent = item.content;
        $item.dataset.collapse = false;
        $item.dataset.accordionItemId = index + 1;
        (index === 0)
            ? extend({$item, $icon, $content})
            : collapse({$item, $icon, $content});
        $header.addEventListener("click", evt => {
            selectItem({$item, $icon, $content});
        });
        allItems.push({$item, $icon, $content});
        $fragment.append($item);
    });
    $body.append($fragment);
    return $accordion;
};
