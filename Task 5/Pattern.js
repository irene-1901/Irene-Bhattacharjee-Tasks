function validate() {
    var res = document.forms["myForm"]["input1"].value;
    var res1 = document.forms["myForm"]["input2"].value;
    if (res != " " || res != "") {
        if( res == "*" || res == "#" || res == "1" || res == "a"){
            document.getElementById("symbol").innerHTML = " Your Response: " + res;
            document.getElementById("number1").innerHTML = " Your Response: " + res1;
            return [res, res1];
        }else{
                alert("Enter Valid Response");
                return false;
            }
        }else{
            alert("Enter Valid Response");
            return false;
            }
        
    }

function result() {
    const [first, second] = validate();
    //alert(first + second);
    if (first == "a") {
        let n = second; 
        let string = "";
        // External loop
        for (let i = 1; i <= n; i++) {
            // printing characters
            for (let j = 0; j < i; j++) {
                string += String.fromCharCode(j + 65);
            }
            string += "\n";
        }
        document.getElementById("symbol1").innerHTML = " Your Response: " + string;
    }
    else if(first == "1") {
        let n = second;
        let string = "";
        // External loop
        for (let i = 1; i <= n; i++) {
            // printing characters
            for (let j = 0; j < i; j++) {
                string += String(j);
            }
            string += "\n";
        }
        document.getElementById("symbol1").innerHTML = " Your Response: " + string;
    }
    else if(first =="#") {
        let n = second;
        a = "#"
        let string = "";
        // External loop
        for (let i = 1; i <= n; i++) {
            // printing characters
            for (let j = 0; j < i; j++) {
                string += "#";
            }
            string += "\n";
        }
        document.getElementById("symbol1").innerHTML = " Your Response: " + string;
    }
    else if(first =="*") {
        let n = second;
        a = "*"
        let string = "";
        // External loop
        for (let i = 1; i <= n; i++) {
            // printing characters
            for (let j = 0; j < i; j++) {
                string += "*";
            }
            string += "\n";
        }
        document.getElementById("symbol1").innerHTML = " Your Response: " + string;
    }
}