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
 

// ************************************************
// Travering the DOM
// ************************************************

var itemList = document.querySelector('#items');
console.log(itemList);

// ---------------------------------------------------------
// (1) Parent
// ---------------------------------------------------------
// ParentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
// ParentElement = ParentNode
console.log(itemList.parentElement);

// ---------------------------------------------------------
// (2) Children
// ---------------------------------------------------------
// ChildNodes --> Not a good soution as it also counts the return space as a child <text>
console.log(itemList.childNodes);
// Children 
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// First child --> return white space, not a good solution 
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);

// lastChild --> return white space, not a good solution 
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);

// ---------------------------------------------------------
// (3) Sibling
// ---------------------------------------------------------
// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);

// PriviousSibling
console.log(itemList.previousSibling);
// priviousElementSibling
console.log(itemList.previousElementSibling);


// ************************************************
// Create elements in the DOM
// ************************************************

// createa a div
var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello';
// add id
newDiv.id = '01';
// add attr
newDiv.setAttribute('title', 'value is hello div');
// create text node
var newDivText = document.createTextNode('Element inserted');
// add text to div
newDiv.appendChild(newDivText);
// set style
newDiv.style.fontSize = '30px';
console.log(newDiv);

// insert the div to document
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


// ************************************************
// Manage events by using event lisenter (the new way)
// ************************************************


// ---------------------------------------------------------
// (1) Mouse events
// ---------------------------------------------------------
/*
var button = document.getElementById('button').addEventListener('click', function() {
    console.log('123');
});
*/
var button = document.getElementById('button')

/*

// click event
button.addEventListener('click', buttonClick);

function buttonClick(e){
    console.log('button clicked');
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = 'green';
    
    // event parameters
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output = document.getElementById('output');
    output.innerHTML = '<h3>' + e.target.id + '</h3';

    //event type
    console.log(e.type);

    //Postion of the mouse in the windows
    console.log(e.clientX);
    console.log(e.clientY);

    //Postion of the mouse of the element
    console.log(e.offsetX);
    console.log(e.offsetY);

    //Check if the alt, ctrl, shift key is pushed
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);

}
*/

// double click event
// button.addEventListener('dblclick', runEvent);

// mousedown event
//button.addEventListener('mousedown', runEvent);

// mouseup event
//button.addEventListener('mouseup', runEvent);

var box = document.getElementById('box');

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent); //only for inner element

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent); //only for inner element

box.addEventListener('mousemove', runEvent);




// ---------------------------------------------------------
// (2) Keyboard events
// ---------------------------------------------------------

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);


// ---------------------------------------------------------
// (3) focused and blur
// ---------------------------------------------------------
itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

// ---------------------------------------------------------
// (4) cut and paste
// ---------------------------------------------------------
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

// ---------------------------------------------------------
// (5) input
// ---------------------------------------------------------
itemInput.addEventListener('input', runEvent);

// ---------------------------------------------------------
// (6) change event
// ---------------------------------------------------------
var select = document.querySelector('select');

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

// ---------------------------------------------------------
// (7) submit event
// ---------------------------------------------------------
form.addEventListener('submit', runEvent);




function runEvent(e) {
    e.preventDefault(); // stop the default submit

    console.log('EVENT TYPE: ' + e.type);
    
    // Mouse events samples
    //output.innerHTML = '<h3> x:' + e.offsetX + '</h3><h3>y:' + e.offsetY + '</h3>';
    //box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
    document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";

    // Keyboard events samples
    console.log(e.target.value);
    output.innerHTML = '<h3>' + e.target.value + '</h3>';
}