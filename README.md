
# Proyecto Tienda 

En este proyecto quise demostrar una gama diferente de soluciones a problemas similares, desde un factory pattern, hasta un high order component.

La estructura del proyecto es la siguiente:

- src
	- behaviours
		- methods
		- constants
	- components
	- styles

Los behaviours son funciones que pueden servir en cualquier parte del programa, ya sean metodos o constantes.

Cabe recalcar que **todo funciona de manera dinamica**, tomando en cuenta las constantes introducidas.

Se usaron puros styled components, los cuales estan alojados en la carpeta **styles** y están separados por la misma separación de los componentes.

Se trato de seguir el principio de responsabilidad unica al momento de crear el proyecto, por eso la separación de este.

---

La implementación con firebase se hizo del lado de la autentificación, la cual recuerda tu sesión aun después de cerrar el app

---
Se hizo una configuración del proyecto desde 0, no se uso **create-react-app**

Si quieren correr el proyecto en local sigan estos pasos:

1) `npm install`
2) `npm run start`

Si lo quieren construir es con:

    npm run build
    
Ahora, si lo quieren ver corriendo en vivo, pueden entrar a la liga:

[https://laboratoria-9450f.web.app/](https://laboratoria-9450f.web.app/)

Espero les agrade, a mi me gusto bastante.

Nota: Se que no soy el mejor diseñador, pero estoy trabajando en eso
