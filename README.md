# WEBGIS

Proyek ini bertujuan untuk membangun sebuah Web GIS sederhana yang menampilkan dan mengelola data spasial wilayah Provinsi Maluku Utara. Sistem dikembangkan menggunakan Laravel sebagai backend dan Leaflet.js sebagai library pemetaan interaktif.

Web GIS ini mampu menampilkan peta dasar (OpenStreetMap), layer hasil digitasi dan ekspor dari QGIS, serta menyediakan fitur input data lokasi secara langsung melalui peta. Pengguna dapat menambahkan titik lokasi dengan cara mengklik peta, kemudian menyimpan informasi koordinat (latitude dan longitude) beserta atribut pendukung ke dalam basis data PostgreSQL.

Selain itu, aplikasi ini juga mendukung proses pengelolaan data (CRUD), yaitu menampilkan, menambahkan, dan menghapus data lokasi yang tersimpan, baik dalam bentuk tabel maupun marker pada peta. Dengan adanya sistem ini, pengguna dapat memahami konsep integrasi data spasial dan non-spasial serta penerapan Web GIS dalam pengelolaan informasi geografis berbasis web.

```sh
docker pull ketekperry/simple-webgis-malut:latest
docker run -p 8000:8000 ketekperry/simple-webgis-malut:latest
```

atau

```sh
docker compose up --build
```

### Database & Config

Jika ingin cek database, di sini.

```sh
docker compose exec postgres psql -U webgis -d webgi
\dt
select * from location;
```

Jika ingin migrate

```sh
docker exec -it laravel-webgis php artisan migrate
```
