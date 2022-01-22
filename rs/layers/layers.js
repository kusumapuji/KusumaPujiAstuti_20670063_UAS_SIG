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
        });var format_RUMAHSAKIT_1 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_1 = format_RUMAHSAKIT_1.readFeatures(json_RUMAHSAKIT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RUMAHSAKIT_1.addFeatures(features_RUMAHSAKIT_1);var lyr_RUMAHSAKIT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_1, 
                style: style_RUMAHSAKIT_1,
                title: '<img src="styles/legend/RUMAHSAKIT_1.png" /> RUMAH SAKIT'
            });var format_PUSKESMAS_2 = new ol.format.GeoJSON();
var features_PUSKESMAS_2 = format_PUSKESMAS_2.readFeatures(json_PUSKESMAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PUSKESMAS_2.addFeatures(features_PUSKESMAS_2);var lyr_PUSKESMAS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSKESMAS_2, 
                style: style_PUSKESMAS_2,
                title: '<img src="styles/legend/PUSKESMAS_2.png" /> PUSKESMAS'
            });

lyr_KabupatenDemak_0.setVisible(true);lyr_RUMAHSAKIT_1.setVisible(true);lyr_PUSKESMAS_2.setVisible(true);
var layersList = [baseLayer,lyr_KabupatenDemak_0,lyr_RUMAHSAKIT_1,lyr_PUSKESMAS_2];
lyr_KabupatenDemak_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', });
lyr_RUMAHSAKIT_1.set('fieldAliases', {'rumah saki': 'rumah saki', 'alamat': 'alamat', 'telp': 'telp', 'y': 'y', 'x': 'x', });
lyr_PUSKESMAS_2.set('fieldAliases', {'pkm': 'pkm', 'alamat': 'alamat', 'y': 'y', 'x': 'x', });
lyr_KabupatenDemak_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_RUMAHSAKIT_1.set('fieldImages', {'rumah saki': 'TextEdit', 'alamat': 'TextEdit', 'telp': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_PUSKESMAS_2.set('fieldImages', {'pkm': 'TextEdit', 'alamat': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_KabupatenDemak_0.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', });
lyr_RUMAHSAKIT_1.set('fieldLabels', {'rumah saki': 'inline label', 'alamat': 'inline label', 'telp': 'inline label', 'y': 'no label', 'x': 'no label', });
lyr_PUSKESMAS_2.set('fieldLabels', {'pkm': 'inline label', 'alamat': 'inline label', 'y': 'no label', 'x': 'no label', });
lyr_PUSKESMAS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});