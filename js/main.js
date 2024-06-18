

function años() {
    //Obtenemos los datos ingresados en los inputs
    const edad = parseInt(document.getElementById("edad").value);

    //utilizar if para determinar parametros
    if (edad <= 12) {
        document.getElementById("resultadoEdad").innerHTML = "<div class= 'alert alert-success' role='alert'><strong>El sistema dice que:</strong> Eres un niño. <img src='img/niño.png'></div>";

    } else if (edad > 12 && edad <= 40){
        document.getElementById("resultadoEdad").innerHTML = "<div class= 'alert alert-success' role='alert'><strong>El sistema dice que:</strong> Eres un joven. <img src='img/joven.png'></div>";

    } else if (edad > 40 && edad <= 60) {
        document.getElementById("resultadoEdad").innerHTML = "<div class= 'alert alert-success' role='alert'><strong>El sistema dice que:</strong> Eres un adulto. <img src='img/adulto.png'></div>";

    } else if (edad > 60) {
        document.getElementById("resultadoEdad").innerHTML = "<div class= 'alert alert-success' role='alert'><strong>El sistema dice que:</strong> Eres un adulto mayor. <img src='img/mayor.png'></div>";
    }

}

function IMC() {
    //Obtenemos los valores ingresados en los inputs
    let peso = parseInt(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);
    let imc = peso / (estatura * estatura);

    //Utilizamos if para determinar los parametros
    if (imc < 18.5) {
        document.getElementById("resultadoIMC").innerHTML = "<div class= 'alert alert-warning' role='alert'><strong>Usted tiene:</strong> Bajo peso. <img src='img/bajo.png'></div>";

    } else if (imc >= 18.5 && imc <= 24.9){
        document.getElementById("resultadoIMC").innerHTML = "<div class= 'alert alert-success' role='alert'><strong>Usted tiene:</strong> Un peso normal. <img src='img/normal.png'></div>";

    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("resultadoIMC").innerHTML = "<div class= 'alert alert-warning' role='alert'><strong>Usted tiene:</strong> Sobrepeso. <img src='img/sobrepeso.png'></div>";

    } else if (imc >= 30 && imc <= 34.9) {
        document.getElementById("resultadoIMC").innerHTML = "<div class= 'alert alert-danger' role='alert'><strong>Usted tiene:</strong> Obesidad 1. <img src='img/obesidad.png'></div>";

    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById("resultadoIMC").innerHTML = "<div class= 'alert alert-danger' role='alert'><strong>Usted tiene:</strong> Obesidad 2. <img src='img/obesidad.png'></div>";
        
    } else if (imc >= 40 && imc <= 49.9) {
        document.getElementById("resultadoIMC").innerHTML = "<div class= 'alert alert-danger' role='alert'><strong>Usted tiene:</strong> Obesidad 3. <img src='img/obesidad.png'></div>";
        
    } else if (imc > 50) {
        document.getElementById("resultadoIMC").innerHTML = "<div class= 'alert alert-danger' role='alert'><strong>Usted tiene:</strong> Obesidad 4. <img src='img/obesidad.png'></div>";
        
    }
}

function pA() {
    //Obtenemos los valores de los inputs
    let presionArterial = parseInt(document.getElementById("presionArterial").value);

    //Utilizamos if para determinar los parametros
    if (presionArterial < 90) {
        document.getElementById("resultadoPresionArterial").innerHTML = "<div class= 'alert alert-primary' role='alert'><strong>Su clasificacion es:</strong> Baja.</div>";

    } else if (presionArterial < 120){
        document.getElementById("resultadoPresionArterial").innerHTML = "<div class= 'alert alert-success' role='alert'><strong>Su clasificacion es:</strong> Normal.</div>";

    } else if (presionArterial >= 120 && presionArterial <= 139){
        document.getElementById("resultadoPresionArterial").innerHTML = "<div class= 'alert alert-warning' role='alert'><strong>Su clasificacion es:</strong> Prehipertension.</div>";

    } else if (presionArterial >= 140 && presionArterial <= 159){
        document.getElementById("resultadoPresionArterial").innerHTML = "<div class= 'alert alert-danger' role='alert'><strong>Su clasificacion es:</strong> ALTA: Hipertension fase 1.</div>";
        
    }  else if (presionArterial >= 160){
        document.getElementById("resultadoPresionArterial").innerHTML = "<div class= 'alert alert-danger' role='alert'><strong>Su clasificacion es:</strong> ALTA: Hipertension fase 2.</div>";
        
    }
}

function peso_altura(){
    //Inicio del sistema
    //Variables de entrada:
    const sexo = document.getElementById("sexo").value;
    const edad2 = parseInt(document.getElementById("edad2").value); 
    let resultado2;

    if (sexo == "Hombre" || sexo == "hombre" && edad2 >= 11 && edad2 <= 14) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de "+edad2+" años, Tienes un Peso de 45Kg y una altura de 157cm.</div>"; //Salida

    } else if (sexo == "Hombre" || sexo == "hombre" && edad2 >= 15 && edad2 <= 18) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de "+edad2+" años, Tienes un Peso de 66Kg y una altura de 176cm.</div>"; //Salida

    } else if (sexo == "Hombre" || sexo == "hombre" && edad2 >= 19 && edad2 <= 24) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de "+edad2+" años, Tienes un Peso de 72Kg y una altura de 177cm.</div>"; //Salida

    } else if (sexo == "Hombre" || sexo == "hombre" && edad2 >= 25 && edad2 <= 50) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de "+edad2+" años, Tienes un Peso de 79Kg y una altura de 176cm.</div>"; //Salida

    } else if (sexo == "Hombre" || sexo == "hombre" && edad2 >= 51) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta:</strong> Usted es un hombre de "+edad2+" años, Tienes un Peso de 77Kg y una altura de 173cm.</div>"; //Salida

    } else if (sexo == "Mujer" || sexo == "mujer" && edad2 >= 11 && edad2 <= 14) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de "+edad2+" años, Tienes un Peso de 46Kg y una altura de 157cm.</div>"; //Salida

    } else if (sexo == "Mujer" || sexo == "mujer" && edad2 >= 15 && edad2 <= 18) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de "+edad2+" años, Tienes un Peso de 55Kg y una altura de 163cm.</div>"; //Salida

    } else if (sexo == "Mujer" || sexo == "mujer"&& edad2 >= 19 && edad2 <= 24) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de "+edad2+" años, Tienes un Peso de 58Kg y una altura de 164cm.</div>"; //Salida

    } else if (sexo == "Mujer" || sexo == "mujer" && edad2 >= 25 && edad2 <= 50) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de "+edad2+" años, Tienes un Peso de 63Kg y una altura de 163cm.</div>"; //Salida

    } else if (sexo == "Mujer" || sexo == "mujer" && edad2 >= 51) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta:</strong> Usted es una mujer de "+edad2+" años, Tienes un Peso de 65Kg y una altura de 160cm.</div>"; //Salida
        
    } else { //En caso de que el usuario digite un valor incorrecto:
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta:</strong> El sexo y la edad son incorrectos</div>";
    }
}