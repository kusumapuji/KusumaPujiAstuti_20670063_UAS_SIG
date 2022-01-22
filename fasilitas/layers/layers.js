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
        });var format_FASILITASUMUM_1 = new ol.format.GeoJSON();
var features_FASILITASUMUM_1 = format_FASILITASUMUM_1.readFeatures(json_FASILITASUMUM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASILITASUMUM_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FASILITASUMUM_1.addFeatures(features_FASILITASUMUM_1);var lyr_FASILITASUMUM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FASILITASUMUM_1, 
                style: style_FASILITASUMUM_1,
                title: '<img src="styles/legend/FASILITASUMUM_1.png" /> FASILITAS UMUM'
            });var format_ATM_2 = new ol.format.GeoJSON();
var features_ATM_2 = format_ATM_2.readFeatures(json_ATM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATM_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ATM_2.addFeatures(features_ATM_2);var lyr_ATM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ATM_2, 
                style: style_ATM_2,
                title: '<img src="styles/legend/ATM_2.png" /> ATM'
            });

lyr_KabupatenDemak_0.setVisible(true);lyr_FASILITASUMUM_1.setVisible(true);lyr_ATM_2.setVisible(true);
var layersList = [baseLayer,lyr_KabupatenDemak_0,lyr_FASILITASUMUM_1,lyr_ATM_2];
lyr_KabupatenDemak_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', });
lyr_FASILITASUMUM_1.set('fieldAliases', {'fasilitas': 'fasilitas', 'alamat': 'alamat', 'no.telp': 'no.telp', 'y': 'y', 'x': 'x', });
lyr_ATM_2.set('fieldAliases', {'nama bank': 'nama bank', 'alamat': 'alamat', 'y': 'y', 'x': 'x', 'telp': 'telp', });
lyr_KabupatenDemak_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_FASILITASUMUM_1.set('fieldImages', {'fasilitas': 'TextEdit', 'alamat': 'TextEdit', 'no.telp': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_ATM_2.set('fieldImages', {'nama bank': 'TextEdit', 'alamat': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'telp': 'TextEdit', });
lyr_KabupatenDemak_0.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', });
lyr_FASILITASUMUM_1.set('fieldLabels', {'fasilitas': 'inline label', 'alamat': 'inline label', 'no.telp': 'inline label', 'y': 'no label', 'x': 'no label', });
lyr_ATM_2.set('fieldLabels', {'nama bank': 'inline label', 'alamat': 'inline label', 'y': 'no label', 'x': 'no label', 'telp': 'inline label', });
lyr_ATM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});