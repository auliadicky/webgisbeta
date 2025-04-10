var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_RT_1_Bukit_Raya_1 = new ol.format.GeoJSON();
var features_RT_1_Bukit_Raya_1 = format_RT_1_Bukit_Raya_1.readFeatures(json_RT_1_Bukit_Raya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_1_Bukit_Raya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_1_Bukit_Raya_1.addFeatures(features_RT_1_Bukit_Raya_1);
var lyr_RT_1_Bukit_Raya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_1_Bukit_Raya_1, 
                style: style_RT_1_Bukit_Raya_1,
                popuplayertitle: 'RT_1_Bukit_Raya',
                interactive: true,
                title: '<img src="styles/legend/RT_1_Bukit_Raya_1.png" /> RT_1_Bukit_Raya'
            });
var format_Persil_Perjas_Sepaku_2 = new ol.format.GeoJSON();
var features_Persil_Perjas_Sepaku_2 = format_Persil_Perjas_Sepaku_2.readFeatures(json_Persil_Perjas_Sepaku_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Persil_Perjas_Sepaku_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Persil_Perjas_Sepaku_2.addFeatures(features_Persil_Perjas_Sepaku_2);
var lyr_Persil_Perjas_Sepaku_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Persil_Perjas_Sepaku_2, 
                style: style_Persil_Perjas_Sepaku_2,
                popuplayertitle: 'Persil_Perjas_Sepaku',
                interactive: true,
                title: '<img src="styles/legend/Persil_Perjas_Sepaku_2.png" /> Persil_Perjas_Sepaku'
            });
var format_JalanEksisting_3 = new ol.format.GeoJSON();
var features_JalanEksisting_3 = format_JalanEksisting_3.readFeatures(json_JalanEksisting_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanEksisting_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanEksisting_3.addFeatures(features_JalanEksisting_3);
var lyr_JalanEksisting_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanEksisting_3, 
                style: style_JalanEksisting_3,
                popuplayertitle: 'Jalan-Eksisting',
                interactive: true,
                title: '<img src="styles/legend/JalanEksisting_3.png" /> Jalan-Eksisting'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_RT_1_Bukit_Raya_1.setVisible(true);lyr_Persil_Perjas_Sepaku_2.setVisible(true);lyr_JalanEksisting_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_RT_1_Bukit_Raya_1,lyr_Persil_Perjas_Sepaku_2,lyr_JalanEksisting_3];
lyr_RT_1_Bukit_Raya_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Area': 'Shape_Area', 'Nomor': 'Nomor', 'Kode_Unik': 'Kode_Unik', 'Nama': 'Nama', 'Sumber_Air': 'Sumber_Air', 'Jenis_Klos': 'Jenis_Klos', 'Tempat_BAB': 'Tempat_BAB', 'Pembuangan': 'Pembuangan', 'Mata_Penca': 'Mata_Penca', 'Daya_Listr': 'Daya_Listr', 'Status_Rum': 'Status_Rum', 'Faskes': 'Faskes', 'DESA': 'DESA', 'KODE_UNI_1': 'KODE_UNI_1', 'NOMOR2': 'NOMOR2', });
lyr_Persil_Perjas_Sepaku_2.set('fieldAliases', {'_ID': '_ID', '_REMARKS': '_REMARKS', '_REC_TIME': '_REC_TIME', '_LATITUDE': '_LATITUDE', '_LONGITUDE': '_LONGITUDE', 'kodefoto': 'kodefoto', });
lyr_JalanEksisting_3.set('fieldAliases', {'Id': 'Id', 'Jenis_Jala': 'Jenis_Jala', });
lyr_RT_1_Bukit_Raya_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nomor': 'TextEdit', 'Kode_Unik': 'TextEdit', 'Nama': 'TextEdit', 'Sumber_Air': 'TextEdit', 'Jenis_Klos': 'TextEdit', 'Tempat_BAB': 'TextEdit', 'Pembuangan': 'TextEdit', 'Mata_Penca': 'TextEdit', 'Daya_Listr': 'TextEdit', 'Status_Rum': 'TextEdit', 'Faskes': 'TextEdit', 'DESA': 'TextEdit', 'KODE_UNI_1': 'TextEdit', 'NOMOR2': 'TextEdit', });
lyr_Persil_Perjas_Sepaku_2.set('fieldImages', {'_ID': 'TextEdit', '_REMARKS': 'TextEdit', '_REC_TIME': 'TextEdit', '_LATITUDE': 'TextEdit', '_LONGITUDE': 'TextEdit', 'kodefoto': 'TextEdit', });
lyr_JalanEksisting_3.set('fieldImages', {'Id': '', 'Jenis_Jala': '', });
lyr_RT_1_Bukit_Raya_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Area': 'no label', 'Nomor': 'no label', 'Kode_Unik': 'no label', 'Nama': 'no label', 'Sumber_Air': 'no label', 'Jenis_Klos': 'no label', 'Tempat_BAB': 'no label', 'Pembuangan': 'no label', 'Mata_Penca': 'no label', 'Daya_Listr': 'no label', 'Status_Rum': 'no label', 'Faskes': 'no label', 'DESA': 'no label', 'KODE_UNI_1': 'no label', 'NOMOR2': 'no label', });
lyr_Persil_Perjas_Sepaku_2.set('fieldLabels', {'_ID': 'no label', '_REMARKS': 'no label', '_REC_TIME': 'no label', '_LATITUDE': 'no label', '_LONGITUDE': 'no label', 'kodefoto': 'no label', });
lyr_JalanEksisting_3.set('fieldLabels', {'Id': 'no label', 'Jenis_Jala': 'no label', });
lyr_JalanEksisting_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});