var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PendudukLaki_0 = new ol.format.GeoJSON();
var features_PendudukLaki_0 = format_PendudukLaki_0.readFeatures(json_PendudukLaki_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PendudukLaki_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PendudukLaki_0.addFeatures(features_PendudukLaki_0);var lyr_PendudukLaki_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PendudukLaki_0, 
                style: style_PendudukLaki_0,
    title: 'Penduduk Laki<br />\
    <img src="styles/legend/PendudukLaki_0_0.png" />  622.0000 - 3633.0000 <br />\
    <img src="styles/legend/PendudukLaki_0_1.png" />  3633.0000 - 6644.0000 <br />\
    <img src="styles/legend/PendudukLaki_0_2.png" />  6644.0000 - 9655.0000 <br />\
    <img src="styles/legend/PendudukLaki_0_3.png" />  9655.0000 - 12666.0000 <br />\
    <img src="styles/legend/PendudukLaki_0_4.png" />  12666.0000 - 15677.0000 <br />'
        });var format_PendudukPerempuan_1 = new ol.format.GeoJSON();
var features_PendudukPerempuan_1 = format_PendudukPerempuan_1.readFeatures(json_PendudukPerempuan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PendudukPerempuan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PendudukPerempuan_1.addFeatures(features_PendudukPerempuan_1);var lyr_PendudukPerempuan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PendudukPerempuan_1, 
                style: style_PendudukPerempuan_1,
    title: 'Penduduk Perempuan<br />\
    <img src="styles/legend/PendudukPerempuan_1_0.png" />  628.0000 - 3675.8000 <br />\
    <img src="styles/legend/PendudukPerempuan_1_1.png" />  3675.8000 - 6723.6000 <br />\
    <img src="styles/legend/PendudukPerempuan_1_2.png" />  6723.6000 - 9771.4000 <br />\
    <img src="styles/legend/PendudukPerempuan_1_3.png" />  9771.4000 - 12819.2000 <br />\
    <img src="styles/legend/PendudukPerempuan_1_4.png" />  12819.2000 - 15867.0000 <br />'
        });var format_LuasWilayah_2 = new ol.format.GeoJSON();
var features_LuasWilayah_2 = format_LuasWilayah_2.readFeatures(json_LuasWilayah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuasWilayah_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LuasWilayah_2.addFeatures(features_LuasWilayah_2);var lyr_LuasWilayah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LuasWilayah_2, 
                style: style_LuasWilayah_2,
    title: 'Luas Wilayah<br />\
    <img src="styles/legend/LuasWilayah_2_0.png" />  1.0600 - 6.9240 <br />\
    <img src="styles/legend/LuasWilayah_2_1.png" />  6.9240 - 12.7880 <br />\
    <img src="styles/legend/LuasWilayah_2_2.png" />  12.7880 - 18.6520 <br />\
    <img src="styles/legend/LuasWilayah_2_3.png" />  18.6520 - 24.5160 <br />\
    <img src="styles/legend/LuasWilayah_2_4.png" />  24.5160 - 30.3800 <br />'
        });var format_Kepadatan_3 = new ol.format.GeoJSON();
var features_Kepadatan_3 = format_Kepadatan_3.readFeatures(json_Kepadatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kepadatan_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Kepadatan_3.addFeatures(features_Kepadatan_3);var lyr_Kepadatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kepadatan_3, 
                style: style_Kepadatan_3,
    title: 'Kepadatan<br />\
    <img src="styles/legend/Kepadatan_3_0.png" />  0.0000 - 1057.4000 <br />\
    <img src="styles/legend/Kepadatan_3_1.png" />  1057.4000 - 2114.8000 <br />\
    <img src="styles/legend/Kepadatan_3_2.png" />  2114.8000 - 3172.2000 <br />\
    <img src="styles/legend/Kepadatan_3_3.png" />  3172.2000 - 4229.6000 <br />\
    <img src="styles/legend/Kepadatan_3_4.png" />  4229.6000 - 5287.0000 <br />'
        });var format_JumlahPenduduk_4 = new ol.format.GeoJSON();
