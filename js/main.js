// document.addEventListener('DOMContentLoad',function(){



// })
var list=document.querySelector("#book-list ul");
console.log(list);
var myForms=document.forms;
console.log(myForms);

//Delete books from the list
list.addEventListener('click',function(e){

    if(e.target.className=='delete')
    {
       var li=e.target.parentElement ;
       li.parentElement.removeChild(li);
    }

})

//Add Books

var addForms=myForms['add-book'];
// console.log(addForms);
addForms.addEventListener('submit',function(e){
    //prevent from reloading tthe form
    e.preventDefault();

    //create elements
    var value1=addForms.querySelector('input[type=text]').value;
    var li=document.createElement('li');
    var bookName=document.createElement('span');
    var delBook=document.createElement('span');

    //Add text-Content
    bookName.textContent=value1;
    delBook.textContent='Delete';
    //Add Classes
    bookName.classList.add('name');//or bookName.className='name';
    delBook.className ='delete';

    //Append to Dom
    li.appendChild(bookName);
    li.appendChild(delBook);
    list.appendChild(li);

    //remove text from input
    addForms.querySelector('input[type=text]').value="";

})

//hide books
var hideBox=document.querySelector('#hide');
// console.log(hideBox);
hideBox.addEventListener('change',(e)=>{

    if(hideBox.checked)
    {
        list.style.display='none';
    
    }
    else{
        list.style.display='initial';
    }

})

//Serach or Filter 
var searchBook=myForms['search-book'].querySelector('input');
searchBook.addEventListener('keyup',(e)=>{

    var term=e.target.value.toLoweCase;
    var books=list.getElementsByTagName('li');
    
    Array.from(books).forEach(function(book){
        var title=book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value)!=-1)
        {
            book.style.display='block';
        }
        else{
            book.style.display='none';
        }

    })


})


