# Segundo-Parcial-Des-App-Web
🏍️ MotoSport

MotoSport es una aplicación web enfocada en la administración y visualización de una tienda de motos de diferentes cilindrajes, diseñada para ofrecer una experiencia moderna, dinámica y responsiva.

La plataforma permite gestionar productos, visualizar inventario y navegar entre diferentes módulos mediante una interfaz intuitiva construida con componentes reutilizables, operaciones CRUD simuladas y vistas dinámicas. 🚀

El sistema está orientado a fortalecer conceptos de desarrollo frontend utilizando una arquitectura modular, navegación dinámica y diseño adaptable para diferentes dispositivos.

⚠️ Aviso de Seguridad

Este proyecto implementa un sistema de autenticación básica utilizando información almacenada en archivos JSON locales.

⚠️ IMPORTANTE:
Este método es únicamente con fines académicos y educativos.
NO representa un sistema seguro para aplicaciones reales.

🔒 Razones
Las credenciales están visibles en archivos locales.
No existe autenticación en servidor.
No se implementa cifrado de contraseñas.
No se utilizan tokens JWT ni sesiones reales.
La validación puede ser manipulada desde el navegador.
🧩 Arquitectura Modular y Componentes

La aplicación está organizada utilizando una estructura escalable y modular, separando responsabilidades en carpetas independientes:

📁 components/ → Componentes reutilizables
📁 views/ → Vistas principales
📁 router/ → Configuración de rutas
📁 services/ → Consumo de datos y lógica
📁 assets/ → Imágenes, estilos e íconos

⚡ Componentes Reutilizables

La aplicación incorpora componentes reutilizables y dinámicos para mantener una estructura limpia y mantenible.

🔹 NavbarComponent

Encabezado principal con:

Logo de MotoSport 🏍️
Nombre del negocio
Opciones de navegación
Diseño responsive
🔹 SidebarComponent

Menú lateral persistente con:

Navegación entre rutas
Íconos interactivos
Acceso rápido a módulos
🔹 FooterComponent

Pie de página con:

Derechos reservados
Información institucional
Redes sociales
🔹 ProductCardComponent

Tarjeta individual para visualizar:

Imagen de la moto 📸
Nombre 🏷️
Cilindraje 🏍️
Precio 💲
Botón de detalles
🔐 Vista de Inicio de Sesión (LoginView)

El sistema incluye una vista de autenticación moderna y responsiva.

✨ Características

✅ Validación de usuarios desde usuarios.json
✅ Alertas visuales para errores de acceso
✅ Verificación de campos obligatorios
✅ Diseño adaptable a dispositivos móviles
✅ Redirección automática al Dashboard

🖥️ Dashboard Principal

El Dashboard funciona como el núcleo principal de navegación de la aplicación.

🚀 Incluye
Navbar superior fijo
Sidebar persistente
Área dinámica de contenido
Navegación sin recargas usando rutas dinámicas
Íconos visuales en cada módulo
Diseño moderno y organizado
📦 Gestión de Productos (CRUD)

La vista ProductView permite administrar el inventario de motos mediante operaciones CRUD simuladas.

⚙️ Funcionalidades

✅ Listar motos disponibles
✅ Registrar nuevas motos
✅ Editar información del inventario
✅ Eliminar productos
✅ Visualizar detalles completos

Los productos son cargados desde:

📄 products.json

Y posteriormente almacenados temporalmente en:

💾 LocalStorage

Cada moto incluye información como:

Marca
Modelo
Cilindraje
Precio
Imagen
Descripción
🎨 Diseño y Experiencia Visual

La interfaz está diseñada para brindar una experiencia visual moderna, limpia y profesional.

🖌️ Buenas Prácticas Aplicadas

✨ Diseño responsive
✨ Uso de Flexbox y Grid
✨ Paleta de colores personalizada
✨ Íconos interactivos
✨ Sombras y efectos visuales
✨ Espaciados consistentes
✨ Tipografía uniforme
✨ Efectos hover y transiciones suaves

🌐 Navegación y Rutas

El sistema utiliza rutas dinámicas para gestionar la navegación entre vistas.

📌 Rutas Implementadas
/login
/dashboard
/dashboard/productos
/dashboard/clientes

El componente principal actúa como punto de entrada cargando dinámicamente cada vista del sistema.

🚀 Objetivo del Proyecto

Desarrollar una aplicación web moderna, modular y responsiva que permita fortalecer conocimientos en:

💻 Desarrollo Frontend
🧩 Componentes reutilizables
🛣️ Navegación dinámica
📦 CRUD de productos
🎨 Diseño responsive
👥 Trabajo colaborativo con Git y GitHub
