!function(){
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }    

    function addOptions(el, newSelect){
        var newOptionsContainer = document.createElement("DIV");
        newOptionsContainer.classList.add("js-options-container");
        var option = el.children;
        var j = 0;
        var _j = option.length;        
        while(j<_j){
            var newOption = document.createElement("SPAN");
            //newOption.setAttribute("tabindex", 0);
            newOption.setAttribute("data-index", j);
            newOption.setAttribute("data-value", option[j].value);
            newOption.addEventListener("click", function (e) {
                handleOptionClick(e, el);
            })
            newOption.innerHTML = option[j].innerHTML;
            newOptionsContainer.appendChild(newOption);
            j++;
        }
        newSelect.appendChild(newOptionsContainer);
    }

    function addCurrentSelection (el, newSelect) {
        var newCurrent = document.createElement("BUTTON");
        newCurrent.classList.add("btn");
        //newCurrent.setAttribute("tabindex", 0);
        newCurrent.innerHTML = el.children[el.selectedIndex].innerHTML;

        newCurrent.addEventListener("click", function(e){
            handleCurrentOptionClick(e);
        });

        newSelect.appendChild(newCurrent);
    }


    function handleCurrentOptionClick (e) {
        console.log(e.target);
        e.target.parentNode.classList.toggle("js-active");
    }

    function handleOptionClick (e, el) {
        console.log(e, el);
        e.target.parentNode.previousSibling.innerHTML = e.target.innerHTML;
        el.selectedIndex = e.target.getAttribute("data-index");
        e.target.parentNode.parentNode.classList.remove("js-active");
    }

    function createSelect(el){
        var newSelect = document.createElement("DIV");
        newSelect.classList.add("js-select");
        insertAfter(newSelect, el);
        addCurrentSelection(el, newSelect);
        addOptions(el, newSelect);
    }

    var selects = document.querySelectorAll(".js-custom-select");
    var i = selects.length;
    while(i--){
        createSelect(selects[i]);
    }
}();