const botonMenu = document.getElementById('boton-menu');
const listaMenu = document.getElementById('lista-menu');

botonMenu.addEventListener('click', function() {
if (listaMenu.style.display === 'block') {
    listaMenu.style.display = 'none';
} else {
    listaMenu.style.display = 'block';
}
});
