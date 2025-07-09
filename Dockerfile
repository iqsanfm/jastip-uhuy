# --- Tahap 1: Build Aplikasi React ---
# Menggunakan image Node.js versi 20 sebagai dasar untuk membangun proyek
FROM node:20-alpine AS build

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json terlebih dahulu
# Ini memanfaatkan cache Docker agar tidak mengulang 'npm install' jika tidak ada perubahan dependensi
COPY package*.json ./

# Menginstal semua dependensi proyek
RUN npm install

# Menyalin sisa file proyek ke dalam container
COPY . .

# Menjalankan skrip build untuk membuat file statis yang siap di-deploy
RUN npm run build


# --- Tahap 2: Sajikan Aplikasi dengan Nginx ---
# Menggunakan image Nginx yang sangat ringan sebagai web server
FROM nginx:stable-alpine

# Menyalin hasil build dari tahap pertama ke direktori web server Nginx
# Folder 'build' adalah output standar dari 'create-react-app'
COPY --from=build /app/dist /usr/share/nginx/html

# Memberitahu Docker bahwa container akan mengekspos port 80
EXPOSE 80

# Perintah default untuk menjalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]