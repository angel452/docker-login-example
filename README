# 🐳 Simple Login App - Fullstack Dockerized

Este es un proyecto fullstack que implementa un sistema de autenticación básica (registro, login, y gestión de usuarios) utilizando:

- **Frontend:** Angular
- **Backend:** NestJS
- **Base de datos:** MySQL con Prisma ORM
- **Contenedores:** Docker + Docker Compose

---

## 🚀 ¿Qué hace este proyecto?

Un simple sistema de login para practicar despliegue con Docker. Tiene:

- Registro de usuario (nombre, email, contraseña)
- Login de usuario
- Vista de "Home" después de login
- Modal que lista todos los usuarios registrados
- Posibilidad de eliminar usuarios (CRUD básico)

---

## 🖼️ Capturas del Sistema

| Descripción | Imagen |
|------------|--------|
| Página de registro | ![SignUp](Images/signup.png) |
| Página de login | ![SignIn](Images/signin.png) |
| Modal con usuarios (CRUD) | ![UsersModal](Images/users-modal.png) |

---

## ⚙️ Cómo correr el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/angel452/docker-login-example
cd docker-login-example
```
2. Crea los archivos .env respectivos para cada proyecto (puedes copiar los ejemplos de .env.example):
- **Raíz**: `/.env`
```env
# Variables de entorno para el frontend
REACT_APP_API_URL=http://localhost:3000
```

- **Backend**: `backend/.env`
```env
MYSQL_DATABASE=mydb
MYSQL_USER=myuser
MYSQL_PASSWORD=mypass
MYSQL_ROOT_PASSWORD=rootpass
```

- **Frontend**: `frontend/src/environments/environment.ts` y `frontend/src/environments/environment.prod.ts`
```typescript
// frontend/src/environments/environment.ts
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
};

// frontend/src/environments/environment.prod.ts
export const environment = {
    production: true,
    //apiUrl: 'https://api.miapp.com',
    apiUrl: 'http://localhost:3000',
};
```

3. Ejecuta los contenedores:
```bash
docker compose build
docker compose up -d
```

4. Abre tu navegador y accede a las siguientes URLs:
- Frontend: http://localhost:4000
- Backend API: http://localhost:3000

---

## 🧪 Tecnologías Usadas

- Angular 17
- NestJS
- Prisma ORM
- MySQL
- Docker / Docker Compose


--- 
## 🧑‍💻 Autor
Desarrollado por Angel Loayza (angel452)
