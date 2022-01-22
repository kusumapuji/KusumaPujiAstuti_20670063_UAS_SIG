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
        });var format_PONDOKPESANTREN_1 = new ol.format.GeoJSON();
var features_PONDOKPESANTREN_1 = format_PONDOKPESANTREN_1.readFeatures(json_PONDOKPESANTREN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PONDOKPESANTREN_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PONDOKPESANTREN_1.addFeatures(features_PONDOKPESANTREN_1);var lyr_PONDOKPESANTREN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PONDOKPESANTREN_1, 
                style: style_PONDOKPESANTREN_1,
                title: '<img src="styles/legend/PONDOKPESANTREN_1.png" /> PONDOK PESANTREN'
            });

lyr_KabupatenDemak_0.setVisible(true);lyr_PONDOKPESANTREN_1.setVisible(true);
var layersList = [baseLayer,lyr_KabupatenDemak_0,lyr_PONDOKPESANTREN_1];
lyr_KabupatenDemak_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', });
lyr_PONDOKPESANTREN_1.set('fieldAliases', {'nama ponpe': 'nama ponpe', 'alamat': 'alamat', 'pengasuh': 'pengasuh', 'y': 'y', 'x': 'x', });
lyr_KabupatenDemak_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_PONDOKPESANTREN_1.set('fieldImages', {'nama ponpe': 'TextEdit', 'alamat': 'TextEdit', 'pengasuh': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_KabupatenDemak_0.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', });
lyr_PONDOKPESANTREN_1.set('fieldLabels', {'nama ponpe': 'inline label', 'alamat': 'inline label', 'pengasuh': 'inline label', 'y': 'no label', 'x': 'no label', });
lyr_PONDOKPESANTREN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});