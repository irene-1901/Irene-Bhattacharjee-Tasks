function validate() {
var input = document.forms["myForm"]["input1"].value;
var res = input.toLowerCase(); 
if (res != " " || res != "") {
    if( res == "scissor" || res == "rock" || res == "paper"){
        document.getElementById("you1").innerHTML = " Your Response: " + input;
    return res;
    }else{
            alert("Enter Valid Response");
            return false;
        }
    }else{
        alert("Enter Valid Response");
        return false;
        }
    
}


function computer(){
    var items = ["Scissor", "Rock", "Paper"];  //, "Rock", "Paper"
    var randomItem = items[Math.floor(Math.random()*items.length)];
    document.getElementById("Comp1").innerHTML ="Computer's Response: "+randomItem;
    return randomItem;
}


var You = 0;
var Comp1 = 0;
function Answer(){
    var Yours = validate();
    var Comp = computer();
    
    //document.write(Yours);
    //document.write(Comp);
    if(Yours == false) {
        document.getElementById("result").innerHTML ="Try Next Time";
        Comp1 == Comp1;
        You == You;
    }
    else if(Yours == "scissor" && Comp =="Scissor"){
        document.getElementById("result").innerHTML ="Draw";
        Comp1 == Comp1;
        You == You;
    }
    else if(Yours == "rock" && Comp =="Rock"){
        document.getElementById("result").innerHTML ="Draw";
        Comp1 == Comp1;
        You == You;
    }
    else if(Yours == "paper" && Comp =="Paper"){
        document.getElementById("result").innerHTML ="Draw";
        Comp1 == Comp1;
        You == You;
    }
    else if(Yours == "scissor" && Comp == "Rock"){
        document.getElementById("result").innerHTML ="Computer Wins!!";
        Comp1 = Comp1 + 1;
    }
    else if(Yours == "scissor" && Comp =="Paper"){
        document.getElementById("result").innerHTML ="You Win!!";
        You = You + 1;
    }
    else if(Yours == "rock" && Comp =="Paper"){
        document.getElementById("result").innerHTML ="Computer Wins!!";
        Comp1 = Comp1 + 1;
    }
    else if(Yours == "rock" && Comp =="Scissor"){
        document.getElementById("result").innerHTML ="You Win!!";
        You = You + 1;    
    }
    else if(Yours == "paper" && Comp == "Scissor"){
        document.getElementById("result").innerHTML ="Computer Wins!!";
        Comp1 = Comp1 + 1;
    }
    else if(Yours == "paper" && Comp == "Rock"){
        document.getElementById("result").innerHTML ="You Win!!";
        You = You + 1;

    }
    document.getElementById("You").innerHTML = "Your Score: "+ You;
    document.getElementById("Comp").innerHTML = "Computers Score: " + Comp1;

}