# Tarea 2. Navegadores, motores y mi primera página interactiva

**Autor:** Jorge García Moreno
**Asignatura:** Desarrollo Web Entornos Cliente · Tema 2

Sitio de dos páginas con Bootstrap: `index.html` (navegadores y motores) e `interaccion.html` (tres botones con JavaScript y trazas en la consola). Lo he probado con Live Server en [Chrome] y [Firefox].

## 1. Capturas

### a) index.html en el ordenador
![index.html en el ordenador](CapturaEdge.png)

[Se ve la página de navegadores con mi nombre en la navbar y la tabla de los cinco navegadores.]

### b) interaccion.html en modo dispositivo
![interaccion.html simulando un móvil](capturas/02-interaccion-movil.png)

[Vista de F12 → barra de dispositivos simulando un móvil: los botones se apilan y no hay scroll horizontal.]

### c) Consola con las trazas de los tres botones
![Consola con las trazas](capturas/03-consola.png)

[Aparecen el console.log de «Saludar», el console.error en rojo de «Simular un error» y el console.log del userAgent.]

### d) alert() de «¿Qué navegador soy?» en los dos navegadores
![alert en Chrome](capturas/04-alert-chrome.png)
![alert en Firefox](capturas/04-alert-firefox.png)

[Cada navegador muestra un userAgent distinto.]

### e) VS Code con Live Server
![VS Code con Live Server](capturas/05-vscode-liveserver.png)

[Carpeta tema02 abierta en VS Code y Live Server en marcha.]

## 2. Quién hace qué (botón «Saludar»)

- **HTML:** crea el botón con `<button type="button" onclick="saludar()">` y el atributo `onclick`, que indica qué función se ejecuta al pulsar. También enlaza `js/app.js` al final del `body`.
- **Bootstrap (CSS):** las clases `btn` y `btn-primary` le dan el color, el tamaño, los bordes redondeados y el efecto al pasar el ratón. No he escrito CSS propio.
- **JavaScript:** la función `saludar()` de `app.js` es la que hace algo: escribe una traza con `console.log()` y muestra un `alert()` con mi nombre.

Sin HTML no habría botón, sin Bootstrap sería un botón gris por defecto y sin JavaScript no pasaría nada al pulsarlo.

## 3. Comparación de los dos userAgent

**Chrome:**
`[pega aquí el userAgent que has obtenido]`

**Firefox:**
`[pega aquí el userAgent que has obtenido]`

[Escribe con tus palabras lo que reconoces: sistema operativo, versión del navegador, etc.] Palabras como `Mozilla`, `AppleWebKit` o `Safari` aparecen por herencia histórica: hace años, muchas webs enviaban contenido distinto según el navegador y solo servían la versión completa a «Mozilla» (Netscape). Para no quedarse fuera, los navegadores nuevos fueron copiando en su cadena los nombres de los anteriores. Chrome (motor Blink, derivado de WebKit) mantiene `AppleWebKit`, `KHTML, like Gecko` y `Safari` para que las webs lo traten como un navegador moderno. Firefox usa Gecko y conserva `Mozilla/5.0` y `Gecko/20100101`, pero no incluye `AppleWebKit` ni `Safari`. [Comenta si en tus resultados lo has comprobado.]

## 4. Fuentes consultadas

- [Apuntes y presentación del Tema 2 (campus virtual)]
- [Enlace real de la fuente 1 que hayas consultado]
- [Enlace real de la fuente 2 que hayas consultado]
- [Enlace de caniuse.com con la característica elegida (fecha de consulta: __/__/2026)]

## Uso de IA

He usado [Claude] para [entender cómo se conectan los botones con las funciones de app.js mediante onclick y para orientarme en la estructura del README]. Después [escribí y probé yo el código, lo adapté a mi proyecto y redacté con mis palabras las explicaciones y la comparación de los userAgent].