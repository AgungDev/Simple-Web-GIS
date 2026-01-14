<!DOCTYPE html>
<html>

<head>
    <title>Main Map</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{{ asset('css/leaflet.css') }}">
    <link rel="stylesheet" href="{{ asset('css/L.Control.Layers.Tree.css') }}">
    <link rel="stylesheet" href="{{ asset('css/qgis2web.css') }}">
    <link rel="stylesheet" href="{{ asset('css/fontawesome-all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/leaflet.photon.css') }}">
    <style>
        html,
        body {
            height: 100%;
            margin: 0;
        }

        #map {
            height: calc(100vh - 60px);
        }

        .app-header {
            height: 60px;
            display: flex;
            align-items: center;
            padding: 0 16px;
        }
    </style>
</head>

<body>

    <div class="app-header border-bottom">
        <h4 class="m-0">Web GIS Pemetaan Titik Rawan Bencana Alam di Kota Ternate, Provinsi Maluku Utara</h4>
        <a href="/administrasi" class="btn btn-outline-primary ms-auto">Administrasi</a> 
    </div>

    <div id="map"></div>

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
        // malutmap.js should initialize a global `map` using #map element
        if (typeof map === 'undefined') console.error('map is not defined (malutmap.js did not initialize)');

        function loadData() {
            fetch('/locations')
                .then(r => {
                    if (!r.ok) throw new Error('Network response was not ok');
                    return r.json();
                })
                .then(data => {
                    console.log('locations (main-map):', data);
                    data.forEach(d => {
                        const lat = parseFloat(d.latitude);
                        const lng = parseFloat(d.longitude);

                        let popupHtml = `<b>${d.nama}</b>`;
                        if (d.description) popupHtml += `<br>${d.description}`;
                        if (d.image) popupHtml += `<br><img src="/storage/${d.image}" style="max-width:200px;"/>`;

                        if (!isNaN(lat) && !isNaN(lng) && typeof map !== 'undefined') {
                            L.marker([lat, lng])
                                .bindPopup(popupHtml)
                                .addTo(map);
                        } else {
                            console.warn('Skipping marker, invalid coordinates for', d);
                        }
                    });
                })
                .catch(err => console.error('Failed to load locations:', err));
        }

        loadData();
    </script>

</body>

</html>