var setMsgList = function(data, containerTag) {
    const container = document.getElementById(containerTag);
    const childTag = document.createElement('p');
    childTag.innerText = data;
    container.appendChild(childTag);
}