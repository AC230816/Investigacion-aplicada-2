document.addEventListener('DOMContentLoaded', () => {
    const carrera = document.getElementById('carrera');
    const carreraSleccionada = carrera.value;
    const materias = document.getElementById('materias');
    const ciclo = document.getElementById('ciclo');
    

    if(carreraSleccionada == "tecnico" && ciclo.value == "1"){
        materias.innerHTML = 
        '<option value = "materia1">Antropología Filosófica</option>' +
        '<option value = "materia2">Programación de Algoritmos</option>' +
        '<option value = "materia3">Álgebra Vectorial y Matrices</option>' +
        '<option value = "materia4">Lenguajes de Marcado y Estilo Web</option>' +
        '<option value = "materia5">Redes de Comunicación</option>';
    } else if(carreraSleccionada == "tecnico" && ciclo.value == "2"){
        materias.innerHTML = 
        '<option value = "materia1">Pensamiento Social Cristiano</option>' +
        '<option value = "materia2">Desarrollo de Aplicaciones con Software Interpretado en el Cliente</option>' +
        '<option value = "materia3">Desarrollo de Aplicaciones con Software Propietario</option>' +
        '<option value = "materia4">Programación Orientada a Objetos</option>' +
        '<option value = "materia5">Análisis y Diseño de Bases de Datos</option>';
    }

    if(carreraSleccionada == "ingenieria" && ciclo.value == "1"){
        materias.innerHTML = 
        '<option value = "materia1">Cálculo Diferencial</option>' +
        '<option value = "materia2">Química General</option>' +
        '<option value = "materia3">Antropología Filosófica</option>' +
        '<option value = "materia4">Programación Estructurada</option>';
    } else if(carreraSleccionada == "ingenieria" && ciclo.value == "2"){
        materias.innerHTML = 
        '<option value = "materia1">Álgebra Vectorial y Matrices</option>' +
        '<option value = "materia2">Cálculo Integral</option>' +
        '<option value = "materia3">Modelamiento y Diseño de Bases de Datos</option>' +
        '<option value = "materia4">Programación Orientada a Objetos</option>';
    } else {
        materias.innerHTML = 
        '<option value = "materia1">Cálculo de Varias Variables</option>' +
        '<option value = "materia2">Cinemática y Dinámica de Partículas</option>';
    }
});