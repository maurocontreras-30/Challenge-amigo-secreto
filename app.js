// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// ver si se realizan cambios.
let amigos = []

function agregarAmigo(){
    // 1. Capturar el valor del campo de entrada
    // CAMBIO el id 'nombre-amigo'
    const campoNombre = document.getElementById('nombre-amigo');
    const nombre = campoNombre.value;
    // Si el campo está vacío, muestra una alerta y detiene la función.
    if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return; // Sale de la función si la validación falla.
  }
  amigos.push(nombre);
  console.log('Lista de amigos actualizada:', amigos);
    campoNombre.value = ''
    mostrarAmigosEnLista();
}

function mostrarAmigosEnLista() {
  const listaHTML = document.getElementById('lista-amigos');
  listaHTML.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = amigos[i];
    listaHTML.appendChild(nuevoElementoLista);
  } }

  function sortear() {
  if (amigos.length < 1) {
    alert('¡No hay amigos disponibles para sortear!');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Modificación aquí: usamos el ID 'resultado' de tu HTML
  const resultadoHTML = document.getElementById('resultado');
  resultadoHTML.innerHTML = `<li>¡El amigo sorteado es: **${amigoSorteado}**!</li>`;
}