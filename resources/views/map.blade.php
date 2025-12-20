<!DOCTYPE html>
<html>

<head>
    <title>Input Data Web GIS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="stylesheet" href="{{ asset('css/leaflet.css') }}">
    <link rel="stylesheet" href="{{ asset('css/L.Control.Layers.Tree.css') }}">
    <link rel="stylesheet" href="{{ asset('css/qgis2web.css') }}">
    <link rel="stylesheet" href="{{ asset('css/fontawesome-all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/leaflet.photon.css') }}">
    <style>
        #map {
            height: 400px;
        }

        html,
        body {
            height: auto;
            overflow-y: auto;
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

    <!-- Scirpt -->
    <script src="{{ asset('js/qgis2web_expressions.js') }}"></script>
    <script src="{{ asset('js/leaflet.js') }}"></script>
    <script src="{{ asset('js/L.Control.Layers.Tree.min.js') }}"></script>
    <script src="{{ asset('js/leaflet.rotatedMarker.js') }}"></script>
    <script src="{{ asset('js/leaflet.pattern.js') }}"></script>
    <script src="{{ asset('js/leaflet-hash.js') }}"></script>
    <script src="{{ asset('js/Autolinker.min.js') }}"></script>
    <script src="{{ asset('js/rbush.min.js') }}"></script>
    <script src="{{ asset('js/labelgun.min.js') }}"></script>
    <script src="{{ asset('js/labels.js') }}"></script>
    <script src="{{ asset('js/leaflet.photon.js') }}"></script>
    <script src="{{ asset('data/GeologyMalukuUtara_1.js') }}"></script>
    <script src="{{ asset('data/ADMINISTRASIKECAMATAN_AR_50K_2.js') }}"></script>
    <script src="{{ asset('data/AGRIKEBUN_AR_50K_3.js') }}"></script>
    <script src="{{ asset('data/AIRPORT_AR_50K_4.js') }}"></script>
    <script src="{{ asset('data/AIRPORT_PT_50K_5.js') }}"></script>
    <script src="{{ asset('data/BANGUNAN_AR_50K_6.js') }}"></script>
    <script src="{{ asset('data/BANGUNAN_PT_50K_7.js') }}"></script>
    <script src="{{ asset('data/CAGARBUDAYA_PT_50K_8.js') }}"></script>
    <script src="{{ asset('data/DANAU_AR_50K_9.js') }}"></script>
    <script src="{{ asset('data/DERMAGA_PT_50K_10.js') }}"></script>
    <script src="{{ asset('data/GARISRPANTAI_LN_50K_11.js') }}"></script>
    <script src="{{ asset('data/JALAN_LN_50K_12.js') }}"></script>
    <script src="{{ asset('data/KESEHATAN_PT_50K_13.js') }}"></script>
    <script src="{{ asset('data/KONTUR_LN_50K_14.js') }}"></script>
    <script src="{{ asset('data/MAKAM_PT_50K_15.js') }}"></script>
    <script src="{{ asset('data/NIAGA_PT_50K_16.js') }}"></script>
    <script src="{{ asset('data/NONAGRIALANG_AR_50K_17.js') }}"></script>
    <script src="{{ asset('data/NONAGRIHUTANKERING_AR_50K_18.js') }}"></script>
    <script src="{{ asset('data/NONAGRISEMAKBELUKAR_AR_50K_19.js') }}"></script>
    <script src="{{ asset('data/PELABUHAN_PT_50K_20.js') }}"></script>
    <script src="{{ asset('data/PEMERINTAHAN_PT_50K_21.js') }}"></script>
    <script src="{{ asset('data/PENDIDIKAN_PT_50K_22.js') }}"></script>
    <script src="{{ asset('data/PILARBATAS_PT_50K_23.js') }}"></script>
    <script src="{{ asset('data/PUSKESMAS_PT_50K_24.js') }}"></script>
    <script src="{{ asset('data/RUMAHSAKIT_PT_50K_25.js') }}"></script>
    <script src="{{ asset('data/SARANAIBADAH_PT_50K_26.js') }}"></script>
    <script src="{{ asset('data/SUNGAI_AR_50K_27.js') }}"></script>
    <script src="{{ asset('data/SUNGAI_LN_50K_28.js') }}"></script>
    <script src="{{ asset('data/TOPONIMI_PT_50K_29.js') }}"></script>
    <script src="{{ asset('data/ADMINISTRASI_LN_50K_30.js') }}"></script>
    <script src="{{ asset('js/malutmap.js') }}"></script>
    <script>

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