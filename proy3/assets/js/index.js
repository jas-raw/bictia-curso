var notes = []
var note = document.getElementById("notes")

document.getElementById('saveNotes').addEventListener("click", (e) => {
    e.preventDefault()
    const reg = document.getElementById('notesReg')
    reg.innerHTML = "<strong>Notas registradas: </strong>"
    if(note.value){
        if(note.value <= 5 && note.value >= 0){
            notes.push(note.value)
            note.value = ''
        }else{
            alert('La nota debe estar entre 0 y 5')
            note.value = ''
        }
    }else{
        alert('Debes poner una nota a guardar')
    }
    notes.forEach((it, index) => {
        let text = ''
        if(index !== 0){
            text = ' - '
        }
        reg.innerHTML = reg.innerHTML + text + it
    })
})

document.getElementById("submitStudent").addEventListener("click", (e) => {
    e.preventDefault()
    let studentId = document.getElementById('studentId')
    let studentName = document.getElementById('studentName')
    if(studentId.value && studentName.value){
        if(notes.length > 0){
            const idIn = localStorage.getItem(studentId.value)
            const obj = JSON.stringify({
                studentName: studentName.value, notes
            })
            if(idIn){
                if(confirm('El estudiante ya existe, ¿desea reemplazar los datos?')){
                    localStorage.setItem(studentId.value, obj)
                }
            }else{
                localStorage.setItem(studentId.value, obj)
            }
            studentId.value = ''
            studentName.value = ''
            note.value = ''
            notes = []
        }else{
            alert('No se han ingresado notas para el estudiante, añada algunas antes de guardar')
        }
    }else{
        alert("Los campos de nombre y ID son obligatorios")
    }
})