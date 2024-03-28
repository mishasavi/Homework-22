function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

function createButtonDelete () {
    const element = document.createElement('button');
    element.textContent = 'Delete';
    return element;
}
