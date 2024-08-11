# Video Management Project

Este es un proyecto básico de gestión de videos desarrollado en TypeScript utilizando `ts-node`. El proyecto sigue una estructura modular con controladores, servicios, entidades y DTOs (Data Transfer Objects). La aplicación permite gestionar un repositorio de videos y obtener la lista completa de videos disponibles.

## Estructura del Proyecto

```plaintext
.
├── main.ts
├── modules
│   ├── controller
│   │   └── videos.controller.ts
│   ├── dto
│   │   ├── dtoEntrada
│   │   └── response
│   │       ├── dto
│   │       │   └── video.dto.response.ts
│   │       └── interface
│   │           └── video.interface.ts
│   ├── entities
│   │   └── video.entitie.ts
│   └── servicios
│       └── videos.service.ts
├── package.json
└── tsconfig.json
```

### Descripción de Carpetas y Archivos

- **main.ts**: Archivo de entrada principal que inicia la aplicación.
- **modules/controller/videos.controller.ts**: Controlador responsable de manejar las solicitudes relacionadas con los videos.
- **modules/dto**: 
  - **dtoEntrada**: DTOs utilizados para las entradas de datos.
  - **response**: 
    - **dto/video.dto.response.ts**: DTO utilizado para la respuesta de datos de video.
    - **interface/video.interface.ts**: Interfaz que define la estructura de los objetos de video en la respuesta.
- **modules/entities/video.entitie.ts**: Entidad que representa un video en el sistema.
- **modules/servicios/videos.service.ts**: Servicio que maneja la lógica de negocio relacionada con los videos.

## Requisitos Previos

- Node.js (versión 14 o superior)
- `ts-node` para ejecutar TypeScript directamente en Node.js

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/video-management-project.git
   cd video-management-project
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución

Puedes ejecutar el proyecto utilizando `ts-node` directamente. El archivo `main.ts` es el punto de entrada principal.

```bash
npx ts-node main.ts
```

Esto iniciará la aplicación y mostrará en consola la lista de nombres de videos disponibles en el repositorio.

## Uso

El proyecto simula un pequeño sistema de gestión de videos. El flujo principal es el siguiente:

1. **Repositorio de Videos**: Se define un repositorio de videos en el archivo `main.ts` con un arreglo de objetos `VideoEntity`.
2. **Servicio de Videos**: El `VideoService` se encarga de manejar la lógica de negocio, en este caso, simplemente devolver todos los videos.
3. **Controlador de Videos**: El `VideoController` interactúa con el servicio para gestionar las solicitudes, como obtener la lista de videos.

### Ejemplo de Salida

Al ejecutar el proyecto, se mostrará en la consola:

```bash
video 1
vide 2
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con la nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Añadir nueva funcionalidad'`.
4. Sube los cambios a tu repositorio: `git push origin nueva-funcionalidad`.
5. Abre un Pull Request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

