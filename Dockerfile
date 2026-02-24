#Estágio1: Build Angular App
FROM node:22-alpine AS buildagendatelef

#define diretorio de trabalho
WORKDIR /app

#copia arquivos de dependencias
COPY package.json package-lock.json ./

#instala dependencias
RUN npm install 

#instala o restante
COPY . .

#Faz o build
RUN npm run build --configuration=production

#Estágio2: Servir a aplicação com Nginx
FROM nginx:alpine

#Copia os arquivos compilados do Estágio1 para o diretório do Nginx
COPY --from=0 /app/dist/agendaTelef /usr/share/nginx/html

#Expõe porta 80 para acessar a aplicação
EXPOSE 80
#O nginx já tem um comando de inicialização padrão, então não precisamos definir um CMD aqui. Ele irá servir os arquivos estáticos na porta 80.

