//mendapat element body
const body = document.body;

//mengembalikan satu element
//getElementById() querySelector()

//mengembalikan banyak element
//getElementsByName(), getElementsByClassName(), getElementsByTagName(), querySelectorAll()
const buttons = document.querySelectorAll('.button');
//kita dapat melakukan looping
for(let item of buttons) {
    console.log(item);
}