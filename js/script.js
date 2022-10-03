//localStorage.removeItem("item");
document.body.onload = nameDisplayCheck;
if(localStorage.getItem("item") != "" && localStorage.getItem("item") != null){
    alert("Elementos en el local storage" + " ["+localStorage.getItem("item")+"]")
}

let resultado = "";
let arrayResultado = [];

function buttons(){

    document.form.caja.value=eval(document.form.caja.value);
    document.getElementById("caja").value = document.getElementById("caja").value;
            
    resultado = document.getElementById("caja").value;
    arrayResultado.push(resultado);
    localStorage.setItem("item", JSON.stringify(arrayResultado));                  
        
    location.reload();

}


function nameDisplayCheck(){
    if(localStorage.getItem("item") != null){
        
        let a = JSON.parse(localStorage.getItem("item")).toString();
        let v = a.split(",");

        let items = "";
        for(let i = 0; i < v.length; i++){
    
            items += "<div class='content' id='"+v[i]+"'>";
            items +=    "<div class='result' id='"+v[i]+"'>";
            items +=        "<label class='resultado-final' id='"+i+"' for=''>Resultado: "+ v[i] +"</label>";
            items +=        "<input type='button' id='"+v[i]+"' class='submit' onclick='getById("+v[i]+")' value='X'>";
            items +=    "</div>";
            items += "</div><br>";
                
            arrayResultado.push(v[i]);
        }  
            
        if(arrayResultado.length != 0 || arrayResultado.length != ""){         
            document.getElementById("resu").innerHTML = items;  
            
        }
    }
}

function getById(id){
 
    const list = document.getElementById(id);

    if(arrayResultado.length == 0){
        localStorage.removeItem("item");
        localStorage.clear();
    }

    for(let i = 0; i < arrayResultado.length; i++){
        if(arrayResultado[i] == id){
            arrayResultado.splice(i, 1);
            i--;
            list.remove();        
            localStorage.setItem("item", JSON.stringify(arrayResultado))
        }
    }
    if(localStorage.getItem("item") != "" && localStorage.getItem("item") != null){
        alert("Elementos en el local storage" + " ["+localStorage.getItem("item")+"]")
    }
}


