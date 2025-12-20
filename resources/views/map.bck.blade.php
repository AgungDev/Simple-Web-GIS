<!DOCTYPE html>
<html>

<head>
    <title>Input Data Web GIS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map {
            height: 400px;
        }
    </style>

</head>

<body>

    <div class="container mt-4">
        <h3 class="mb-3">Web GIS Lokasi Penting Maluku Utara</h3>

        <div class="row">
            <div class="col-md-8">
                <div id="map" class="border"></div>
            </div>

            <div class="col-md-4">
                <form id="formLokasi">
                    <div class="mb-2">
                        <label class="form-label">Nama Lokasi</label>
                        <input type="text" id="nama" class="form-control" required>
                    </div>

                    <div class="mb-2">
                        <label class="form-label">Latitude</label>
                        <input type="text" id="lat" class="form-control" readonly>
                    </div>

                    <div class="mb-2">
                        <label class="form-label">Longitude</label>
                        <input type="text" id="lng" class="form-control" readonly>
                    </div>

                    <button class="btn btn-primary w-100">Simpan Lokasi</button>
                </form>
            </div>
        </div>

        <hr>

        <h5>Data Lokasi</h5>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody id="dataLokasi"></tbody>
        </table>
    </div>


    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        const map = L.map('map').setView([0.8, 127.4], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
            .addTo(map);

        let markerTemp = null;

        // klik map → isi koordinat
        map.on('click', e => {
            document.getElementById('lat').value = e.latlng.lat;
            document.getElementById('lng').value = e.latlng.lng;

            if (markerTemp) map.removeLayer(markerTemp);
            markerTemp = L.marker(e.latlng).addTo(map);
        });

        // load data
        function loadData() {
            fetch('/locations')
                .then(r => r.json())
                .then(data => {
                    document.getElementById('dataLokasi').innerHTML = '';
                    data.forEach(d => {
                        L.marker([d.latitude, d.longitude])
                            .bindPopup(d.nama)
                            .addTo(map);

                        document.getElementById('dataLokasi').innerHTML += `
        <tr>
          <td>${d.nama}</td>
          <td>${d.latitude}</td>
          <td>${d.longitude}</td>
          <td>
            <button class="btn btn-danger btn-sm"
              onclick="hapus(${d.id})">Hapus</button>
          </td>
        </tr>
      `;
                    });
                });
        }
        loadData();

        // simpan
        document.getElementById('formLokasi').onsubmit = e => {
            e.preventDefault();

            fetch('/locations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({
                    nama: nama.value,
                    latitude: lat.value,
                    longitude: lng.value
                })
            }).then(() => location.reload());
        }

        // hapus
        function hapus(id) {
            fetch(`/locations/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }
            }).then(() => location.reload());
        }
    </script>


</body>

</html>