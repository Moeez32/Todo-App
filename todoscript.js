
       function btnaction(){
        
        const inputElement = document.querySelector("#input");
        const input = inputElement.value;
        const errormsg = document.querySelector("#error");
        if(input ===""){
            errormsg.innerHTML = "Please Make Task";
        }else{

            const result = document.querySelector("#result");
            const element =  document.createElement('li');
            element.appendChild(document.createTextNode(input));
            result.appendChild(element);
            
            console.log(input);
            inputElement.value= "";
            errormsg.innerHTML="";
        }
        
    
        
    }