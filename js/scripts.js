document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("inscripcion").addEventListener('submit', validarFormulario); 
  });
  
function validarFormulario(evento) {
    evento.preventDefault();
    alert('Gracias por tu inscripción')
    this.submit();
}

function cambiar(curso) {
    var select = document.getElementById("curso");
    var options = document.getElementById("curso").options;
    for (let i = 0; i < options.length; i++) {
        if (select[i].value == curso) {
            select.options.item(i).selected = 'selected';
        }        
    }
}