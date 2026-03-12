# 🐉 Dragon Ball Explorer App

![Banner Principal](./assets/pagina%20de%20planeta%20tierra%201.png)

Una aplicación web interactiva desarrollada con **Next.js**, **React** y **Tailwind CSS**. Este proyecto consume la [API oficial de Dragon Ball](https://web.dragonball-api.com/documentation) para ofrecer una experiencia inmersiva explorando personajes, planetas, transformaciones y elementos icónicos del universo de Dragon Ball.

## 🚀 Características Principales

- **Exploración del Universo:** Descubre y visualiza información detallada de los Guerreros Z, planetas y razas.
- **Buscador Integrado:** Encuentra rápidamente a tu personaje favorito o planeta mediante una barra de búsqueda centrada.
- **Modales e Interacciones:** Interfaces detalladas a través de modales para líneas evolutivas y características de personajes y planetas.
- **Autenticación (Supabase):** Formularios de inicio de sesión y registro para usuarios.
- **Diseño Temático:** UI completamente orientada a Dragon Ball (Radares, Cámaras de gravedad, Control de Ki, etc.).

## 🛠️ Tecnologías

- **Frontend:** Next.js (App Router), React 19, Tailwind CSS v4.
- **Backend / Auth:** Supabase.
- **API Externa:** [Dragon Ball API](https://web.dragonball-api.com/).

---

## 📸 Capturas de Pantalla

### 🌍 Planeta Tierra (Inicio)
![Planeta Tierra 2](./assets/pagina%20de%20planeta%20tierra%202.png)
![Planeta Tierra 3](./assets/pagina%20de%20planeta%20tierra%203.png)

### 🪐 Exploración de Planetas
Visualiza los planetas, usa filtros personalizados e interactúa con modales de información:
![Planetas y Filtros](./assets/planetas%204.png)
![Filtro de Planetas](./assets/funcionabilidad%20del%20filtro%20%20planetas%204.1.png)
![Modal de Planeta](./assets/modal%20planeta%204.png)

### 🥋 Personajes y Guerreros Z
Explora el catálogo de personajes, sus líneas evolutivas y su origen planetario:
![Página de Personajes](./assets/pages%20de%20personajes%205.png)
![Modal de Personajes](./assets/modal%20de%20personajes%205.1.png)
![Modal de Línea Evolutiva](./assets/modal%20de%20linea%20evolutiva%205.2.png)
![Modal Planeta-Personaje](./assets/modal%20de%20planeta%20personajes%204.2.png)

### 🔥 Transformaciones y Entrenamiento
Conoce las fases del Super Saiyajin, fusiones y el control del Ki:
![Super Saiyajin](./assets/Super%20Saiyajin%209.png)
![Arte de la Fusión](./assets/arte%20de%20la%20fusion%208.png)
![Control de Ki](./assets/pagina%20de%20control%20de%20ki%207.png)

### 🛸 Tecnología y Objetos Clave
![Radar del Dragón](./assets/pagina%20de%20radar%20de%20dragon%206.png)
![Cámara de Gravedad](./assets/C%C3%A1mara%20de%20Gravedad%2010.png)
![Capsule Corp](./assets/CAPSULE%20CORP%2012.png)
![Detalles de Capsule Corp](./assets/modal%20de%20detalle%20de%20CAPSULE%20CORP.png)

### 🔐 Autenticación
Sistema integrado de Registro e Inicio de Sesión:
![Login](./assets/login%2011.png)
![Register](./assets/register%2011.png)

### 📄 Páginas Legales e Informativas
Secciones de información legal, términos y políticas de uso del proyecto:
![Términos de Servicio](./assets/terminos.png)
![Política de Privacidad](./assets/privacidad.png)
![Política de Cookies](./assets/cookies.png)

---

## 📋 Lista de Tareas (Roadmap) Original y Avances

- [x] Consumir la API de Dragon Ball.
- [x] Crear componentes: Navbar y Footer.
- [x] Implementar componente de Barra de Búsqueda y posicionarlo en el medio.
- [x] Renderizado principal de las páginas con `<Cards />` del consumo de la API.
- [x] Crear páginas para cada categoría (Planetas, Tecnología, Super Saiyajin, etc.).
- [x] Ajustar colores (textos oscuros en las nuevas páginas, cookies y términos).
- [x] Crear y vincular las vistas/componentes de Login y Registro.
- [x] Incorporar el Login/Register en el Navbar para fácil acceso.
- [x] Finalizar el uso de **Supabase** para la autenticación, inicio de sesión y registro del usuario (listo).

---

## 💻 Instalación Local

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPO>
cd dragon-ball

# 2. Instalar las dependencias
npm install

# 3. Configurar variables de entorno (.env.local)
# Para Supabase, crea las variables requeridas por tu proyecto:
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# 4. Levantar el servidor de desarrollo
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página.