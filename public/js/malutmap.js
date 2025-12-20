var map = L.map("map", {
    zoomControl: false,
    maxZoom: 18,
    minZoom: 8,
}).fitBounds([
    [0.7785305144184995, 127.33737270868167],
    [0.820115729865204, 127.41510620327992],
]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix(
    '<a href="https://github.com/AgungDev/Simple-Web-GIS.git" target="_blank">AgungDev</a>'
);
var autolinker = new Autolinker({
    truncate: { length: 30, location: "smart" },
});
// remove popup's row if "visible-with-data"
function removeEmptyRowsFromPopupContent(content, feature) {
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    var rows = tempDiv.querySelectorAll("tr");
    for (var i = 0; i < rows.length; i++) {
        var td = rows[i].querySelector("td.visible-with-data");
        var key = td ? td.id : "";
        if (
            td &&
            td.classList.contains("visible-with-data") &&
            feature.properties[key] == null
        ) {
            rows[i].parentNode.removeChild(rows[i]);
        }
    }
    return tempDiv.innerHTML;
}
// modify popup if contains media
function addClassToPopupIfMedia(content, popup) {
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    var imgTd = tempDiv.querySelector("td img");
    if (imgTd) {
        var src = imgTd.getAttribute("src");
        if (/\.(jpg|jpeg|png|gif|bmp|webp|avif)$/i.test(src)) {
            popup._contentNode.classList.add("media");
            setTimeout(function () {
                popup.update();
            }, 10);
        } else if (/\.(mp3|wav|ogg|aac)$/i.test(src)) {
            var audio = document.createElement("audio");
            audio.controls = true;
            audio.src = src;
            imgTd.parentNode.replaceChild(audio, imgTd);
            popup._contentNode.classList.add("media");
            setTimeout(function () {
                popup.setContent(tempDiv.innerHTML);
                popup.update();
            }, 10);
        } else if (/\.(mp4|webm|ogg|mov)$/i.test(src)) {
            var video = document.createElement("video");
            video.controls = true;
            video.src = src;
            video.style.width = "400px";
            video.style.height = "300px";
            video.style.maxHeight = "60vh";
            video.style.maxWidth = "60vw";
            imgTd.parentNode.replaceChild(video, imgTd);
            popup._contentNode.classList.add("media");
            // Aggiorna il popup quando il video carica i metadati
            video.addEventListener("loadedmetadata", function () {
                popup.update();
            });
            setTimeout(function () {
                popup.setContent(tempDiv.innerHTML);
                popup.update();
            }, 10);
        } else {
            popup._contentNode.classList.remove("media");
        }
    } else {
        popup._contentNode.classList.remove("media");
    }
}
var zoomControl = L.control
    .zoom({
        position: "topleft",
    })
    .addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {}
map.createPane("pane_malukuutara_modified_0");
map.getPane("pane_malukuutara_modified_0").style.zIndex = 400;
var img_malukuutara_modified_0 = "data/malukuutara_modified_0.png";
var img_bounds_malukuutara_modified_0 = [
    [-2.9190983854860657, 123.17788181715652],
    [2.7477621221030337, 131.19040605515968],
];
var layer_malukuutara_modified_0 = new L.imageOverlay(
    img_malukuutara_modified_0,
    img_bounds_malukuutara_modified_0,
    { pane: "pane_malukuutara_modified_0" }
);
bounds_group.addLayer(layer_malukuutara_modified_0);
map.addLayer(layer_malukuutara_modified_0);
function pop_GeologyMalukuUtara_1(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SYMBOLS"] !== null
            ? autolinker.link(
                  String(feature.properties["SYMBOLS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NM_LEMBAR"] !== null
            ? autolinker.link(
                  String(feature.properties["NM_LEMBAR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NO_LEMBAR"] !== null
            ? autolinker.link(
                  String(feature.properties["NO_LEMBAR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PROJECT"] !== null
            ? autolinker.link(
                  String(feature.properties["PROJECT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAME"] !== null
            ? autolinker.link(
                  String(feature.properties["NAME"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FORMATION"] !== null
            ? autolinker.link(
                  String(feature.properties["FORMATION"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["CLASS_LITH"] !== null
            ? autolinker.link(
                  String(feature.properties["CLASS_LITH"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["T_CLASS_EN"] !== null
            ? autolinker.link(
                  String(feature.properties["T_CLASS_EN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["B_CLASS_EN"] !== null
            ? autolinker.link(
                  String(feature.properties["B_CLASS_EN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["DESCRIP1"] !== null
            ? autolinker.link(
                  String(feature.properties["DESCRIP1"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["Shape_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["Shape_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["Shape_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["Shape_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_GeologyMalukuUtara_1_0() {
    return {
        pane: "pane_GeologyMalukuUtara_1",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(183,72,75,1.0)",
        interactive: false,
    };
}
map.createPane("pane_GeologyMalukuUtara_1");
map.getPane("pane_GeologyMalukuUtara_1").style.zIndex = 401;
map.getPane("pane_GeologyMalukuUtara_1").style["mix-blend-mode"] = "normal";
var layer_GeologyMalukuUtara_1 = new L.geoJson(json_GeologyMalukuUtara_1, {
    attribution: "",
    interactive: false,
    dataVar: "json_GeologyMalukuUtara_1",
    layerName: "layer_GeologyMalukuUtara_1",
    pane: "pane_GeologyMalukuUtara_1",
    onEachFeature: pop_GeologyMalukuUtara_1,
    style: style_GeologyMalukuUtara_1_0,
});
bounds_group.addLayer(layer_GeologyMalukuUtara_1);
map.addLayer(layer_GeologyMalukuUtara_1);
function pop_ADMINISTRASIKECAMATAN_AR_50K_2(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDPPUM"] !== null
            ? autolinker.link(
                  String(feature.properties["KDPPUM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDPBPS"] !== null
            ? autolinker.link(
                  String(feature.properties["KDPBPS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUASWH"] !== null
            ? autolinker.link(
                  String(feature.properties["LUASWH"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["UUPP"] !== null
            ? autolinker.link(
                  String(feature.properties["UUPP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDEBPS"] !== null
            ? autolinker.link(
                  String(feature.properties["KDEBPS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDEPUM"] !== null
            ? autolinker.link(
                  String(feature.properties["KDEPUM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDCBPS"] !== null
            ? autolinker.link(
                  String(feature.properties["KDCBPS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDCPUM"] !== null
            ? autolinker.link(
                  String(feature.properties["KDCPUM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDBBPS"] !== null
            ? autolinker.link(
                  String(feature.properties["KDBBPS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDBPUM"] !== null
            ? autolinker.link(
                  String(feature.properties["KDBPUM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMKD"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMKD"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADKD"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADKD"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMKC"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMKC"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADKC"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADKC"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMKK"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMKK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADKK"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADKK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMPR"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMPR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADPR"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADPR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPADM"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPADM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["Jml_Pddk"] !== null
            ? autolinker.link(
                  String(feature.properties["Jml_Pddk"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JML_MLRIA"] !== null
            ? autolinker.link(
                  String(feature.properties["JML_MLRIA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_ADMINISTRASIKECAMATAN_AR_50K_2_0() {
    return {
        pane: "pane_ADMINISTRASIKECAMATAN_AR_50K_2",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(183,72,75,1.0)",
        interactive: false,
    };
}
map.createPane("pane_ADMINISTRASIKECAMATAN_AR_50K_2");
map.getPane("pane_ADMINISTRASIKECAMATAN_AR_50K_2").style.zIndex = 402;
map.getPane("pane_ADMINISTRASIKECAMATAN_AR_50K_2").style["mix-blend-mode"] =
    "normal";
var layer_ADMINISTRASIKECAMATAN_AR_50K_2 = new L.geoJson(
    json_ADMINISTRASIKECAMATAN_AR_50K_2,
    {
        attribution: "",
        interactive: false,
        dataVar: "json_ADMINISTRASIKECAMATAN_AR_50K_2",
        layerName: "layer_ADMINISTRASIKECAMATAN_AR_50K_2",
        pane: "pane_ADMINISTRASIKECAMATAN_AR_50K_2",
        onEachFeature: pop_ADMINISTRASIKECAMATAN_AR_50K_2,
        style: style_ADMINISTRASIKECAMATAN_AR_50K_2_0,
    }
);
bounds_group.addLayer(layer_ADMINISTRASIKECAMATAN_AR_50K_2);
map.addLayer(layer_ADMINISTRASIKECAMATAN_AR_50K_2);
function pop_AGRIKEBUN_AR_50K_3(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSKBN"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSKBN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PUDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["PUDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["AQDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["AQDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KODLCO"] !== null
            ? autolinker.link(
                  String(feature.properties["KODLCO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_AGRIKEBUN_AR_50K_3_0() {
    return {
        pane: "pane_AGRIKEBUN_AR_50K_3",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(133,182,111,1.0)",
        interactive: false,
    };
}
map.createPane("pane_AGRIKEBUN_AR_50K_3");
map.getPane("pane_AGRIKEBUN_AR_50K_3").style.zIndex = 403;
map.getPane("pane_AGRIKEBUN_AR_50K_3").style["mix-blend-mode"] = "normal";
var layer_AGRIKEBUN_AR_50K_3 = new L.geoJson(json_AGRIKEBUN_AR_50K_3, {
    attribution: "",
    interactive: false,
    dataVar: "json_AGRIKEBUN_AR_50K_3",
    layerName: "layer_AGRIKEBUN_AR_50K_3",
    pane: "pane_AGRIKEBUN_AR_50K_3",
    onEachFeature: pop_AGRIKEBUN_AR_50K_3,
    style: style_AGRIKEBUN_AR_50K_3_0,
});
bounds_group.addLayer(layer_AGRIKEBUN_AR_50K_3);
map.addLayer(layer_AGRIKEBUN_AR_50K_3);
function pop_AIRPORT_AR_50K_4(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KOBDMI"] !== null
            ? autolinker.link(
                  String(feature.properties["KOBDMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDICAO"] !== null
            ? autolinker.link(
                  String(feature.properties["KDICAO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDIATA"] !== null
            ? autolinker.link(
                  String(feature.properties["KDIATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ELEVAS"] !== null
            ? autolinker.link(
                  String(feature.properties["ELEVAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["MAVBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["MAVBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LGTBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["LGTBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KATBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["KATBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ADABMI"] !== null
            ? autolinker.link(
                  String(feature.properties["ADABMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ADRBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["ADRBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPAIP"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPAIP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPLOK"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPLOK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["RUNWAY"] !== null
            ? autolinker.link(
                  String(feature.properties["RUNWAY"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PARK"] !== null
            ? autolinker.link(
                  String(feature.properties["PARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LPG"] !== null
            ? autolinker.link(
                  String(feature.properties["LPG"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_AIRPORT_AR_50K_4_0() {
    return {
        pane: "pane_AIRPORT_AR_50K_4",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: true,
    };
}
map.createPane("pane_AIRPORT_AR_50K_4");
map.getPane("pane_AIRPORT_AR_50K_4").style.zIndex = 404;
map.getPane("pane_AIRPORT_AR_50K_4").style["mix-blend-mode"] = "normal";
var layer_AIRPORT_AR_50K_4 = new L.geoJson(json_AIRPORT_AR_50K_4, {
    attribution: "",
    interactive: true,
    dataVar: "json_AIRPORT_AR_50K_4",
    layerName: "layer_AIRPORT_AR_50K_4",
    pane: "pane_AIRPORT_AR_50K_4",
    onEachFeature: pop_AIRPORT_AR_50K_4,
    style: style_AIRPORT_AR_50K_4_0,
});
bounds_group.addLayer(layer_AIRPORT_AR_50K_4);
map.addLayer(layer_AIRPORT_AR_50K_4);
function pop_AIRPORT_PT_50K_5(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KOBDMI"] !== null
            ? autolinker.link(
                  String(feature.properties["KOBDMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDICAO"] !== null
            ? autolinker.link(
                  String(feature.properties["KDICAO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDIATA"] !== null
            ? autolinker.link(
                  String(feature.properties["KDIATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ELEVAS"] !== null
            ? autolinker.link(
                  String(feature.properties["ELEVAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["MAVBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["MAVBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LGTBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["LGTBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ADABMI"] !== null
            ? autolinker.link(
                  String(feature.properties["ADABMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ADRBMI"] !== null
            ? autolinker.link(
                  String(feature.properties["ADRBMI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPAIP"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPAIP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPLOK"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPLOK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KATKBM"] !== null
            ? autolinker.link(
                  String(feature.properties["KATKBM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_AIRPORT_PT_50K_5_0() {
    return {
        pane: "pane_AIRPORT_PT_50K_5",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(225,89,137,1.0)",
        interactive: true,
    };
}
map.createPane("pane_AIRPORT_PT_50K_5");
map.getPane("pane_AIRPORT_PT_50K_5").style.zIndex = 405;
map.getPane("pane_AIRPORT_PT_50K_5").style["mix-blend-mode"] = "normal";
var layer_AIRPORT_PT_50K_5 = new L.geoJson(json_AIRPORT_PT_50K_5, {
    attribution: "",
    interactive: true,
    dataVar: "json_AIRPORT_PT_50K_5",
    layerName: "layer_AIRPORT_PT_50K_5",
    pane: "pane_AIRPORT_PT_50K_5",
    onEachFeature: pop_AIRPORT_PT_50K_5,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_AIRPORT_PT_50K_5_0(feature));
    },
});
bounds_group.addLayer(layer_AIRPORT_PT_50K_5);
map.addLayer(layer_AIRPORT_PT_50K_5);
function pop_BANGUNAN_AR_50K_6(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_BANGUNAN_AR_50K_6_0() {
    return {
        pane: "pane_BANGUNAN_AR_50K_6",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(213,180,60,1.0)",
        interactive: false,
    };
}
map.createPane("pane_BANGUNAN_AR_50K_6");
map.getPane("pane_BANGUNAN_AR_50K_6").style.zIndex = 406;
map.getPane("pane_BANGUNAN_AR_50K_6").style["mix-blend-mode"] = "normal";
var layer_BANGUNAN_AR_50K_6 = new L.geoJson(json_BANGUNAN_AR_50K_6, {
    attribution: "",
    interactive: false,
    dataVar: "json_BANGUNAN_AR_50K_6",
    layerName: "layer_BANGUNAN_AR_50K_6",
    pane: "pane_BANGUNAN_AR_50K_6",
    onEachFeature: pop_BANGUNAN_AR_50K_6,
    style: style_BANGUNAN_AR_50K_6_0,
});
bounds_group.addLayer(layer_BANGUNAN_AR_50K_6);
map.addLayer(layer_BANGUNAN_AR_50K_6);
function pop_BANGUNAN_PT_50K_7(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_BANGUNAN_PT_50K_7_0() {
    return {
        pane: "pane_BANGUNAN_PT_50K_7",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: true,
    };
}
map.createPane("pane_BANGUNAN_PT_50K_7");
map.getPane("pane_BANGUNAN_PT_50K_7").style.zIndex = 407;
map.getPane("pane_BANGUNAN_PT_50K_7").style["mix-blend-mode"] = "normal";
var layer_BANGUNAN_PT_50K_7 = new L.geoJson(json_BANGUNAN_PT_50K_7, {
    attribution: "",
    interactive: true,
    dataVar: "json_BANGUNAN_PT_50K_7",
    layerName: "layer_BANGUNAN_PT_50K_7",
    pane: "pane_BANGUNAN_PT_50K_7",
    onEachFeature: pop_BANGUNAN_PT_50K_7,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_BANGUNAN_PT_50K_7_0(feature));
    },
});
bounds_group.addLayer(layer_BANGUNAN_PT_50K_7);
map.addLayer(layer_BANGUNAN_PT_50K_7);
function pop_CAGARBUDAYA_PT_50K_8(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_CAGARBUDAYA_PT_50K_8_0() {
    return {
        pane: "pane_CAGARBUDAYA_PT_50K_8",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(225,89,137,1.0)",
        interactive: true,
    };
}
map.createPane("pane_CAGARBUDAYA_PT_50K_8");
map.getPane("pane_CAGARBUDAYA_PT_50K_8").style.zIndex = 408;
map.getPane("pane_CAGARBUDAYA_PT_50K_8").style["mix-blend-mode"] = "normal";
var layer_CAGARBUDAYA_PT_50K_8 = new L.geoJson(json_CAGARBUDAYA_PT_50K_8, {
    attribution: "",
    interactive: true,
    dataVar: "json_CAGARBUDAYA_PT_50K_8",
    layerName: "layer_CAGARBUDAYA_PT_50K_8",
    pane: "pane_CAGARBUDAYA_PT_50K_8",
    onEachFeature: pop_CAGARBUDAYA_PT_50K_8,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_CAGARBUDAYA_PT_50K_8_0(feature));
    },
});
bounds_group.addLayer(layer_CAGARBUDAYA_PT_50K_8);
map.addLayer(layer_CAGARBUDAYA_PT_50K_8);
function pop_DANAU_AR_50K_9(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["OTODAN"] !== null
            ? autolinker.link(
                  String(feature.properties["OTODAN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KODLCO"] !== null
            ? autolinker.link(
                  String(feature.properties["KODLCO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["VOLTAP"] !== null
            ? autolinker.link(
                  String(feature.properties["VOLTAP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["DTA"] !== null
            ? autolinker.link(
                  String(feature.properties["DTA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SEDIMN"] !== null
            ? autolinker.link(
                  String(feature.properties["SEDIMN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["VLCSDN"] !== null
            ? autolinker.link(
                  String(feature.properties["VLCSDN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["QUAAR"] !== null
            ? autolinker.link(
                  String(feature.properties["QUAAR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["CRH"] !== null
            ? autolinker.link(
                  String(feature.properties["CRH"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KPTS"] !== null
            ? autolinker.link(
                  String(feature.properties["KPTS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMWS"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMWS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMDAS"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMDAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LOKASI"] !== null
            ? autolinker.link(
                  String(feature.properties["LOKASI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_DANAU_AR_50K_9_0() {
    return {
        pane: "pane_DANAU_AR_50K_9",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(213,180,60,1.0)",
        interactive: false,
    };
}
map.createPane("pane_DANAU_AR_50K_9");
map.getPane("pane_DANAU_AR_50K_9").style.zIndex = 409;
map.getPane("pane_DANAU_AR_50K_9").style["mix-blend-mode"] = "normal";
var layer_DANAU_AR_50K_9 = new L.geoJson(json_DANAU_AR_50K_9, {
    attribution: "",
    interactive: false,
    dataVar: "json_DANAU_AR_50K_9",
    layerName: "layer_DANAU_AR_50K_9",
    pane: "pane_DANAU_AR_50K_9",
    onEachFeature: pop_DANAU_AR_50K_9,
    style: style_DANAU_AR_50K_9_0,
});
bounds_group.addLayer(layer_DANAU_AR_50K_9);
map.addLayer(layer_DANAU_AR_50K_9);
function pop_DERMAGA_PT_50K_10(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PMLDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["PMLDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["OPRDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["OPRDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LGTDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["LGTDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LBRDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["LBRDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KDLDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["KDLDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KSTDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["KSTDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["STRDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["STRDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FGSDRM"] !== null
            ? autolinker.link(
                  String(feature.properties["FGSDRM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_DERMAGA_PT_50K_10_0() {
    return {
        pane: "pane_DERMAGA_PT_50K_10",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: true,
    };
}
map.createPane("pane_DERMAGA_PT_50K_10");
map.getPane("pane_DERMAGA_PT_50K_10").style.zIndex = 410;
map.getPane("pane_DERMAGA_PT_50K_10").style["mix-blend-mode"] = "normal";
var layer_DERMAGA_PT_50K_10 = new L.geoJson(json_DERMAGA_PT_50K_10, {
    attribution: "",
    interactive: true,
    dataVar: "json_DERMAGA_PT_50K_10",
    layerName: "layer_DERMAGA_PT_50K_10",
    pane: "pane_DERMAGA_PT_50K_10",
    onEachFeature: pop_DERMAGA_PT_50K_10,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_DERMAGA_PT_50K_10_0(feature));
    },
});
bounds_group.addLayer(layer_DERMAGA_PT_50K_10);
map.addLayer(layer_DERMAGA_PT_50K_10);
function pop_GARISRPANTAI_LN_50K_11(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["DTMVER"] !== null
            ? autolinker.link(
                  String(feature.properties["DTMVER"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KARGPN"] !== null
            ? autolinker.link(
                  String(feature.properties["KARGPN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KODGPN"] !== null
            ? autolinker.link(
                  String(feature.properties["KODGPN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPGPN"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPGPN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_GARISRPANTAI_LN_50K_11_0() {
    return {
        pane: "pane_GARISRPANTAI_LN_50K_11",
        opacity: 1,
        color: "rgba(145,82,45,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    };
}
map.createPane("pane_GARISRPANTAI_LN_50K_11");
map.getPane("pane_GARISRPANTAI_LN_50K_11").style.zIndex = 411;
map.getPane("pane_GARISRPANTAI_LN_50K_11").style["mix-blend-mode"] = "normal";
var layer_GARISRPANTAI_LN_50K_11 = new L.geoJson(json_GARISRPANTAI_LN_50K_11, {
    attribution: "",
    interactive: true,
    dataVar: "json_GARISRPANTAI_LN_50K_11",
    layerName: "layer_GARISRPANTAI_LN_50K_11",
    pane: "pane_GARISRPANTAI_LN_50K_11",
    onEachFeature: pop_GARISRPANTAI_LN_50K_11,
    style: style_GARISRPANTAI_LN_50K_11_0,
});
bounds_group.addLayer(layer_GARISRPANTAI_LN_50K_11);
map.addLayer(layer_GARISRPANTAI_LN_50K_11);
function pop_JALAN_LN_50K_12(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KONRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["KONRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["MATRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["MATRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FGSRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["FGSRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["UTKRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["UTKRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TOLRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["TOLRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WLYRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["WLYRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["AUTRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["AUTRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SPCRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["SPCRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JPARJL"] !== null
            ? autolinker.link(
                  String(feature.properties["JPARJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ARHRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["ARHRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["STARJL"] !== null
            ? autolinker.link(
                  String(feature.properties["STARJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLLRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["KLLRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["MEDRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["MEDRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LOCRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["LOCRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JARRJL"] !== null
            ? autolinker.link(
                  String(feature.properties["JARRJL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_JALAN_LN_50K_12_0() {
    return {
        pane: "pane_JALAN_LN_50K_12",
        opacity: 1,
        color: "rgba(243,166,178,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    };
}
map.createPane("pane_JALAN_LN_50K_12");
map.getPane("pane_JALAN_LN_50K_12").style.zIndex = 412;
map.getPane("pane_JALAN_LN_50K_12").style["mix-blend-mode"] = "normal";
var layer_JALAN_LN_50K_12 = new L.geoJson(json_JALAN_LN_50K_12, {
    attribution: "",
    interactive: true,
    dataVar: "json_JALAN_LN_50K_12",
    layerName: "layer_JALAN_LN_50K_12",
    pane: "pane_JALAN_LN_50K_12",
    onEachFeature: pop_JALAN_LN_50K_12,
    style: style_JALAN_LN_50K_12_0,
});
bounds_group.addLayer(layer_JALAN_LN_50K_12);
map.addLayer(layer_JALAN_LN_50K_12);
function pop_KESEHATAN_PT_50K_13(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPSHT"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPSHT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FSKADD"] !== null
            ? autolinker.link(
                  String(feature.properties["FSKADD"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_KESEHATAN_PT_50K_13_0() {
    return {
        pane: "pane_KESEHATAN_PT_50K_13",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: true,
    };
}
map.createPane("pane_KESEHATAN_PT_50K_13");
map.getPane("pane_KESEHATAN_PT_50K_13").style.zIndex = 413;
map.getPane("pane_KESEHATAN_PT_50K_13").style["mix-blend-mode"] = "normal";
var layer_KESEHATAN_PT_50K_13 = new L.geoJson(json_KESEHATAN_PT_50K_13, {
    attribution: "",
    interactive: true,
    dataVar: "json_KESEHATAN_PT_50K_13",
    layerName: "layer_KESEHATAN_PT_50K_13",
    pane: "pane_KESEHATAN_PT_50K_13",
    onEachFeature: pop_KESEHATAN_PT_50K_13,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_KESEHATAN_PT_50K_13_0(feature));
    },
});
bounds_group.addLayer(layer_KESEHATAN_PT_50K_13);
map.addLayer(layer_KESEHATAN_PT_50K_13);
function pop_KONTUR_LN_50K_14(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["VALKNT"] !== null
            ? autolinker.link(
                  String(feature.properties["VALKNT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPKNT"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPKNT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["IDXKNT"] !== null
            ? autolinker.link(
                  String(feature.properties["IDXKNT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSKNT"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSKNT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_KONTUR_LN_50K_14_0() {
    return {
        pane: "pane_KONTUR_LN_50K_14",
        opacity: 1,
        color: "rgba(225,89,137,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    };
}
map.createPane("pane_KONTUR_LN_50K_14");
map.getPane("pane_KONTUR_LN_50K_14").style.zIndex = 414;
map.getPane("pane_KONTUR_LN_50K_14").style["mix-blend-mode"] = "normal";
var layer_KONTUR_LN_50K_14 = new L.geoJson(json_KONTUR_LN_50K_14, {
    attribution: "",
    interactive: true,
    dataVar: "json_KONTUR_LN_50K_14",
    layerName: "layer_KONTUR_LN_50K_14",
    pane: "pane_KONTUR_LN_50K_14",
    onEachFeature: pop_KONTUR_LN_50K_14,
    style: style_KONTUR_LN_50K_14_0,
});
bounds_group.addLayer(layer_KONTUR_LN_50K_14);
map.addLayer(layer_KONTUR_LN_50K_14);
function pop_MAKAM_PT_50K_15(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TPMKM"] !== null
            ? autolinker.link(
                  String(feature.properties["TPMKM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_MAKAM_PT_50K_15_0() {
    return {
        pane: "pane_MAKAM_PT_50K_15",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(133,182,111,1.0)",
        interactive: true,
    };
}
map.createPane("pane_MAKAM_PT_50K_15");
map.getPane("pane_MAKAM_PT_50K_15").style.zIndex = 415;
map.getPane("pane_MAKAM_PT_50K_15").style["mix-blend-mode"] = "normal";
var layer_MAKAM_PT_50K_15 = new L.geoJson(json_MAKAM_PT_50K_15, {
    attribution: "",
    interactive: true,
    dataVar: "json_MAKAM_PT_50K_15",
    layerName: "layer_MAKAM_PT_50K_15",
    pane: "pane_MAKAM_PT_50K_15",
    onEachFeature: pop_MAKAM_PT_50K_15,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_MAKAM_PT_50K_15_0(feature));
    },
});
bounds_group.addLayer(layer_MAKAM_PT_50K_15);
map.addLayer(layer_MAKAM_PT_50K_15);
function pop_NIAGA_PT_50K_16(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FUNGSI"] !== null
            ? autolinker.link(
                  String(feature.properties["FUNGSI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FGSKOD"] !== null
            ? autolinker.link(
                  String(feature.properties["FGSKOD"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSPSR"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSPSR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSTKO"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSTKO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSKTR"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSKTR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PRSTRP"] !== null
            ? autolinker.link(
                  String(feature.properties["PRSTRP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_NIAGA_PT_50K_16_0() {
    return {
        pane: "pane_NIAGA_PT_50K_16",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: true,
    };
}
map.createPane("pane_NIAGA_PT_50K_16");
map.getPane("pane_NIAGA_PT_50K_16").style.zIndex = 416;
map.getPane("pane_NIAGA_PT_50K_16").style["mix-blend-mode"] = "normal";
var layer_NIAGA_PT_50K_16 = new L.geoJson(json_NIAGA_PT_50K_16, {
    attribution: "",
    interactive: true,
    dataVar: "json_NIAGA_PT_50K_16",
    layerName: "layer_NIAGA_PT_50K_16",
    pane: "pane_NIAGA_PT_50K_16",
    onEachFeature: pop_NIAGA_PT_50K_16,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_NIAGA_PT_50K_16_0(feature));
    },
});
bounds_group.addLayer(layer_NIAGA_PT_50K_16);
map.addLayer(layer_NIAGA_PT_50K_16);
function pop_NONAGRIALANG_AR_50K_17(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["AQDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["AQDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSRMP"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSRMP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KODATC"] !== null
            ? autolinker.link(
                  String(feature.properties["KODATC"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PUDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["PUDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSPDG"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSPDG"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_NONAGRIALANG_AR_50K_17_0() {
    return {
        pane: "pane_NONAGRIALANG_AR_50K_17",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(145,82,45,1.0)",
        interactive: false,
    };
}
map.createPane("pane_NONAGRIALANG_AR_50K_17");
map.getPane("pane_NONAGRIALANG_AR_50K_17").style.zIndex = 417;
map.getPane("pane_NONAGRIALANG_AR_50K_17").style["mix-blend-mode"] = "normal";
var layer_NONAGRIALANG_AR_50K_17 = new L.geoJson(json_NONAGRIALANG_AR_50K_17, {
    attribution: "",
    interactive: false,
    dataVar: "json_NONAGRIALANG_AR_50K_17",
    layerName: "layer_NONAGRIALANG_AR_50K_17",
    pane: "pane_NONAGRIALANG_AR_50K_17",
    onEachFeature: pop_NONAGRIALANG_AR_50K_17,
    style: style_NONAGRIALANG_AR_50K_17_0,
});
bounds_group.addLayer(layer_NONAGRIALANG_AR_50K_17);
map.addLayer(layer_NONAGRIALANG_AR_50K_17);
function pop_NONAGRIHUTANKERING_AR_50K_18(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSPHN"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSPHN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSHTN"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSHTN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KRPPHN"] !== null
            ? autolinker.link(
                  String(feature.properties["KRPPHN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["AQDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["AQDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PUDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["PUDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KODLCO"] !== null
            ? autolinker.link(
                  String(feature.properties["KODLCO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSLCO"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSLCO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TKTHTN"] !== null
            ? autolinker.link(
                  String(feature.properties["TKTHTN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPHTN"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPHTN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_NONAGRIHUTANKERING_AR_50K_18_0() {
    return {
        pane: "pane_NONAGRIHUTANKERING_AR_50K_18",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(243,166,178,1.0)",
        interactive: false,
    };
}
map.createPane("pane_NONAGRIHUTANKERING_AR_50K_18");
map.getPane("pane_NONAGRIHUTANKERING_AR_50K_18").style.zIndex = 418;
map.getPane("pane_NONAGRIHUTANKERING_AR_50K_18").style["mix-blend-mode"] =
    "normal";
var layer_NONAGRIHUTANKERING_AR_50K_18 = new L.geoJson(
    json_NONAGRIHUTANKERING_AR_50K_18,
    {
        attribution: "",
        interactive: false,
        dataVar: "json_NONAGRIHUTANKERING_AR_50K_18",
        layerName: "layer_NONAGRIHUTANKERING_AR_50K_18",
        pane: "pane_NONAGRIHUTANKERING_AR_50K_18",
        onEachFeature: pop_NONAGRIHUTANKERING_AR_50K_18,
        style: style_NONAGRIHUTANKERING_AR_50K_18_0,
    }
);
bounds_group.addLayer(layer_NONAGRIHUTANKERING_AR_50K_18);
map.addLayer(layer_NONAGRIHUTANKERING_AR_50K_18);
function pop_NONAGRISEMAKBELUKAR_AR_50K_19(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["AQDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["AQDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PUDATE"] !== null
            ? autolinker.link(
                  String(feature.properties["PUDATE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KODLCO"] !== null
            ? autolinker.link(
                  String(feature.properties["KODLCO"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSSMK"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSSMK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_NONAGRISEMAKBELUKAR_AR_50K_19_0() {
    return {
        pane: "pane_NONAGRISEMAKBELUKAR_AR_50K_19",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: false,
    };
}
map.createPane("pane_NONAGRISEMAKBELUKAR_AR_50K_19");
map.getPane("pane_NONAGRISEMAKBELUKAR_AR_50K_19").style.zIndex = 419;
map.getPane("pane_NONAGRISEMAKBELUKAR_AR_50K_19").style["mix-blend-mode"] =
    "normal";
var layer_NONAGRISEMAKBELUKAR_AR_50K_19 = new L.geoJson(
    json_NONAGRISEMAKBELUKAR_AR_50K_19,
    {
        attribution: "",
        interactive: false,
        dataVar: "json_NONAGRISEMAKBELUKAR_AR_50K_19",
        layerName: "layer_NONAGRISEMAKBELUKAR_AR_50K_19",
        pane: "pane_NONAGRISEMAKBELUKAR_AR_50K_19",
        onEachFeature: pop_NONAGRISEMAKBELUKAR_AR_50K_19,
        style: style_NONAGRISEMAKBELUKAR_AR_50K_19_0,
    }
);
bounds_group.addLayer(layer_NONAGRISEMAKBELUKAR_AR_50K_19);
map.addLayer(layer_NONAGRISEMAKBELUKAR_AR_50K_19);
function pop_PELABUHAN_PT_50K_20(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ADMPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["ADMPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FGSPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["FGSPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PJAPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["PJAPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LAMPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["LAMPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["STUPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["STUPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KONKON"] !== null
            ? autolinker.link(
                  String(feature.properties["KONKON"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KMXPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["KMXPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KMNPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["KMNPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["STPPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["STPPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRPPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["SRPPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ALJPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["ALJPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KODPEL"] !== null
            ? autolinker.link(
                  String(feature.properties["KODPEL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_PELABUHAN_PT_50K_20_0() {
    return {
        pane: "pane_PELABUHAN_PT_50K_20",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(145,82,45,1.0)",
        interactive: true,
    };
}
map.createPane("pane_PELABUHAN_PT_50K_20");
map.getPane("pane_PELABUHAN_PT_50K_20").style.zIndex = 420;
map.getPane("pane_PELABUHAN_PT_50K_20").style["mix-blend-mode"] = "normal";
var layer_PELABUHAN_PT_50K_20 = new L.geoJson(json_PELABUHAN_PT_50K_20, {
    attribution: "",
    interactive: true,
    dataVar: "json_PELABUHAN_PT_50K_20",
    layerName: "layer_PELABUHAN_PT_50K_20",
    pane: "pane_PELABUHAN_PT_50K_20",
    onEachFeature: pop_PELABUHAN_PT_50K_20,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_PELABUHAN_PT_50K_20_0(feature));
    },
});
bounds_group.addLayer(layer_PELABUHAN_PT_50K_20);
map.addLayer(layer_PELABUHAN_PT_50K_20);
function pop_PEMERINTAHAN_PT_50K_21(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FGSGOV"] !== null
            ? autolinker.link(
                  String(feature.properties["FGSGOV"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_PEMERINTAHAN_PT_50K_21_0() {
    return {
        pane: "pane_PEMERINTAHAN_PT_50K_21",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(243,166,178,1.0)",
        interactive: true,
    };
}
map.createPane("pane_PEMERINTAHAN_PT_50K_21");
map.getPane("pane_PEMERINTAHAN_PT_50K_21").style.zIndex = 421;
map.getPane("pane_PEMERINTAHAN_PT_50K_21").style["mix-blend-mode"] = "normal";
var layer_PEMERINTAHAN_PT_50K_21 = new L.geoJson(json_PEMERINTAHAN_PT_50K_21, {
    attribution: "",
    interactive: true,
    dataVar: "json_PEMERINTAHAN_PT_50K_21",
    layerName: "layer_PEMERINTAHAN_PT_50K_21",
    pane: "pane_PEMERINTAHAN_PT_50K_21",
    onEachFeature: pop_PEMERINTAHAN_PT_50K_21,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_PEMERINTAHAN_PT_50K_21_0(feature));
    },
});
bounds_group.addLayer(layer_PEMERINTAHAN_PT_50K_21);
map.addLayer(layer_PEMERINTAHAN_PT_50K_21);
function pop_PENDIDIKAN_PT_50K_22(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KATPDK"] !== null
            ? autolinker.link(
                  String(feature.properties["KATPDK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JLPDDK"] !== null
            ? autolinker.link(
                  String(feature.properties["JLPDDK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FGGPDK"] !== null
            ? autolinker.link(
                  String(feature.properties["FGGPDK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JJGPDF"] !== null
            ? autolinker.link(
                  String(feature.properties["JJGPDF"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSPDL"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSPDL"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_PENDIDIKAN_PT_50K_22_0() {
    return {
        pane: "pane_PENDIDIKAN_PT_50K_22",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(145,82,45,1.0)",
        interactive: true,
    };
}
map.createPane("pane_PENDIDIKAN_PT_50K_22");
map.getPane("pane_PENDIDIKAN_PT_50K_22").style.zIndex = 422;
map.getPane("pane_PENDIDIKAN_PT_50K_22").style["mix-blend-mode"] = "normal";
var layer_PENDIDIKAN_PT_50K_22 = new L.geoJson(json_PENDIDIKAN_PT_50K_22, {
    attribution: "",
    interactive: true,
    dataVar: "json_PENDIDIKAN_PT_50K_22",
    layerName: "layer_PENDIDIKAN_PT_50K_22",
    pane: "pane_PENDIDIKAN_PT_50K_22",
    onEachFeature: pop_PENDIDIKAN_PT_50K_22,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_PENDIDIKAN_PT_50K_22_0(feature));
    },
});
bounds_group.addLayer(layer_PENDIDIKAN_PT_50K_22);
map.addLayer(layer_PENDIDIKAN_PT_50K_22);
function pop_PILARBATAS_PT_50K_23(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["IDENTF"] !== null
            ? autolinker.link(
                  String(feature.properties["IDENTF"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METUKR"] !== null
            ? autolinker.link(
                  String(feature.properties["METUKR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["AKURAH"] !== null
            ? autolinker.link(
                  String(feature.properties["AKURAH"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KARKTR"] !== null
            ? autolinker.link(
                  String(feature.properties["KARKTR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["MONUMN"] !== null
            ? autolinker.link(
                  String(feature.properties["MONUMN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPHPT"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPHPT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LOKASI"] !== null
            ? autolinker.link(
                  String(feature.properties["LOKASI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["AKURAV"] !== null
            ? autolinker.link(
                  String(feature.properties["AKURAV"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSPLR"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSPLR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ELEVAS"] !== null
            ? autolinker.link(
                  String(feature.properties["ELEVAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLBADM"] !== null
            ? autolinker.link(
                  String(feature.properties["KLBADM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_PILARBATAS_PT_50K_23_0() {
    return {
        pane: "pane_PILARBATAS_PT_50K_23",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(243,166,178,1.0)",
        interactive: true,
    };
}
map.createPane("pane_PILARBATAS_PT_50K_23");
map.getPane("pane_PILARBATAS_PT_50K_23").style.zIndex = 423;
map.getPane("pane_PILARBATAS_PT_50K_23").style["mix-blend-mode"] = "normal";
var layer_PILARBATAS_PT_50K_23 = new L.geoJson(json_PILARBATAS_PT_50K_23, {
    attribution: "",
    interactive: true,
    dataVar: "json_PILARBATAS_PT_50K_23",
    layerName: "layer_PILARBATAS_PT_50K_23",
    pane: "pane_PILARBATAS_PT_50K_23",
    onEachFeature: pop_PILARBATAS_PT_50K_23,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_PILARBATAS_PT_50K_23_0(feature));
    },
});
bounds_group.addLayer(layer_PILARBATAS_PT_50K_23);
map.addLayer(layer_PILARBATAS_PT_50K_23);
function pop_PUSKESMAS_PT_50K_24(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KWKPKM_"] !== null
            ? autolinker.link(
                  String(feature.properties["KWKPKM_"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KMPPKM_"] !== null
            ? autolinker.link(
                  String(feature.properties["KMPPKM_"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JPLPKM_"] !== null
            ? autolinker.link(
                  String(feature.properties["JPLPKM_"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PKMKODE_"] !== null
            ? autolinker.link(
                  String(feature.properties["PKMKODE_"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PKMKAT_"] !== null
            ? autolinker.link(
                  String(feature.properties["PKMKAT_"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PKMLMT_"] !== null
            ? autolinker.link(
                  String(feature.properties["PKMLMT_"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_PUSKESMAS_PT_50K_24_0() {
    return {
        pane: "pane_PUSKESMAS_PT_50K_24",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: true,
    };
}
map.createPane("pane_PUSKESMAS_PT_50K_24");
map.getPane("pane_PUSKESMAS_PT_50K_24").style.zIndex = 424;
map.getPane("pane_PUSKESMAS_PT_50K_24").style["mix-blend-mode"] = "normal";
var layer_PUSKESMAS_PT_50K_24 = new L.geoJson(json_PUSKESMAS_PT_50K_24, {
    attribution: "",
    interactive: true,
    dataVar: "json_PUSKESMAS_PT_50K_24",
    layerName: "layer_PUSKESMAS_PT_50K_24",
    pane: "pane_PUSKESMAS_PT_50K_24",
    onEachFeature: pop_PUSKESMAS_PT_50K_24,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_PUSKESMAS_PT_50K_24_0(feature));
    },
});
bounds_group.addLayer(layer_PUSKESMAS_PT_50K_24);
map.addLayer(layer_PUSKESMAS_PT_50K_24);
function pop_RUMAHSAKIT_PT_50K_25(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPRST"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPRST"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JPLYRS"] !== null
            ? autolinker.link(
                  String(feature.properties["JPLYRS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ALAMAT"] !== null
            ? autolinker.link(
                  String(feature.properties["ALAMAT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_RUMAHSAKIT_PT_50K_25_0() {
    return {
        pane: "pane_RUMAHSAKIT_PT_50K_25",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(145,82,45,1.0)",
        interactive: true,
    };
}
map.createPane("pane_RUMAHSAKIT_PT_50K_25");
map.getPane("pane_RUMAHSAKIT_PT_50K_25").style.zIndex = 425;
map.getPane("pane_RUMAHSAKIT_PT_50K_25").style["mix-blend-mode"] = "normal";
var layer_RUMAHSAKIT_PT_50K_25 = new L.geoJson(json_RUMAHSAKIT_PT_50K_25, {
    attribution: "",
    interactive: true,
    dataVar: "json_RUMAHSAKIT_PT_50K_25",
    layerName: "layer_RUMAHSAKIT_PT_50K_25",
    pane: "pane_RUMAHSAKIT_PT_50K_25",
    onEachFeature: pop_RUMAHSAKIT_PT_50K_25,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_RUMAHSAKIT_PT_50K_25_0(feature));
    },
});
bounds_group.addLayer(layer_RUMAHSAKIT_PT_50K_25);
map.addLayer(layer_RUMAHSAKIT_PT_50K_25);
function pop_SARANAIBADAH_PT_50K_26(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FGSIBD"] !== null
            ? autolinker.link(
                  String(feature.properties["FGSIBD"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_SARANAIBADAH_PT_50K_26_0() {
    return {
        pane: "pane_SARANAIBADAH_PT_50K_26",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(243,166,178,1.0)",
        interactive: true,
    };
}
map.createPane("pane_SARANAIBADAH_PT_50K_26");
map.getPane("pane_SARANAIBADAH_PT_50K_26").style.zIndex = 426;
map.getPane("pane_SARANAIBADAH_PT_50K_26").style["mix-blend-mode"] = "normal";
var layer_SARANAIBADAH_PT_50K_26 = new L.geoJson(json_SARANAIBADAH_PT_50K_26, {
    attribution: "",
    interactive: true,
    dataVar: "json_SARANAIBADAH_PT_50K_26",
    layerName: "layer_SARANAIBADAH_PT_50K_26",
    pane: "pane_SARANAIBADAH_PT_50K_26",
    onEachFeature: pop_SARANAIBADAH_PT_50K_26,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_SARANAIBADAH_PT_50K_26_0(feature));
    },
});
bounds_group.addLayer(layer_SARANAIBADAH_PT_50K_26);
map.addLayer(layer_SARANAIBADAH_PT_50K_26);
function pop_SUNGAI_AR_50K_27(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["JNSSNG"] !== null
            ? autolinker.link(
                  String(feature.properties["JNSSNG"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSSNG"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSSNG"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMWS"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMWS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMDAS"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMDAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Area"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Area"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_SUNGAI_AR_50K_27_0() {
    return {
        pane: "pane_SUNGAI_AR_50K_27",
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(152,125,183,1.0)",
        interactive: true,
    };
}
map.createPane("pane_SUNGAI_AR_50K_27");
map.getPane("pane_SUNGAI_AR_50K_27").style.zIndex = 427;
map.getPane("pane_SUNGAI_AR_50K_27").style["mix-blend-mode"] = "normal";
var layer_SUNGAI_AR_50K_27 = new L.geoJson(json_SUNGAI_AR_50K_27, {
    attribution: "",
    interactive: true,
    dataVar: "json_SUNGAI_AR_50K_27",
    layerName: "layer_SUNGAI_AR_50K_27",
    pane: "pane_SUNGAI_AR_50K_27",
    onEachFeature: pop_SUNGAI_AR_50K_27,
    style: style_SUNGAI_AR_50K_27_0,
});
bounds_group.addLayer(layer_SUNGAI_AR_50K_27);
map.addLayer(layer_SUNGAI_AR_50K_27);
function pop_SUNGAI_LN_50K_28(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPSNG"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPSNG"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSSNG"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSSNG"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMWS"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMWS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMDAS"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMDAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["STATUS"] !== null
            ? autolinker.link(
                  String(feature.properties["STATUS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WMAX"] !== null
            ? autolinker.link(
                  String(feature.properties["WMAX"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["DBTMAX"] !== null
            ? autolinker.link(
                  String(feature.properties["DBTMAX"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SLPRT"] !== null
            ? autolinker.link(
                  String(feature.properties["SLPRT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_SUNGAI_LN_50K_28_0() {
    return {
        pane: "pane_SUNGAI_LN_50K_28",
        opacity: 1,
        color: "rgba(145,82,45,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    };
}
map.createPane("pane_SUNGAI_LN_50K_28");
map.getPane("pane_SUNGAI_LN_50K_28").style.zIndex = 428;
map.getPane("pane_SUNGAI_LN_50K_28").style["mix-blend-mode"] = "normal";
var layer_SUNGAI_LN_50K_28 = new L.geoJson(json_SUNGAI_LN_50K_28, {
    attribution: "",
    interactive: true,
    dataVar: "json_SUNGAI_LN_50K_28",
    layerName: "layer_SUNGAI_LN_50K_28",
    pane: "pane_SUNGAI_LN_50K_28",
    onEachFeature: pop_SUNGAI_LN_50K_28,
    style: style_SUNGAI_LN_50K_28_0,
});
bounds_group.addLayer(layer_SUNGAI_LN_50K_28);
map.addLayer(layer_SUNGAI_LN_50K_28);
function pop_TOPONIMI_PT_50K_29(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ALIAS"] !== null
            ? autolinker.link(
                  String(feature.properties["ALIAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LOKTPN"] !== null
            ? autolinker.link(
                  String(feature.properties["LOKTPN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLSTPN"] !== null
            ? autolinker.link(
                  String(feature.properties["KLSTPN"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FTYPE"] !== null
            ? autolinker.link(
                  String(feature.properties["FTYPE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LAT"] !== null
            ? autolinker.link(
                  String(feature.properties["LAT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LON"] !== null
            ? autolinker.link(
                  String(feature.properties["LON"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KOORDY"] !== null
            ? autolinker.link(
                  String(feature.properties["KOORDY"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KOORDX"] !== null
            ? autolinker.link(
                  String(feature.properties["KOORDX"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KOORDINAT1"] !== null
            ? autolinker.link(
                  String(feature.properties["KOORDINAT1"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KORDINTAT2"] !== null
            ? autolinker.link(
                  String(feature.properties["KORDINTAT2"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LUAS"] !== null
            ? autolinker.link(
                  String(feature.properties["LUAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["Elevasi"] !== null
            ? autolinker.link(
                  String(feature.properties["Elevasi"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMLOK"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMLOK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMSPE"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMSPE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMMAP"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMMAP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMGAZ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMGAZ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SJHNAM"] !== null
            ? autolinker.link(
                  String(feature.properties["SJHNAM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ARTINAM"] !== null
            ? autolinker.link(
                  String(feature.properties["ARTINAM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ASLBHS"] !== null
            ? autolinker.link(
                  String(feature.properties["ASLBHS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMKD"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMKD"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADKD"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADKD"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMKC"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMKC"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADKC"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADKC"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMKK"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMKK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADKK"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADKK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADMPR"] !== null
            ? autolinker.link(
                  String(feature.properties["WADMPR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WIADPR"] !== null
            ? autolinker.link(
                  String(feature.properties["WIADPR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPADM"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPADM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["STATUS"] !== null
            ? autolinker.link(
                  String(feature.properties["STATUS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_TOPONIMI_PT_50K_29_0() {
    return {
        pane: "pane_TOPONIMI_PT_50K_29",
        radius: 4.0,
        opacity: 1,
        color: "rgba(35,35,35,1.0)",
        dashArray: "",
        lineCap: "butt",
        lineJoin: "miter",
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(243,166,178,1.0)",
        interactive: true,
    };
}
map.createPane("pane_TOPONIMI_PT_50K_29");
map.getPane("pane_TOPONIMI_PT_50K_29").style.zIndex = 429;
map.getPane("pane_TOPONIMI_PT_50K_29").style["mix-blend-mode"] = "normal";
var layer_TOPONIMI_PT_50K_29 = new L.geoJson(json_TOPONIMI_PT_50K_29, {
    attribution: "",
    interactive: true,
    dataVar: "json_TOPONIMI_PT_50K_29",
    layerName: "layer_TOPONIMI_PT_50K_29",
    pane: "pane_TOPONIMI_PT_50K_29",
    onEachFeature: pop_TOPONIMI_PT_50K_29,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, style_TOPONIMI_PT_50K_29_0(feature));
    },
});
bounds_group.addLayer(layer_TOPONIMI_PT_50K_29);
map.addLayer(layer_TOPONIMI_PT_50K_29);
function pop_ADMINISTRASI_LN_50K_30(feature, layer) {
    var popupContent =
        '<table>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KARKTR"] !== null
            ? autolinker.link(
                  String(feature.properties["KARKTR"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["STSBTS"] !== null
            ? autolinker.link(
                  String(feature.properties["STSBTS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["FCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["FCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KELAS"] !== null
            ? autolinker.link(
                  String(feature.properties["KELAS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["UUPP"] !== null
            ? autolinker.link(
                  String(feature.properties["UUPP"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LOKASI"] !== null
            ? autolinker.link(
                  String(feature.properties["LOKASI"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["REMARK"] !== null
            ? autolinker.link(
                  String(feature.properties["REMARK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["NAMOBJ"] !== null
            ? autolinker.link(
                  String(feature.properties["NAMOBJ"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ADMIN1"] !== null
            ? autolinker.link(
                  String(feature.properties["ADMIN1"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["ADMIN2"] !== null
            ? autolinker.link(
                  String(feature.properties["ADMIN2"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SRS_ID"] !== null
            ? autolinker.link(
                  String(feature.properties["SRS_ID"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["LCODE"] !== null
            ? autolinker.link(
                  String(feature.properties["LCODE"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["METADATA"] !== null
            ? autolinker.link(
                  String(feature.properties["METADATA"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WAKLD1"] !== null
            ? autolinker.link(
                  String(feature.properties["WAKLD1"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WAKLD2"] !== null
            ? autolinker.link(
                  String(feature.properties["WAKLD2"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADKC1"] !== null
            ? autolinker.link(
                  String(feature.properties["WADKC1"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WADKC2"] !== null
            ? autolinker.link(
                  String(feature.properties["WADKC2"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WAKBK1"] !== null
            ? autolinker.link(
                  String(feature.properties["WAKBK1"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WAKBK2"] !== null
            ? autolinker.link(
                  String(feature.properties["WAKBK2"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WAPRO1"] !== null
            ? autolinker.link(
                  String(feature.properties["WAPRO1"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["WAPRO2"] !== null
            ? autolinker.link(
                  String(feature.properties["WAPRO2"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPTBT"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPTBT"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["PJGBTS"] !== null
            ? autolinker.link(
                  String(feature.properties["PJGBTS"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["KLBADM"] !== null
            ? autolinker.link(
                  String(feature.properties["KLBADM"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["TIPLOK"] !== null
            ? autolinker.link(
                  String(feature.properties["TIPLOK"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
        (feature.properties["SHAPE_Leng"] !== null
            ? autolinker.link(
                  String(feature.properties["SHAPE_Leng"])
                      .replace(/'/g, "'")
                      .toLocaleString()
              )
            : "") +
        "</td>\
            </tr>\
        </table>";
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on("popupopen", function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_ADMINISTRASI_LN_50K_30_0() {
    return {
        pane: "pane_ADMINISTRASI_LN_50K_30",
        opacity: 1,
        color: "rgba(183,72,75,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: false,
    };
}
map.createPane("pane_ADMINISTRASI_LN_50K_30");
map.getPane("pane_ADMINISTRASI_LN_50K_30").style.zIndex = 430;
map.getPane("pane_ADMINISTRASI_LN_50K_30").style["mix-blend-mode"] = "normal";
var layer_ADMINISTRASI_LN_50K_30 = new L.geoJson(json_ADMINISTRASI_LN_50K_30, {
    attribution: "",
    interactive: false,
    dataVar: "json_ADMINISTRASI_LN_50K_30",
    layerName: "layer_ADMINISTRASI_LN_50K_30",
    pane: "pane_ADMINISTRASI_LN_50K_30",
    onEachFeature: pop_ADMINISTRASI_LN_50K_30,
    style: style_ADMINISTRASI_LN_50K_30_0,
});
bounds_group.addLayer(layer_ADMINISTRASI_LN_50K_30);
map.addLayer(layer_ADMINISTRASI_LN_50K_30);
setBounds();
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    },
});
