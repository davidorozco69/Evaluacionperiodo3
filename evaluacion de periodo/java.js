let contraseña, correo;

let formulario = document.getElementById('form-register')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    leerdatos()
})

function leerdatos(){
    correo = document.getElementById('correo').value;
    contraseña = document.getElementById('contraseña').value;
    guardarlocarstorage(correo,contraseña)
}

function guardarlocarstorage(contraseña,correo,){
    localStorage.setItem('contraseña',contraseña);
    localStorage.setItem('Correo',correo);
    
}