const url = "http://localhost:3000/productos";

// Leer todos los productos GET

function obtenerProductos() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then(productos => {
      const lista = document.getElementById("product-list");
      lista.innerHTML = ""; // Limpiar la tabla

      productos.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
          <td>${producto.id}</td>
          <td>${producto.nombre}</td>
          <td>$${producto.precio}</td>
          <td>
            <button class="edit-btn" onclick="cargarProductoEnFormulario('${producto.id}')">Editar</button>
            <button class="delete-btn" onclick="eliminarProducto('${producto.id}')">Eliminar</button>
          </td>
        `;

        lista.appendChild(fila);
      });
    })
    .catch(error => {
      console.error("Error al obtener productos:", error.message);
    });
}


// Crear un nuevo producto POST
function agregarProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);

  if (!id || !nombre || isNaN(precio)) {
    alert("Por favor completa todos los campos correctamente.");
    return;
  }

  const nuevoProducto = { nombre, precio };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoProducto)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Producto agregado:", data);
      obtenerProductos(); 
      document.getElementById("product-form").reset();
    });
}

// // Editar un producto (por ID) PUT
function cargarProductoEnFormulario(id) {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(producto => {
      document.getElementById("nombre").value = producto.nombre;
      document.getElementById("precio").value = producto.precio;

      const boton = document.querySelector("#product-form button");
      boton.textContent = "Actualizar producto";
      boton.onclick = function (e) {
        e.preventDefault();
        actualizarProducto(producto.id);
      };
    });
}


//  Eliminar un producto DELETE
function actualizarProducto(id) {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);

  const actualizacion = { id, nombre, precio };

  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(actualizacion)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Producto actualizado:", data);
      obtenerProductos();
      document.getElementById("product-form").reset();

      // Restaurar el botón a modo "agregar"
      const boton = document.querySelector("#product-form button");
      boton.textContent = "Agregar producto";
      boton.onclick = function (e) {
        e.preventDefault();
        agregarProducto();
      };
    });
}

function eliminarProducto(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      console.log("Producto eliminado:", id);
      obtenerProductos();
    })
    .catch(error => console.log("Error al eliminar producto:", error));
}


function validarProducto(producto) {
  if (!producto.nombre || typeof producto.precio !== "number"){
    console.error("Datos del producto no validos.");
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", obtenerProductos);


