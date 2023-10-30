const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const tecnicoComputacion = [
    {
        "materia" : "Antropología Fiolsófica",
        "codigo" : "ANF231",
        "unidades valorativas": 3,
        "prerrequisitos":"Bachillerato",
        "Numero" : "1",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Programación de Algoritmos",
        "codigo" : "PAL404",
        "unidades valorativas": 4,
        "prerrequisitos":"Bachillerato",
        "Numero" : "2",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Algebra Vectorial y matrices", 
        "codigo" : "ALG501",
        "unidades valorativas" : 4,
        "prerrequisitos" : "Bachillerato",
        "Numero" : "3",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Lenguajes de Marcado y Estilo Web",
        "codigo" : "LME404",
        "unidades valorativas": 4,
        "prerrequisitos":"Bachillerato",
        "Numero" : "4",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Redes de comunicación",
        "codigo" : "REC404",
        "unidades valorativas": 4,
        "prerrequisitos":"Bachillerato",
        "Numero" : "5",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Pensamiento social cristiano",
        "codigo" : "PSC231",
        "unidades valorativas": 3,
        "prerrequisitos":"Bachillerato",
        "Numero" : "6",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Programación orientada a objetos",
        "codigo" : "POO404",
        "unidades valorativas": 4,
        "prerrequisitos":"2",
        "Numero" : "7",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Desarrollo de Aplicaciones Web con Software Interpretado en el Cliente",
        "codigo" : "DAW404",
        "unidades valorativas": 4,
        "prerrequisitos":"4",
        "Numero" : "8",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Desarrollo de Aplicaciones con Software Propietario",
        "codigo" : "DSP404",
        "unidades valorativas": 4,
        "prerrequisitos":"2",
        "Numero" : "9",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Análisis y Diseño de Bases de Datos",
        "codigo" : "ASB404",
        "unidades valorativas": 4,
        "prerrequisitos":"2",
        "Numero" : "10",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    }
];

const ingenieriaComputacion =  [
    {
        "materia" : "Cálculo Diferencial",
        "codigo" : "CAD501",
        "unidades valorativas": 4,
        "prerrequisitos":"Bachillerato",
        "Numero" : "1",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Química General",
        "codigo" : "QUG501",
        "unidades valorativas": 4,
        "prerrequisitos":"Bachillerato",
        "Numero" : "2",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Antropología Filosófica", 
        "codigo" : "ANF231",
        "unidades valorativas" : 2,
        "prerrequisitos" : "Bachillerato",
        "Numero" : "3",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Programación Estructurada",
        "codigo" : "PRE104",
        "unidades valorativas": 4,
        "prerrequisitos":"Bachillerato",
        "Numero" : "4",
        "inscrita" : false,
        "ciclo" : "1",
        "aprobada" : false
    },
    {
        "materia" : "Álgebra Vectorial y Matrices",
        "codigo" : "ALG501",
        "unidades valorativas": 4,
        "prerrequisitos":"Bachillerato",
        "Numero" : "5",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Cálculo Integral",
        "codigo" : "CAI501",
        "unidades valorativas": 4,
        "prerrequisitos":"1",
        "Numero" : "6",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Modelamiento y Diseño de Bases de Datos",
        "codigo" : "MBD104",
        "unidades valorativas": 4,
        "prerrequisitos":"4",
        "Numero" : "7",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Programación Orientada a Objetos",
        "codigo" : "POO104",
        "unidades valorativas": 4,
        "prerrequisitos":"4",
        "Numero" : "8",
        "inscrita" : false,
        "ciclo" : "2",
        "aprobada" : false
    },
    {
        "materia" : "Cálculo de Varias Variables",
        "codigo" : "CVV501",
        "unidades valorativas": 4,
        "prerrequisitos":"6",
        "Numero" : "9",
        "inscrita" : false,
        "ciclo" : "3",
        "aprobada" : false
    },
    {
        "materia" : "Cinemática y Dinámica de Partículas",
        "codigo" : "CDP501",
        "unidades valorativas": 4,
        "prerrequisitos":"1",
        "Numero" : "10",
        "inscrita" : false,
        "ciclo" : "3",
        "aprobada" : false
    }
];

