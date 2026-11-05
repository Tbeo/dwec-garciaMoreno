# Tarea 6 · Objetos y arrays

**Autor:** [Tu nombre y apellidos] · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

> **Plantilla de la tarea 6.** Cómo usarla:
>
> 1. Copia esta carpeta en tu repositorio de DWEC y cámbiale el nombre a `tema06`.
> 2. `index.html` ya está maquetado: seis tarjetas, una por ejercicio. No cambies los `id` ni el `onclick` de los botones.
> 3. `js/app.js` trae una función por botón con `TODO`. Ya están hechas `comoTexto()`, `pintarProductos()` y casi todo el ejercicio 2: úsalas de modelo.
> 4. Todas las funciones con `function`: en esta tarea, sin funciones flecha.
> 5. Sustituye las imágenes de `capturas/` por las tuyas, **con el mismo nombre**.
> 6. Todo lo que va entre [corchetes] es un hueco: cámbialo por lo tuyo. Al terminar, borra este aviso.

[Una o dos líneas: qué hay en esta carpeta y cómo se ve. Por ejemplo: abrir la carpeta en VS Code, pulsar **Go Live** y probar los botones con la consola abierta (F12).]

## Capturas

### a) La página recién cargada

<img src="capturas/a-pagina.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

[Qué se ve nada más cargar: tu nombre, los colores, la tabla de productos y las ciudades.]
En esta página se puede ver mi nombre en un navbar junto con la tarea a la que corresponde. Cada uno de los bloques corresponde a un ejercicio en concreto: En el primer bloque tengo mi ficha de alumno. En el segundo un array de colores en el que puedo añadir y quitar el primero o el último. En el tercero un array objetos producto con distintos atributos que puedo ordenar por precio, buscar entre ellos por nombre o mostrar los que valen mas de 50 €. En el cuarto puedo añadir valores numéricos (notas) que puedo meter en otro array o borrar a gusto y en el quinto un map de numeros con los que juego con ellos.

### b) Ejercicios 1 y 2: la ficha y los colores

<img src="capturas/b-ej1-ej2.png" alt="La ficha de estudiante y la lista de colores" width="600">

[La ficha después de cumplir años y la lista de colores después de añadir y quitar alguno. Qué método has usado para cada cosa.]
Muestro la lista habiéndome añadido algunos años y añadiendo y quitando algunos colores. En el ejercicio 1 he utilizado el metodo delete para borrar la propiedad entera, no solo el valor, por eso sale undefined cuando lo muestro. Utilizo append para añadir al final en el array de colores y pop y shift para quitar el ultimo y el primero respectivamente.

### c) Ejercicio 3: el catálogo ordenado por precio

![La tabla de productos ordenada por precio](capturas/c-ej3-ordenado.png)

Mi funcion de comparación realmente crea una copia de la lista de productos y la ordena mediante la función sort. Esta función ordena según una función anónima que defino, establece que dados dos elementos: a y b decido cuál va primero. Funciona dandole un valor numérico, negativo si "a" va el primero o positivo si "b" va el primero.

### d) Ejercicio 4: las notas y la media

![Las notas con su color y la media](capturas/d-ej4-notas.png)

[Cinco notas como mínimo, aprobadas y suspensas, con su media.]
Añado los números uno a uno y no me permite escribir sino es texto, realmente utilizo funciones como push para meterlo en el array y reduce para calcular la media. Cuando tienen un valor por debajo de 4 les pongo un badge de color rojo y si es 5 o superior verde, de las clases predefinidas de bootstrap5.

### e) Ejercicio 5: los tres métodos seguidos

![El resultado de filter, map y reduce encadenados](capturas/e-ej5-cadena.png)

[Qué hace cada paso y qué número sale al final.]
Realmente, en los tres seguidos se ejecuta la funcionalidad de los otros 3 métodos pero sobre el resultado de los anteriores. Primero, aplico la función filter, que me devuelve los elementos a un nuevo array que cumplen la especificación que les doy (que el resto de dividir por 2 sea 0, osea, que sean pares). Después, al resultado de este nuevo array utilizo la función map que devuelve el mismo array que le paso pero con una operacion / función aplicada a cada elemento, que es multiplicar por 2 el valor de cada elemento del array. Despues a ese array resultado le aplico otra función que es sumar cada valor del array en una variable y la muestro. Una vez aplicada cada función modifico cada parte del div con id = salida5 y añado un div nuevo correspondiente a una linea nueva con cada parte del resultado de esas funciones.


### f) Ejercicio 6: después de splice y de buscar una ciudad

![Las ciudades después de splice y una búsqueda](capturas/f-ej6-splice.png)

[Qué ciudades ha quitado splice, en qué posición ha quedado la que has buscado y por qué.]

## Reflexión

[De 5 a 8 líneas: ¿qué métodos de los que has usado cambian el array original y cuáles devuelven uno nuevo? Pon como ejemplo lo que pasa en el ejercicio 6 con slice y con splice, y explica por qué en el ejercicio 3 ordenas una copia.]

## Fuentes

- [Título de la página](https://enlace-a-la-fuente)

## Uso de IA

[Si has usado IA: qué herramienta, para qué y qué hiciste después con su respuesta. Si no la has usado, borra este apartado.]
He utilizado Claude, concretamente Opus 5.5 para poder comprobar los fallos que iba teniendo en los métodos una vez que los había hecho a mi manera, comprobaba los errores y luego veía si necesitaba realizar algún cambio de los que me daba y qué sugerencias me hacía, pero siempre escribiendolo por mi cuenta y enterándome de qué estaba realizando. De forma general le he pasado la rúbica de la tarea y mi ejercicio para comprobar si se me había escapado algo de lo que había realizado y de si me faltaba algún TODO por borrar.