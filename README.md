🎁 Amigo Secreto App
Esta es una aplicación web simple para organizar un sorteo de amigo secreto. Permite a los usuarios ingresar nombres, ver una lista de participantes y sortear un ganador de forma aleatoria.

Tecnologías Utilizadas
HTML5: Estructura de la página web.
CSS3: Estilos visuales para una interfaz limpia y moderna.
JavaScript: Lógica principal para agregar nombres, mostrar la lista y realizar el sorteo.
Git & GitHub: Control de versiones y alojamiento del proyecto.

Paso a Paso del Desarrollo
1. Configuración del Proyecto
Inicialización de Git: Se creó un repositorio local usando git init.
Creación de archivos: Se crearon los archivos esenciales para el proyecto: index.html, style.css y app.js.
Conexión de archivos: Se vinculó el archivo style.css y app.js en el index.html para que la página pueda aplicar los estilos y la lógica de JavaScript.

2. Estructura HTML y Estilos CSS
Estructura de la página: Se usaron etiquetas semánticas como <header>, <section> y <footer> para organizar el contenido.
Organización de assets: Se creó una carpeta assets para las imágenes, asegurando que los enlaces en el HTML apunten a la ruta correcta (assets/nombre-del-archivo.png).
Estilos base: Se definieron estilos iniciales en style.css para el encabezado y el cuerpo de la página.
Diseño responsivo: Se utilizó Flexbox y media queries (@media) con porcentajes (%) para garantizar que la interfaz se adapte a diferentes tamaños de pantalla, desde dispositivos móviles hasta escritorios.

3. Lógica con JavaScript
Array para nombres: Se declaró una variable de tipo array global llamada amigos para almacenar los nombres de los participantes.
Función agregarAmigo():
Captura el valor del campo de entrada.
Valida que el campo no esté vacío.
Agrega el nombre al array amigos usando el método .push().
Limpia el campo de texto.
Llama a la función mostrarAmigosEnLista() para actualizar la interfaz.
Función mostrarAmigosEnLista():
Selecciona la lista <ul> en el HTML.
Limpia su contenido con innerHTML = '' para evitar duplicados.
Itera sobre el array amigos y crea un elemento <li> por cada nombre.
Añade cada <li> a la lista HTML.

Función sortear():

Valida que el array amigos no esté vacío.
Genera un índice aleatorio usando Math.random() y Math.floor().
Obtiene el nombre correspondiente del array.
Muestra el resultado del sorteo en la página.

4. Control de Versiones con Git
Git add: Se usó git add . para preparar todos los archivos para el "commit".
Git commit: Se guardaron los cambios con mensajes descriptivos, como git commit -m "feat: Adicionar lógica para sorteio".
Git push: Se subieron los cambios al repositorio remoto en GitHub usando git push -u origin main.

Cómo Usar la Aplicación
Clona el repositorio en tu máquina local.
Abre el archivo index.html en tu navegador.
Ingresa los nombres de los participantes y haz clic en "Añadir".
Una vez que todos los nombres estén en la lista, haz clic en "Sortear amigo" para ver el resultado.
