// **********************************************************
// Examing the document object
// *********************************************************
// Get the whole object model
console.dir(document);
// Access the document attributes
console.log(document.domain);
console.log(document.URL);
console.log(document.doctype);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.forms[0]);
console.log(document.images);



// **********************************************************
// Query DOM
// **********************************************************

// Access element attribute
document.title = '123';

// ---------------------------------------------------------
// (1) Get element by index - Don't use it.
// ---------------------------------------------------------
//document.all[10].textContent = 'This is not a good way to select element'; //Don't use this way
console.log(document.all);  //html colleciton does not support forEach
//document.all.forEach(item => console.log(item));

// ---------------------------------------------------------
// (2) Get element by ID
// ---------------------------------------------------------
var headerTitle = document.getElementById('header-title');
//headerTitle.textContent = 'hello world!'; // don't pay attention to the styling
//headerTitle.innerText = 'Goodby'; // Pay attend to styling

//textContent vs innerText
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

// inner HTML change
console.log("innerHTML", headerTitle.innerHTML);
headerTitle.innerHTML = '<h6> Hello world </h6>';

// Style changes
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

// ---------------------------------------------------------
// (3) Get element by class name
// ---------------------------------------------------------
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = 'red'; //It does not work, you have to loop each item
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}


// ---------------------------------------------------------
// (4) Get element by tag name
// ---------------------------------------------------------

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = 'red'; //It does not work, you have to loop each item
for(var i = 0; i < items.length; i++){
    li[i].style.backgroundColor = 'green';
}


// ---------------------------------------------------------
// (4) Query selector for one element
// ---------------------------------------------------------

var header2 = document.querySelector('#main-header'); //# for id  //only get the first one
console.log(header2);
header2.style.borderBottom = 'solid 10px #ccc';

var input = document.querySelector('input');
input.value = 'Hello world!';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var listItem = document.querySelector('.list-group-item'); // .className
listItem.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'yellow';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'blue';

// ---------------------------------------------------------
// (5) Query selector for all elements
// ---------------------------------------------------------

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello1';
titles[1].textContent = 'Hello2';

var odds = document.querySelectorAll('li:nth-child(odd)'); //css selector: odd even
var evens = document.querySelectorAll('li:nth-child(even)');
for(var i= 0; i< odds.length; i++){
    odds[i].style.backgroundColor = '#f4f4f4';
}

odds.forEach(item => item.style.backgroundColor = '#f4f4f4');
evens.forEach(item => item.style.backgroundColor = '#ccc');









