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
var format_KabupatenDemak_0 = new ol.format.GeoJSON();
var features_KabupatenDemak_0 = format_KabupatenDemak_0.readFeatures(json_KabupatenDemak_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenDemak_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KabupatenDemak_0.addFeatures(features_KabupatenDemak_0);var lyr_KabupatenDemak_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabupatenDemak_0, 
                style: style_KabupatenDemak_0,
    title: 'Kabupaten Demak<br />\
    <img src="styles/legend/KabupatenDemak_0_0.png" /> BONANG<br />\
    <img src="styles/legend/KabupatenDemak_0_1.png" /> DEMAK<br />\
    <img src="styles/legend/KabupatenDemak_0_2.png" /> DEMPET<br />\
    <img src="styles/legend/KabupatenDemak_0_3.png" /> GAJAH<br />\
    <img src="styles/legend/KabupatenDemak_0_4.png" /> GUNTUR<br />\
    <img src="styles/legend/KabupatenDemak_0_5.png" /> KARANGANYAR<br />\
    <img src="styles/legend/KabupatenDemak_0_6.png" /> KARANGAWEN<br />\
    <img src="styles/legend/KabupatenDemak_0_7.png" /> KARANGTENGAH<br />\
    <img src="styles/legend/KabupatenDemak_0_8.png" /> KEBONAGUNG<br />\
    <img src="styles/legend/KabupatenDemak_0_9.png" /> MIJEN<br />\
    <img src="styles/legend/KabupatenDemak_0_10.png" /> MRANGGEN<br />\
    <img src="styles/legend/KabupatenDemak_0_11.png" /> SAYUNG<br />\
    <img src="styles/legend/KabupatenDemak_0_12.png" /> WEDUNG<br />\
    <img src="styles/legend/KabupatenDemak_0_13.png" /> WONOSALAM<br />'
        });var format_SMP_1 = new ol.format.GeoJSON();
var features_SMP_1 = format_SMP_1.readFeatures(json_SMP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMP_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SMP_1.addFeatures(features_SMP_1);var lyr_SMP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMP_1, 
                style: style_SMP_1,
                title: '<img src="styles/legend/SMP_1.png" /> SMP'
            });var format_SMK_2 = new ol.format.GeoJSON();
var features_SMK_2 = format_SMK_2.readFeatures(json_SMK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMK_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SMK_2.addFeatures(features_SMK_2);var lyr_SMK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMK_2, 
                style: style_SMK_2,
                title: '<img src="styles/legend/SMK_2.png" /> SMK'
            });var format_SMA_3 = new ol.format.GeoJSON();
var features_SMA_3 = format_SMA_3.readFeatures(json_SMA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SMA_3.addFeatures(features_SMA_3);var lyr_SMA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMA_3, 
                style: style_SMA_3,
                title: '<img src="styles/legend/SMA_3.png" /> SMA'
            });

lyr_KabupatenDemak_0.setVisible(true);lyr_SMP_1.setVisible(true);lyr_SMK_2.setVisible(true);lyr_SMA_3.setVisible(true);
var layersList = [baseLayer,lyr_KabupatenDemak_0,lyr_SMP_1,lyr_SMK_2,lyr_SMA_3];
lyr_KabupatenDemak_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', });
lyr_SMP_1.set('fieldAliases', {'nama sekol': 'nama sekol', 'npsn': 'npsn', 'status': 'status', 'last sync': 'last sync', 'peserta di': 'peserta di', 'rombel': 'rombel', 'guru': 'guru', 'pegawai': 'pegawai', 'r. kelas': 'r. kelas', 'r. lab': 'r. lab', 'r. perpus': 'r. perpus', 'alamat': 'alamat', 'y': 'y', 'x': 'x', });
lyr_SMK_2.set('fieldAliases', {'nama sekol': 'nama sekol', 'npsn': 'npsn', 'status': 'status', 'last sync': 'last sync', 'peserta di': 'peserta di', 'rombel': 'rombel', 'guru': 'guru', 'pegawai': 'pegawai', 'r. kelas': 'r. kelas', 'r. lab': 'r. lab', 'r. perpus': 'r. perpus', 'alamat': 'alamat', 'y': 'y', 'x': 'x', });
lyr_SMA_3.set('fieldAliases', {'nama sekol': 'nama sekol', 'npsn': 'npsn', 'status': 'status', 'last sync': 'last sync', 'peserta di': 'peserta di', 'rombel': 'rombel', 'guru': 'guru', 'pegawai': 'pegawai', 'r. kelas': 'r. kelas', 'r. lab': 'r. lab', 'r. perpus': 'r. perpus', 'alamat': 'alamat', 'y': 'y', 'x': 'x', });
lyr_KabupatenDemak_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_SMP_1.set('fieldImages', {'nama sekol': 'TextEdit', 'npsn': 'TextEdit', 'status': 'TextEdit', 'last sync': 'TextEdit', 'peserta di': 'TextEdit', 'rombel': 'TextEdit', 'guru': 'TextEdit', 'pegawai': 'TextEdit', 'r. kelas': 'TextEdit', 'r. lab': 'TextEdit', 'r. perpus': 'TextEdit', 'alamat': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_SMK_2.set('fieldImages', {'nama sekol': 'TextEdit', 'npsn': 'TextEdit', 'status': 'TextEdit', 'last sync': 'TextEdit', 'peserta di': 'TextEdit', 'rombel': 'TextEdit', 'guru': 'TextEdit', 'pegawai': 'TextEdit', 'r. kelas': 'TextEdit', 'r. lab': 'TextEdit', 'r. perpus': 'TextEdit', 'alamat': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_SMA_3.set('fieldImages', {'nama sekol': 'TextEdit', 'npsn': 'TextEdit', 'status': 'TextEdit', 'last sync': 'TextEdit', 'peserta di': 'TextEdit', 'rombel': 'TextEdit', 'guru': 'TextEdit', 'pegawai': 'TextEdit', 'r. kelas': 'TextEdit', 'r. lab': 'TextEdit', 'r. perpus': 'TextEdit', 'alamat': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_KabupatenDemak_0.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', });
lyr_SMP_1.set('fieldLabels', {'nama sekol': 'inline label', 'npsn': 'inline label', 'status': 'inline label', 'last sync': 'inline label', 'peserta di': 'inline label', 'rombel': 'inline label', 'guru': 'inline label', 'pegawai': 'inline label', 'r. kelas': 'inline label', 'r. lab': 'inline label', 'r. perpus': 'inline label', 'alamat': 'inline label', 'y': 'no label', 'x': 'no label', });
lyr_SMK_2.set('fieldLabels', {'nama sekol': 'inline label', 'npsn': 'inline label', 'status': 'inline label', 'last sync': 'inline label', 'peserta di': 'inline label', 'rombel': 'inline label', 'guru': 'inline label', 'pegawai': 'inline label', 'r. kelas': 'inline label', 'r. lab': 'inline label', 'r. perpus': 'inline label', 'alamat': 'inline label', 'y': 'no label', 'x': 'no label', });
lyr_SMA_3.set('fieldLabels', {'nama sekol': 'inline label', 'npsn': 'inline label', 'status': 'inline label', 'last sync': 'inline label', 'peserta di': 'inline label', 'rombel': 'inline label', 'guru': 'inline label', 'pegawai': 'inline label', 'r. kelas': 'inline label', 'r. lab': 'inline label', 'r. perpus': 'inline label', 'alamat': 'inline label', 'y': 'no label', 'x': 'no label', });
lyr_SMA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});