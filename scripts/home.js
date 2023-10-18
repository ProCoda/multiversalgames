
//Carosuel code start
const slider = document.getElementById("slider"); //Define slider

const leftArrow = document.getElementById("left"); //Define left arrow
const rightArrow = document.getElementById("right"); //Define right arrow

var sectionIndex = 0; //Define Section Index

function rightArrowClick(){
    sectionIndex += 1; //Add 1 to section index because we are moving right

    if(sectionIndex > 5){ sectionIndex = 0; } //Check if sectionIndex is more than 3 because only 4 elements in carosuel. If it is more than 3 than set to 0.

    let amountTransform = sectionIndex * -60 //Multiply the section index by -60
    slider.style.transform = 'translate('+amountTransform+'vw)'; //Edit the slider style transform to the amountTransform
    console.log(sectionIndex);
}

function leftArrowClick(){
    sectionIndex -= 1; //Subtract 1 to section index because we are moving left

    if(sectionIndex < 0){ sectionIndex = 5; } //Check if sectionIndex is less than 0 because section index cannot be negative. If so than set to 3.

    let amountTransform = sectionIndex * - 60 //Multiply the section index by -60
    slider.style.transform = 'translate('+amountTransform+'vw)'; //Edit the slider style transform to the amountTransform
    console.log(sectionIndex);
}
//Carosuel code end

