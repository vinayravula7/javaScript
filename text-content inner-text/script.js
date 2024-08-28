// textcontent --> print white spaces
const para = document.querySelector(".para");
console.log(para.textContent);

// innertext --> with out white spaces
console.log(para.innerText);

//innerHtml -->printTags
console.log(para.innerHTML);

//write operations
para.textContent = "hello bava";
console.log(para.textContent);

para.innerHTML = "<h1> hello <span>vinay ravula</span></h1>";
console.log(para.innerHTML);
