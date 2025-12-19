# WEBGIS

Aplikasi Web GIS ini dikembangkan untuk menampilkan informasi spasial Provinsi Maluku Utara menggunakan Laravel sebagai backend dan Leaflet sebagai frontend. Data spasial diolah menggunakan QGIS dan disajikan dalam format GeoJSON sehingga dapat ditampilkan secara interaktif melalui web browser.

```sh
docker compose up --build
```

### Database

Jika ingin cek database, di sini.

```sh
docker compose exec postgres psql -U webgis -d webgi
\dt
select * from location;
```
