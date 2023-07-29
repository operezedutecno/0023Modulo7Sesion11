const db = require("./../models/index")
const Participante = db.participantes
const Curso = db.cursos


// Método para crear participante
exports.crearParticipante = async (participante) => {
    try {
        const registroParticipante = await Participante.create(participante)
        return registroParticipante
    } catch (error) {
        console.log("Error registrando Participante", error);
        return null
    }
}

exports.crearCurso = async (curso) => {
    try {
        const registroCurso = await Curso.create(curso)
        return registroCurso
    } catch (error) {
        console.log("Error registrando Curso", error);
        return null
    }
}