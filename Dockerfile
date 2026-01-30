# Usamos una versión específica de Node
FROM node:24-alpine

# Crear usuario
RUN addgroup -g 1001 app && adduser -S -u 1001 -G app app

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y lock para instalar deps
COPY package*.json ./

# Dar permisos al usuario app
RUN chown -R app:app /app

# Cambiar de usuario ANTES de npm ci
USER app

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del proyecto
COPY --chown=app:app . .

# Exponemos el puerto de Vite
EXPOSE 5173

# Comando para arrancar Vite
CMD ["npm", "run", "dev"]