var features_JumlahPenduduk_4 = format_JumlahPenduduk_4.readFeatures(json_JumlahPenduduk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahPenduduk_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahPenduduk_4.addFeatures(features_JumlahPenduduk_4);var lyr_JumlahPenduduk_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahPenduduk_4, 
                style: style_JumlahPenduduk_4,
    title: 'Jumlah Penduduk<br />\
    <img src="styles/legend/JumlahPenduduk_4_0.png" />  1250.0000 - 7308.8000 <br />\
    <img src="styles/legend/JumlahPenduduk_4_1.png" />  7308.8000 - 13367.6000 <br />\
    <img src="styles/legend/JumlahPenduduk_4_2.png" />  13367.6000 - 19426.4000 <br />\
    <img src="styles/legend/JumlahPenduduk_4_3.png" />  19426.4000 - 25485.2000 <br />\
    <img src="styles/legend/JumlahPenduduk_4_4.png" />  25485.2000 - 31544.0000 <br />'
        });var format_JumlahKK_5 = new ol.format.GeoJSON();
var features_JumlahKK_5 = format_JumlahKK_5.readFeatures(json_JumlahKK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahKK_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahKK_5.addFeatures(features_JumlahKK_5);var lyr_JumlahKK_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahKK_5, 
                style: style_JumlahKK_5,
    title: 'Jumlah KK<br />\
    <img src="styles/legend/JumlahKK_5_0.png" />  434 - 2374 <br />\
    <img src="styles/legend/JumlahKK_5_1.png" />  2374 - 4314 <br />\
    <img src="styles/legend/JumlahKK_5_2.png" />  4314 - 6254 <br />\
    <img src="styles/legend/JumlahKK_5_3.png" />  6254 - 8194 <br />\
    <img src="styles/legend/JumlahKK_5_4.png" />  8194 - 10134 <br />'
        });

lyr_PendudukLaki_0.setVisible(true);lyr_PendudukPerempuan_1.setVisible(true);lyr_LuasWilayah_2.setVisible(true);lyr_Kepadatan_3.setVisible(true);lyr_JumlahPenduduk_4.setVisible(true);lyr_JumlahKK_5.setVisible(true);
var layersList = [baseLayer,lyr_PendudukLaki_0,lyr_PendudukPerempuan_1,lyr_LuasWilayah_2,lyr_Kepadatan_3,lyr_JumlahPenduduk_4,lyr_JumlahKK_5];
lyr_PendudukLaki_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'PRIA': 'PRIA', });
lyr_PendudukPerempuan_1.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'WANITA': 'WANITA', });
lyr_LuasWilayah_2.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'LUAS_WILAY': 'LUAS_WILAY', });
lyr_Kepadatan_3.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KEPADATAN': 'KEPADATAN', });
lyr_JumlahPenduduk_4.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'JUMLAH_PEN': 'JUMLAH_PEN', });
lyr_JumlahKK_5.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'JUMLAH_KK': 'JUMLAH_KK', });
lyr_PendudukLaki_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'PRIA': 'TextEdit', });
lyr_PendudukPerempuan_1.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'WANITA': 'TextEdit', });
lyr_LuasWilayah_2.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'LUAS_WILAY': 'TextEdit', });
lyr_Kepadatan_3.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KEPADATAN': 'TextEdit', });
lyr_JumlahPenduduk_4.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'JUMLAH_PEN': 'TextEdit', });
lyr_JumlahKK_5.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'JUMLAH_KK': 'TextEdit', });
lyr_PendudukLaki_0.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', 'PRIA': 'inline label', });
lyr_PendudukPerempuan_1.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', 'WANITA': 'inline label', });
lyr_LuasWilayah_2.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', 'LUAS_WILAY': 'inline label', });
lyr_Kepadatan_3.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', 'KEPADATAN': 'inline label', });
lyr_JumlahPenduduk_4.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', 'JUMLAH_PEN': 'inline label', });
lyr_JumlahKK_5.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', 'JUMLAH_KK': 'inline label', });
lyr_JumlahKK_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});