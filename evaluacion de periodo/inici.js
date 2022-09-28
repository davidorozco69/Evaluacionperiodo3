let correo, contraseña;

let formulario = document.getElementById('form-register')

formulario.addEventListener('submit',(e)=>{
    console.log('hola');
    e.preventDefault();
    leerdatos()
})

function leerdatos(){
    correo = document.getElementById('correo').value;
    contraseña = document.getElementById('contraseña').value;
    validarData (correo,contraseña)
    guardarlocarstorage(correo,contraseña)
}
function validarData (contraseña,correo){
    if(contraseña.length==0 || correo.length==0 ){
        alert('Error')
            swal("Error de informacion", 
                "ups...",
                "Error");   
    }
}
function listaData(){
    let correoUs = localStorage.getItem('correo');
    let contraseñaUs = localStorage.getItem('Contraseña');
   
}