// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.body.childNodes);
// console.log(document.querySelector("#current").parentElement);
// console.log(document.querySelector("[data-current='3']").nextElementSibling);
for (let node of document.body.childNodes) {
    if (node.nodeName === "#text") {
        continue;
    }
    console.log(node);
}