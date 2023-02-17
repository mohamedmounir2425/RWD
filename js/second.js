let answer1 = document.getElementById("answer1")

function showDetails1(){
    // answer1.classList.toggle("d-block")
    if(answer1.style.display == "none")
   { answer1.style.display= "block";
    answer1.style.transition= "display 2s";}

    else
    answer1.style.display= "none";
    
}
let answer2 = document.getElementById("answer2")

function showDetails2(){
    answer2.classList.toggle("d-block")
}
let answer3 = document.getElementById("answer3")

function showDetails3(){
    answer3.classList.toggle("d-block")
}

