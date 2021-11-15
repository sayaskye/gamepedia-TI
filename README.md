# Gamepedia.

Hola, bienvenido a esta enciclopedia de videojuegos, aquí podrás encontrar la información mas relevante de cualquiera de los juegos que te interesen, datos relevantes de muchísimas paginas web, concentradas en una sola, desde fotos oficiales, especificaciones técnicas, score de Metacritic para juego y mucho mas.

¿Por qué desarrolle esta aplicación? 
Esta gamepedia fue realizada por motivo de una prueba técnica para una entrevista de trabajo, fue realizada en 4 días utilizando las siguientes herramientas.

 - [NextJS](https://nextjs.org/) como framework de [ReactJS](https://es.reactjs.org/).
 - [RAWG.io](https://rawg.io/apidocs) como API para obtener los datos.
 - [TailwindCSS](https://tailwindcss.com/) como framework para CSS.
 - [HeadlessUI](https://headlessui.dev/) como complemento para TailwindCSS.
 - [Zustand](https://github.com/pmndrs/zustand) como manejador de estado global.
 - [Swiper](https://swiperjs.com/) para presentación de imágenes en formato carrusel.
 - [Vercel](https://vercel.com/) para el deploy de la aplicación.
 Y absolutamente nada mas, el resto es todo manual.

Si te interesa probar la aplicación en producción, puedes hacerlo en este link [https://gamepedia-ti.vercel.app/](https://gamepedia-ti.vercel.app/)
Si quieres ejecutarlo en un entorno local, puedes hacerlo de la siguiente manera

    1- git clone https://github.com/sayaskye/gamepedia-TI.git
    2- cd gamepedia-TI
    3- npm install 
    4- npm run dev