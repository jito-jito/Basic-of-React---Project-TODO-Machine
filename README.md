# WebpackReact
Adjunto en el repositorio encontrarás archivos y directorios para una configuración básica en webpack a utilizar para un proyecto en react.js

Además, con el animo de aportar a la comunidad te comparto un resumen de mi entendimiento sobre el tema...

##  ¿Que es webpack?

Babel para javascript, compiladores para sass stylus o less en css, linters para que quede bonito el código y porque no, quizá queremos optimizarlo comprimiendo lo que codeamos... 

Es muy común requerir una o más de una de las herramientas o tareas mencionadas anteriormente para incorporarlas en el desarrollo de nuestro proyecto, como podrás imaginar, incorporarlas requiere de configuraciones y procesos adicionales por el que deberá pasar nuestro código, lo que agrega complejidades adicionales para recibir un producto final.

Webpack es un gestor de paquetes de módulos, nos permite gestionar todas las herramientas mencionadas al inicio a través de un único proceso, entregándonos como resultado uno o más archivos dependiendo de la configuración añadida..

Para comprender como funciona este proceso debes conocer algunos de sus conceptos importantes:

**1. Entrada: **Webpack recibe uno o varios archivos de entrada para comenzar a trabajar con nuestro proyecto, además averiguará de qué otros módulos y bibliotecas depende ese punto de entrada.

**2. Cargadores(loaders):** De forma nativa, webpack solo entiende archivos de tipo JavaScript o JSON, los cargadores corresponden a dependencias que podemos añadir e incorporar a webpack para que este pueda entender otros tipos de archivos (html, sass/stylus, react, entre otros).

**3. Complementos(plugins): **Se utilizan para agregar tareas diferentes a webpack, entre ellas, optimizar código o inyectar variables de entorno.

**4. Salida:** Llegado a este punto obtenemos como resultado los archivos listo para nuestro entorno d e pruebas o producción.


**Listoo, ya tienes tu proyecto listo para usar.....**

*Aunque mi explicación es simple y resumida espero que pueda darle contexto a quienes están comenzando a aprender a utilizar la herramienta.*

Te dejo un enlace por si deseas profundizar más sobre webpack:

https://webpack.js.org/concepts/

### Loaders y plugins utilizados en la configuración:

#### babel 
Para trabajar con webpack archivos .js y .jsx:

>@babel/core @babel/preset-env @babel/preset-react babel-loader

#### html 
Para trabajar archivos html:

>html-loader html-webpack-plugin

#### css
para trabajar con archivos sass,less,stylus:

>mini-css-extract-plugin css-loader style-loader sass sass-loader stylus stylus-loader

#### optimización
Para optimizar el código de nuestros estilos y JavaScript :

>css-minimizer-webpack-plugin terser-webpack-plugin




