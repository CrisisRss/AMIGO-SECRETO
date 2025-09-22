// 1. Declarar el array para almacenar los amigos
let amigos = [];

// 2. Función para mostrar la lista en el HTML
function mostrarLista() {
  // Obtener el elemento UL de la lista
  let lista = document.getElementById("listaAmigos");

  // Limpiar contenido previo (para evitar duplicados en pantalla)
  lista.innerHTML = "";

  // Recorrer el array amigos y crear <li> para cada uno
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// 3. Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del input
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar entrada vacía
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Verificar duplicados (sin importar mayúsculas/minúsculas)
  let existe = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert("Ese nombre ya está en la lista");
    input.value = "";
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Actualizar lista en pantalla
  mostrarLista();

  // Limpiar el campo de texto
  input.value = "";
}

// 4. Función para sortear un amigo
function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  // Validar que haya amigos en la lista
  if (amigos.length === 0) {
    resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
    return;
  }

  // Generar índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en pantalla
  resultado.innerHTML = "<li>El amigo secreto es: <strong>" + amigoSorteado + "</strong></li>";
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

