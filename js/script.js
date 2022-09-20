$(document).ready(function(){
    buttons();
    
    //localStorage.removeItem("item");
    document.body.onload = nameDisplayCheck;
    
    if(localStorage.getItem("item") != "" && localStorage.getItem("item") != null){
        alert("Elementos en el local storage" + " ["+localStorage.getItem("item")+"]")
    }
    
});

let resultado = "";
let caja1 = "";
let caja2 = "";

let n1 = "";
let n2 = "";
let arrayResultado = [];
    
let verificarOperacion = false;

function buttons(){

    $("#button0").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "0";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "0";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });
    
    $("#button1").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "1";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "1";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button2").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "2";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "2";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button3").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "3";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "3";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button4").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "4";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "4";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button5").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "5";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "5";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button6").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "6";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "6";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button7").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "7";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "7";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button8").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "8";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "8";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#button9").on("click", function(){
        if(verificarOperacion == false){
            caja1 = $("#caja").val() + "9";
            $("#caja").val(caja1);
            n1 = caja1;
        }else{
            caja2 = $("#cajaAyuda").val() + "9";
            $("#cajaAyuda").val(caja2);
            $("#caja").val($("#caja").val() + caja2);
            $("#cajaAyuda").val("");
            n2 += caja2;
        }
    });

    $("#buttonSumar").on("click", function(){
        if($("#caja").val().length == 0){
            alert("Primero debes de ingresar algún número");
        }else{
            opcion = "Sumar";
            verificarOperacion = true;
            if(opcion == "Sumar"){        
                $("#caja").val($("#caja").val() + " + " + $("#cajaAyuda").val());        
            }
        }
    });

    $("#buttonRestar").on("click", function(){
        if($("#caja").val().length == 0){
            alert("Primero debes de ingresar algún número");
        }else{
            opcion = "Restar";
            verificarOperacion = true;
            if(opcion == "Restar"){        
                $("#caja").val($("#caja").val() + " - " + $("#cajaAyuda").val());        
            }
        }
    });

    $("#buttonMultiplicar").on("click", function(){
        if($("#caja").val().length == 0){
            alert("Primero debes de ingresar algún número");
        }else{
            opcion = "Multiplicar";
            verificarOperacion = true;
            if(opcion == "Multiplicar"){        
                $("#caja").val($("#caja").val() + " * " + $("#cajaAyuda").val());        
            }
        }
    });

    $("#buttonDividir").on("click", function(){
        if($("#caja").val().length == 0){
            alert("Primero debes de ingresar algún número");
        }else{
            opcion = "Dividir";
            verificarOperacion = true;
            if(opcion == "Dividir"){        
                $("#caja").val($("#caja").val() + " / " + $("#cajaAyuda").val());        
            }
        }
    });

    $("#buttonResultado").on("click", function(){
        if($("#caja").val().length == 0){
            alert("Primero debes de ingresar algún número");
        }else{
            if(opcion == "Sumar"){
                resultado = parseInt(n1) + parseInt(n2);
                $("#caja").val(resultado);
                $("#cajaAyuda").val("");
                n2 = "";
                caja2 = "";
                n1 = resultado;
                verificarOperacion = true;
               
                arrayResultado.push(resultado);
                localStorage.setItem("item", JSON.stringify(arrayResultado));                  
                
                location.reload();
            }else if(opcion == "Restar"){
                resultado = parseInt(n1) - parseInt(n2);
                $("#caja").val(resultado);
                $("#cajaAyuda").val("");
                n2 = "";
                caja2 = "";
                n1 = resultado;
                verificarOperacion = true;

                arrayResultado.push(resultado);
                localStorage.setItem("item", JSON.stringify(arrayResultado));                  
                
                location.reload();
            }else if(opcion == "Multiplicar"){
                resultado = parseInt(n1) * parseInt(n2);
                $("#caja").val(resultado);
                $("#cajaAyuda").val("");
                n2 = "";
                caja2 = "";
                n1 = resultado;
                verificarOperacion = true;

                arrayResultado.push(resultado);
                localStorage.setItem("item", JSON.stringify(arrayResultado));                  
                
                location.reload();
            }else if(opcion == "Dividir"){
                resultado = parseInt(n1) / parseInt(n2);
                $("#caja").val(resultado);
                $("#cajaAyuda").val("");
                n2 = "";
                caja2 = "";
                n1 = resultado;
                verificarOperacion = true;

                arrayResultado.push(resultado);
                localStorage.setItem("item", JSON.stringify(arrayResultado));                  
                
                location.reload();
            }
        }
    });

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
                $(".resultado").append(items);   
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


