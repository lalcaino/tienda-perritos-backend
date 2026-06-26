# Tienda Perritos - Backend 🐶

**Curso:** INTRODUCCION A HERRAMIENTAS DEVOPS_801D  
**Integrantes:** Lucas Alcaino - Diego Miranda  
**Asignatura:** ISY1101  

## Descripción
Backend de la Tienda de Alimentos para Perritos. API REST desarrollada con Node.js y Express que gestiona productos mediante un CRUD completo. Se conecta a una base de datos MySQL desplegada en Amazon ECS.

## Tecnologías
- Node.js / Express
- MySQL2
- Docker
- Amazon ECS (Fargate)
- Amazon ECR
- GitHub Actions (CI/CD)

## Arquitectura
Frontend (Nginx) → Backend (puerto 3001) → MySQL (puerto 3306)

## Endpoints disponibles
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/productos | Obtener todos los productos |
| GET | /api/productos/:id | Obtener producto por ID |
| POST | /api/productos | Crear nuevo producto |
| PUT | /api/productos/:id | Actualizar producto |
| DELETE | /api/productos/:id | Eliminar producto |
| GET | /api/health | Health check del servidor |

## Variables de entorno
| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor | `3001` |
| `DB_HOST` | IP o host de la base de datos | `172.31.20.171` |
| `DB_USER` | Usuario MySQL | `root` |
| `DB_PASSWORD` | Contraseña MySQL | `admin123` |
| `DB_NAME` | Nombre de la base de datos | `tienda_perritos` |
| `DB_PORT` | Puerto MySQL | `3306` |

## Pipeline CI/CD
El pipeline está definido en `.github/workflows/deploy.yml` y se ejecuta automáticamente en cada push a `main`.

### Pasos del pipeline:
1. **Checkout** del código fuente
2. **Configuración** de credenciales AWS
3. **Login** a Amazon ECR
4. **Build y Push** de la imagen Docker a ECR
5. **Deploy** automático al servicio ECS `backend`

## Cómo ejecutar localmente
```bash
docker build -t tienda-perritos-backend .
docker run -p 3001:3001 \
  -e DB_HOST=localhost \
  -e DB_USER=root \
  -e DB_PASSWORD=admin123 \
  -e DB_NAME=tienda_perritos \
  tienda-perritos-backend
```

## Estructura del proyecto
backend/

├── index.js            # Servidor Express y endpoints

├── package.json        # Dependencias

├── Dockerfile          # Imagen Docker

└── .github/

└── workflows/

└── deploy.yml  # Pipeline CI/CD
