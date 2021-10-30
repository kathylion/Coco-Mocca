/* Varibles */
var form = document.getElementById('form_submit')
var btnSubmit = document.getElementById('btn_submit')

/* Función para evitar la recarga de la página al darle al botón submit */
form.addEventListener('submit', event => {
    event.preventDefault();
})

function onSubmit(){
    alert('Tu mensaje ha sido enviado correctamente!!')
}