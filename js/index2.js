var bookList=document.querySelector('#book-list');
// console.log(bookList);  
console.log(bookList.parentNode.parentNode);
console.log(banner.nodeName);

console.log(bookList.children);
console.log(bookList.nextElementSibling);
console.log(bookList.previousElementSibling);
bookList.previousElementSibling.querySelector('p').innerHTML+='<br>this is too cool for everyone';
