let count = 0

// document.getElementById("___").innerHTML = 5
// THE 1ST PART (BEFOR INNER...) HELPS US TO ACCESS THE ELEMENT
// THE 2ND PART ALLOWS US TO MODIFY THE ELEMENT

counter = document.getElementById("counting")
// Accessed the element and assigned it to counter var

saved = document.getElementById("savedvalues")
//Accessed the string/text mentioned below the save button, I will use the text to further concat the previously stored counts 

savebtn = document.getElementById("saveme")
// Accessed the save button element


function increment(){
// As the name suggests this function will increment the count by 1 when called
    count += 1
//increment the count var by 1
    counter.innerHTML = count
//assign the new count (incremented) var to the element's innerHTML (which is 0)
}

function save(){
// As the name suggests this function will save the count when called and will show the show the saved count below the save button
    saved.innerHTML += count + " - "
// Above code will help to modify the string/text everytime we click on save to show the previously saved counts
    counter.innerHTML = 0 
    count = 0
// counter.innerHTML is set to 0 to start from 0 when we restart out count
// we have to reassign count variable to 0 to ensure that when we count again, we don't start counting from the previously saved count
}
