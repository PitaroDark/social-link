
# Social Link

Es una red social hecha en node js y react, utilizando como base de datos mongodb y tambien es notable la documentacion del mismo, se puede ver que tiene charlas, publicaciones, usuarios, comentarions, reacciones, y mucho mas
## Variables de Entorno

Para correr este programa, necesitas tener un archivo .env con las variables que se muestran a continuacion

`API_KEY`

`ANOTHER_API_KEY`


## Instalación

Es tecnologia basada en javascript, por ende se utiliza Node Package Manager (npm)

### Base de datos

Para comenzar, primero debemos tener la base de datos, en este caso, utilizamos docker para ahorrarnos el tema de mongodb

### Backend

Por otro lado, tenemos que instalar las dependencias del lado del back y con eso colocamos los comandos

```bash
  cd social-link
  cd backend
  npm install
```

### Frontend

Finalmente, hacemos lo mismo con la parte del front donde simplemente es estar en la carpeta y colocar los comandos

```bash
  cd ..
  cd social-link
  cd frontend
  npm install
```

### Docker

En caso de utilizar docker, simplemente es colocar los parametros en el archivo y tener instalado docker para colocar los comandos

```bash
  cd social-link
  docker compose pull
```
## Ejecutarlo localmente

Estar en el directorio y haber instalado todas las dependencias como se indico anteriormente e indicar bien que puertos seran usados

Ir al directorio

```bash
  cd social-link
```

Iniciar el back

```bash
  cd backend
  npm run start
```

Iniciar el front

```bash
  cd frontend
  npm run start
```

### Docker

En caso de utilizar docker, simplemente es colocar los parametros en el archivo y tener instalado docker para colocar los comandos

```bash
  cd social-link
  docker compose up
```
## Authors

- [@PitaroDark](https://github.com/PitaroDark/)

