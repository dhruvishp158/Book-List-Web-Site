//-------------------Query Selector--------------------------

var wrap=document.querySelector('#wrapper');
console.log(wrap);

var secondeLi=document.querySelector('#book-list li:nth-child(2)');
console.log(secondeLi);


//---------Node List--------------

var books=document.querySelectorAll('#book-list li .name');
console.log(books);

var books2=document.getElementsByClassName('name');
console.log(books2);


//--------------Editing DOM-------------------

books.forEach(function(book){

    //book.textContent='test';
    book.textContent+=' test';

})

for(var i=0;i<books.length;i++)
{
    console.log(books[i]);
}

var bookList=document.querySelector('#book-list');
var bookList2=document.querySelector('#book-list');
// console.log(bookList);

// bookList.innerHTML='<h1>Books and more books</h1>'
var banner=document.querySelector('#page-banner');
console.log(banner.nodeName);
console.log(banner.hasChildNodes());

var cloneBanner=banner.cloneNode(true);
console.log(cloneBanner);

