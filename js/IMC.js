document.getElementById('form_PesoIdeal').addEventListener('submit', function(event) {
    event.preventDefault(); //event.preventDefault previene que el formulario se envie y la pagina se recargue

    // obtenemos los valores del formulario
    const sexo = document.getElementById('sexoIMC').value;
    const edad = parseInt(document.getElementById('edadIMC').value);
    const pesoActual = parseFloat(document.getElementById('pesoActualIMC').value);
    let estatura = parseFloat(document.getElementById('estaturaIMC').value);

    //calculamos el peso ideal segun el sexo y la estatura
    let pesoIdeal, imc, calificacion, deficit, recomendacion;

    if (sexo === 'hombre') {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
    } else if (sexo === 'mujer') {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
    } else {
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Por favor seleccione su sexo.</div>';
        return;
    }

    estatura = estatura / 100; // Convertir estatura
    imc = pesoActual / (estatura * estatura);
    deficit = pesoActual - pesoIdeal;

    if (deficit > 0) {
        recomendacion = `Necesita perder ${deficit.toFixed(1)} kg para alcanzar su peso ideal`
    } else if (deficit < 0){
        recomendacion = `Necesita ganar ${(Math.abs(deficit)).toFixed(1)} kg para alcanzar su peso ideal.`
    } else {
        recomendacion = "Ya está en su peso ideal."
    }

    switch (true){
        case (imc < 18.5):
            calificacion = '<span class="badge text-bg-warning">Bajo peso</span>';
            break;
        case (imc >= 18.5 && imc < 24.9):
            calificacion = '<span class="badge text-bg-success">Peso normal</span>';
            break;
        case (imc >= 25 && imc < 29.9):
            calificacion = '<span class="badge text-bg-warning">Sobrepeso</span>';
            break;
        case (imc >= 30 && imc < 34.9):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 1</span>';
            break;
        case (imc >= 35.0 && imc < 39.9):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 2</span>';
            break;
        case (imc >= 40.0):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 3</span>';
            break;
        default:
            calificacion = 'Valores de IMC no clasificados';
    }

    // mostramos un mensaje resultado en el documento html
    document.getElementById('resultado').innerHTML =
    `<div class="alert alert-secondary" role="alert">
        <strong>Resultado:</strong><br>
        Edad: ${edad} años<br>
        Peso Actual: ${pesoActual} kg<br>
        Estatura: ${estatura * 100} cm<br>
        IMC: ${imc.toFixed(1)} tiene ${calificacion}<br>
        Peso Ideal: <span class="badge text-bg-info">${pesoIdeal.toFixed(1)}</span><br>
        Deberías ${(pesoActual > pesoIdeal) ? 'perder' : 'ganar'}: <span class="badge text-bg-dark">${Math.abs(pesoActual - pesoIdeal).toFixed(1)} kg</span>
    </div>`;

});
