# ############### Etapa 1: Construcción ###################
FROM node:20.17.0-bullseye-slim AS builder

WORKDIR /usr/src/app

# Dependencias necesarias para construir
# RUN apt-get update && apt-get install -y \
#     python3 \
#     make \
#     g++ \
#     libcairo2-dev \
#     libjpeg-dev \
#     libpango1.0-dev \
#     libgif-dev \
#     librsvg2-dev \
#     libpng-dev \
#     libssl1.1 \
#     openssl \
#     && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install
COPY . .

# Generar cliente Prisma (si usas Prisma)
RUN npx prisma generate

# Compilar el proyecto
RUN npm run build

# #################  Etapa 2: Imagen final #####################
FROM node:20-bullseye-slim

WORKDIR /usr/src/app

# Dependencias de runtime
RUN apt-get update && apt-get install -y \
    # procps \
    openssl \
    libssl1.1 \
    netcat-openbsd \
    # libcairo2-dev \
    # libjpeg-dev \
    # libpango1.0-dev \
    # libgif-dev \
    # librsvg2-dev \
    # libpng-dev \
    # python3 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copiar todo desde builder
COPY --from=builder /usr/src/app /usr/src/app

# Instalar solo dependencias necesarias para desarrollo
# RUN npm install

# NestJS CLI global
RUN npm install -g @nestjs/cli

EXPOSE 3000

# Modo desarrollo, cambiar a `node dist/main` en producción
CMD ["npm", "run", "start:dev"]
# CMD ["npm", "run", "dist/main"]
# CMD ["sh", "-c", "echo 'Esperando a MySQL...'; \
#   until nc -z mysql 3306; do sleep 2; done; \
#   echo 'Base de datos lista. Ejecutando migraciones...'; \
#   npx prisma migrate deploy; \
#   echo 'Iniciando backend...'; \
#   npm run start:dev"]
