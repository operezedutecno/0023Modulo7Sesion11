const conexion = require("./../config/Conexion.config")


const db = {
    conexion: conexion,
    cursos: require("./Curso.model"),
    participantes: require("./Participante.model")
}

db.cursos.belongsToMany(db.participantes, {
    through: "cursos_participantes",
    as: "participantes",
    foreignKey: "curso_id"
})

db.participantes.belongsToMany(db.cursos, {
    through: "cursos_participantes",
    as: "cursos",
    foreignKey: "participante_id"
})
module.exports = db