const list = document.querySelector("ul");
// child nodes --> white spaces
console.log(list.childNodes);
// chidrens --> no white spaces
console.log(list.children);
// nextSibling --> white spaces
const list2 = document.querySelector("ul li:nth-child(3)");
console.log(list.nextSibling);
// nextElementSibling --> no white spaces
console.log(list2.nextElementSibling);
// previousSibling --> white spaces
console.log(list2.previousSibling);
// previousElementSibling --> no white spaces
console.log(list2.previousElementSibling);
//firstchild --> white spaces
console.log(list.firstChild);
//firstChildElement --> no white spaces
console.log(list.firstElementChild);
//lasttchild --> white spaces
console.log(list.lastChild);
//ChildElement --> no white spaces
console.log(list.lastElementChild);
