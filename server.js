const db = require("./app/models/index")
const controller = require("./app/controllers/app.controller")

const main = async() => {
    console.log("Ejecutando aplicación");
    // Registro de Participantes
    // const participante1 = await controller.crearParticipante({ rut: "11.111.111-1", nombre: "María"})
    // const participante2 = await controller.crearParticipante({ rut: "22.222.222-2", nombre: "José"})
    // const participante3 = await controller.crearParticipante({ rut: "33.333.333-3", nombre: "Pedro"})
    // const participante4 = await controller.crearParticipante({ rut: "44.444.444-4", nombre: "Pablo"})

    // Registro de Cursos
    const curso1 = await controller.crearCurso({ nombre: "Javascript"})
    const curso2 = await controller.crearCurso({ nombre: "Python"})
    const curso3 = await controller.crearCurso({ nombre: "Java"})
    
    console.log("Ejecución exitosa");
}


db.conexion.sync().then(() => {
    console.log("BD sincronizada");
    main()
})