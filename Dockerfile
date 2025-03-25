# Use uma imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o container
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código da aplicação para dentro do container
COPY . .

# Exponha a porta que a aplicação Next.js irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
