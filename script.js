document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensaje-enviado').classList.remove('oculto');
  this.reset();
});