//Consulta de prerrquisitos de una materia (tecnico)
app.get("/tecnico-computacion/:numeroMateria",(request,response) => {
    const numeroMateria = request.params.numeroMateria;
    //Guardamos la materia que el usuario esta buscando
    const materia = tecnicoComputacion.find( (m) => m.Numero === numeroMateria );

    if(!materia){
        response.status(404).json({error : "materia no encontrada"});
    } else {
        //Guardamos la materia que esta como prerrequisito
        const prerrequisitos = tecnicoComputacion.find( (m) => materia.prerrequisitos === m.Numero );

        if(!prerrequisitos){
            /*
            Si el prerrequisito de la materia a buscar no coincide con el numero de alguna otra materia,
            significa que el prerrequisito para llevar la materia a buscar no es haber llevado otra materia,
            sino haber cursado bachillerato
            */
            response.status(200).json({prerrequisitos : "Bachillerato"});
        } else {
            response.status(200).json({prerrequisitos : prerrequisitos.codigo});
        }
    }
});

//Consulta de prerrequisitos de una materia (ingenieria)
app.get("/ingenieria-computacion/:numeroMateria",(request,response) => {
    const numeroMateria = request.params.numeroMateria;
    //Guardamos la materia que el usuario esta buscando
    const materia = ingenieriaComputacion.find( (m) => m.Numero === numeroMateria );

    if(!materia){
        response.status(404).json({error : "materia no encontrada"});
    } else {
        //Guardamos la materia que esta como prerrequisito
        const prerrequisitos = ingenieriaComputacion.find( (m) => materia.prerrequisitos === m.Numero );

        if(!prerrequisitos){
            /*
            Si el prerrequisito de la materia a buscar no coincide con el numero de alguna otra materia,
            significa que el prerrequisito para llevar la materia a buscar no es haber llevado otra materia,
            sino haber cursado bachillerato
            */
            response.status(200).json({prerrequisitos : "Bachillerato"});
        } else {
            response.status(200).json({prerrequisitos : prerrequisitos.codigo});
        }
    }
});

//Consulta de materias por ciclo (tecnico)
app.get("/tecnico-computacion/consulta-materias-por-ciclo/:numeroCiclo",(request,response) => {
    const numeroCiclo = request.params.numeroCiclo;
    //Hacemos un filtro para escoger las materias que comprarten el mismo numero de ciclo
    const materias = tecnicoComputacion
        .filter((m) => m.ciclo === numeroCiclo)
        //Se imprimira solo el nombre y codigo de la materia
        .map((m) => ({materia : m.materia,codigo : m.codigo}));

    if(materias.length === 0){
        response.status(404).json({error : "No hay materias para el ciclo seleccionado"});
    } else {
        response.setHeader('Content-Type', 'application/json');
        response.status(200).json({materias : materias});
    }
});

//Consulta de materias por ciclo (ingenieria)
app.get("/ingenieria-computacion/consulta-materias-por-ciclo/:numeroCiclo",(request,response) => {
    const numeroCiclo = request.params.numeroCiclo;
    //Hacemos un filtro para escoger las materias que comprarten el mismo numero de ciclo
    const materias = ingenieriaComputacion
        .filter((m) => m.ciclo === numeroCiclo)
        //Se imprimira solo el nombre y codigo de la materia
        .map((m) => ({materia : m.materia,codigo : m.codigo}));

    if(materias.length === 0){
        response.status(404).json({error : "No hay materias para el ciclo seleccionado"});
    } else {
        response.setHeader('Content-Type', 'application/json');
        response.status(200).json({materias : materias});
    }
});

//Ruta al formulario de inscripcion de materias
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/inscribirmaterias.html');
});

//Inscripcion de materias
app.post('/inscripcion', (request, response) => {
    const { carrera, ciclo, materias } = request.body;

    const materiasCarrera = carrera === 'tecnico' ? tecnicoComputacion : ingenieriaComputacion;

    const materiasFiltradas = materiasCarrera.filter(materia => materia.ciclo === ciclo);

    const resultado = materiasFiltradas.map(materia => {
        if (materia.prerrequisitos === "Bachillerato") {
            materia.inscrita = true;
        } else {
            const prerequisito = materiasFiltradas.find(m => m.Numero === materia.prerrequisitos);
            if (prerequisito && !prerequisito.aprobada) {
                return {
                    materia: materia.materia,
                    codigo: materia.codigo,
                    resultado: "No se puede inscribir debido a que no se ha aprobado el prerrequisito."
                };
            }
        }

        return {
            materia: materia.materia,
            codigo: materia.codigo,
            resultado: "Inscrita"
        };
    });

    response.json(resultado);
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});