# 🛒 Gestión de Productos (CRUD con JSON Server)

Este proyecto es una aplicación web que permite **gestionar productos** mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Utiliza `json-server` como backend simulado y JavaScript puro para la lógica del frontend.

## 🚀 Tecnologías Usadas

- HTML, CSS y JavaScript
- [JSON Server](https://github.com/typicode/json-server)

## 📦 Estructura del Proyecto

/gestor-productos
├── db.json # Base de datos simulada (JSON Server)
├── index.html # Interfaz de usuario
├── style.css # Estilos básicos
├── gestion_api.js # Lógica principal (fetch API)
└── README.md # Este archivo



---

## 🛠️ Funcionalidades

- Ver lista de productos desde `db.json`
- Agregar producto (sin necesidad de escribir el ID)
- Editar productos cargándolos al formulario
- Eliminar productos por ID
- Validación de campos antes de guardar

---

## 🧰 Instalación de JSON Server en Windows

### 1. Instalar Node.js

- Ir a: [https://nodejs.org/](https://nodejs.org/)
- Descargar la versión LTS
- Instalar con configuración por defecto

Verificar instalación con:

```bash
node -v
npm -v
```

### 1. Instalar JSON Server (si no lo tienes)

```bash
npm install -g json-server
```


### 2. Iniciar el servidor
```
npx json-server --watch db.json --port 3000
```

### 💻 Cómo usar la aplicación
- Inicia el servidor con JSON Server.
- Abre index.html en tu navegador (puedes usar Live Server en VS Code).
- Usa el formulario para agregar productos (nombre y precio).
- Verás los productos listados con sus IDs generados automáticamente.
- Puedes editar o eliminar productos usando los botones correspondientes.