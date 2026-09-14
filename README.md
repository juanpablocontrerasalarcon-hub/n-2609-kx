# Fabi Eurotrip

Página privada con las fotos del viaje. Proyecto independiente, sin relación con ningún otro repositorio.

## Cómo publicarla (una sola vez)

1. En GitHub, crear un repositorio **nuevo**, público, con un nombre poco adivinable.
2. Subir todo el contenido de esta carpeta a la raíz del repositorio
   (el botón *Add file → Upload files* acepta arrastrar la carpeta completa).
3. Entrar a **Settings → Pages**, en *Source* elegir la rama `main` y la carpeta `/ (root)`, y guardar.
4. Esperar uno o dos minutos. El link queda así:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

El archivo `robots.txt` y las etiquetas del `index.html` piden a los buscadores que no indexen la página,
así que no va a aparecer en Google. Aun así, cualquiera que tenga el link exacto puede abrirla.

## Cómo agregar fotos después

1. Subir las imágenes nuevas a la carpeta `fotos/`.
2. Reemplazar `datos.js` por la versión actualizada.

Nada más. `index.html` no se toca nunca.

## Qué hace cada archivo

| Archivo      | Para qué sirve                                              |
|--------------|-------------------------------------------------------------|
| `index.html` | El diseño y el funcionamiento. No se edita.                 |
| `datos.js`   | El contenido: qué foto va dónde y con qué texto.            |
| `mapas.js`   | Los contornos de los mapas. Generado automáticamente.       |
| `fotos/`     | Las imágenes.                                               |
| `robots.txt` | Le pide a los buscadores que no indexen la página.          |
| `.nojekyll`  | Hace que GitHub Pages sirva los archivos tal cual.          |

## Antes de subir fotos nuevas

Conviene reducirlas: lado más largo de 1250 píxeles y calidad 75.
Una foto de 4 MB del celular pasa a unos 150 KB y en pantalla se ve igual.
