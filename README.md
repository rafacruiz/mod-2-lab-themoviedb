# 🎬 Ejercicio React – The Movie Database (TMDB)
Este proyecto consiste en el desarrollo de una aplicación en React que consume la API de The Movie Database (TMDB) para mostrar un listado de películas, acceder al detalle de cada una y permitir al usuario guardar películas favoritas utilizando Local Storage.

## 🧩 Objetivo del ejercicio
- Consumo de APIs externas
- Separación de responsabilidades (servicios, componentes, páginas)
- Transformación de datos
- Navegación entre vistas
- Persistencia de información en el navegador (local storage)

## 🚀 Funcionalidades
1. Servicio de comunicación con TMDB
Implementar un servicio que se comunique con la API de TMDB.
El servicio debe permitir:
- Obtener un listado de películas.
- Obtener el detalle de una película a partir de su identificador.

2. Transformación del modelo de datos
La respuesta original de TMDB debe transformarse para trabajar solo con los campos necesarios:
- id
- nombre / título
- poster
- descripción
- categorías / géneros
- Evitar usar directamente el modelo devuelto por la API en los componentes.

3. Listado de películas
Mostrar las películas en la página principal en formato grid.
Cada tarjeta de película debe mostrar al menos:
- Póster
- Título

4. Página de detalle
Al hacer clic en una película del listado:
- Navegar a una página de detalle.
- Mostrar información ampliada de la película seleccionada.

5. Gestión de favoritos
Permitir marcar/desmarcar películas como favoritas.
Las películas favoritas deben guardarse en Local Storage.
Combinar información de TMDB con información propia (estado de favorito).
Los favoritos deben mantenerse aunque se recargue la página.