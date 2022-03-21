let count = 0

// document.getElementById("___").innerHTML = 5
// THE 1ST PART (BEFOR INNER...) HELPS US TO ACCESS THE ELEMENT
// THE 2ND PART ALLOWS US TO MODIFY THE ELEMENT

counter = document.getElementById("counting")
// Accessed the element and assigned it to counter var

saved = document.getElementById("savedvalues")
savebtn = document.getElementById("saveme")


function increment(){

    count += 1
//increment the count var by 1
    counter.innerHTML = count
//assign the new count (incremented) var to the element's innerHTML (which is 0)
}

function save(){
    saved.innerHTML += count + " - "
    counter.innerHTML = 0 
    count = 0

}
