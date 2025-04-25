var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_20241211_RencanaUmumR320241211_LandUse_1 = new ol.format.GeoJSON();
var features_20241211_RencanaUmumR320241211_LandUse_1 = format_20241211_RencanaUmumR320241211_LandUse_1.readFeatures(json_20241211_RencanaUmumR320241211_LandUse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20241211_RencanaUmumR320241211_LandUse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20241211_RencanaUmumR320241211_LandUse_1.addFeatures(features_20241211_RencanaUmumR320241211_LandUse_1);
var lyr_20241211_RencanaUmumR320241211_LandUse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20241211_RencanaUmumR320241211_LandUse_1, 
                style: style_20241211_RencanaUmumR320241211_LandUse_1,
                popuplayertitle: '20241211_Rencana Umum R3 — 20241211_Land Use',
                interactive: false,
    title: '20241211_Rencana Umum R3 — 20241211_Land Use<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_1.png" /> Campuran Intensitas Menengah/Sedang<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_2.png" /> Campuran Intensitas Tinggi<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_3.png" /> Ekosistem Mangrove<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_4.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_5.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_6.png" /> Pariwisata<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_7.png" /> Pemakaman<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_8.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_9.png" /> Pengelolaan Persampahan<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_10.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_11.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_12.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_13.png" /> Pergudangan<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_14.png" /> Perikanan Budi Daya<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_15.png" /> Perkantoran<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_16.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_17.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_18.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_19.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_20.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_21.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_22.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_23.png" /> SPU Skala Kecamatan / SWP<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_24.png" /> SPU Skala Kelurahan / SSWP<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_25.png" /> SPU Skala RW<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_26.png" /> Rimba Kota<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_27.png" /> Taman Lingkungan<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_28.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_29.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_30.png" /> Taman Kota<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_31.png" /> Jalur Hijau<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_32.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_LandUse_1_33.png" /> Transportasi<br />' });
var format_20241211_RencanaUmumR320241211_ROW_Polygon_2 = new ol.format.GeoJSON();
var features_20241211_RencanaUmumR320241211_ROW_Polygon_2 = format_20241211_RencanaUmumR320241211_ROW_Polygon_2.readFeatures(json_20241211_RencanaUmumR320241211_ROW_Polygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20241211_RencanaUmumR320241211_ROW_Polygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20241211_RencanaUmumR320241211_ROW_Polygon_2.addFeatures(features_20241211_RencanaUmumR320241211_ROW_Polygon_2);
var lyr_20241211_RencanaUmumR320241211_ROW_Polygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20241211_RencanaUmumR320241211_ROW_Polygon_2, 
                style: style_20241211_RencanaUmumR320241211_ROW_Polygon_2,
                popuplayertitle: '20241211_Rencana Umum R3 — 20241211_ROW_Polygon',
                interactive: false,
                title: '<img src="styles/legend/20241211_RencanaUmumR320241211_ROW_Polygon_2.png" /> 20241211_Rencana Umum R3 — 20241211_ROW_Polygon'
            });
var format_20241211_RencanaUmumR3BDR_Blok_3 = new ol.format.GeoJSON();
var features_20241211_RencanaUmumR3BDR_Blok_3 = format_20241211_RencanaUmumR3BDR_Blok_3.readFeatures(json_20241211_RencanaUmumR3BDR_Blok_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20241211_RencanaUmumR3BDR_Blok_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20241211_RencanaUmumR3BDR_Blok_3.addFeatures(features_20241211_RencanaUmumR3BDR_Blok_3);
var lyr_20241211_RencanaUmumR3BDR_Blok_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20241211_RencanaUmumR3BDR_Blok_3, 
                style: style_20241211_RencanaUmumR3BDR_Blok_3,
                popuplayertitle: '20241211_Rencana Umum R3 — BDR_Blok',
                interactive: false,
    title: '20241211_Rencana Umum R3 — BDR_Blok<br />\
    <img src="styles/legend/20241211_RencanaUmumR3BDR_Blok_3_0.png" /> Blok 1<br />\
    <img src="styles/legend/20241211_RencanaUmumR3BDR_Blok_3_1.png" /> Blok 2<br />\
    <img src="styles/legend/20241211_RencanaUmumR3BDR_Blok_3_2.png" /> Blok 3<br />' });
var format_20241211_RencanaUmumR3BDR_SubBlok_4 = new ol.format.GeoJSON();
var features_20241211_RencanaUmumR3BDR_SubBlok_4 = format_20241211_RencanaUmumR3BDR_SubBlok_4.readFeatures(json_20241211_RencanaUmumR3BDR_SubBlok_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20241211_RencanaUmumR3BDR_SubBlok_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20241211_RencanaUmumR3BDR_SubBlok_4.addFeatures(features_20241211_RencanaUmumR3BDR_SubBlok_4);
var lyr_20241211_RencanaUmumR3BDR_SubBlok_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20241211_RencanaUmumR3BDR_SubBlok_4, 
                style: style_20241211_RencanaUmumR3BDR_SubBlok_4,
                popuplayertitle: '20241211_Rencana Umum R3 — BDR_SubBlok',
                interactive: false,
                title: '20241211_Rencana Umum R3 — BDR_SubBlok'
            });
var format_20241211_RencanaUmumR3KawasanMakro200ha_5 = new ol.format.GeoJSON();
var features_20241211_RencanaUmumR3KawasanMakro200ha_5 = format_20241211_RencanaUmumR3KawasanMakro200ha_5.readFeatures(json_20241211_RencanaUmumR3KawasanMakro200ha_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20241211_RencanaUmumR3KawasanMakro200ha_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20241211_RencanaUmumR3KawasanMakro200ha_5.addFeatures(features_20241211_RencanaUmumR3KawasanMakro200ha_5);
var lyr_20241211_RencanaUmumR3KawasanMakro200ha_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20241211_RencanaUmumR3KawasanMakro200ha_5, 
                style: style_20241211_RencanaUmumR3KawasanMakro200ha_5,
                popuplayertitle: '20241211_Rencana Umum R3 — Kawasan Makro 200ha',
                interactive: false,
                title: '20241211_Rencana Umum R3 — Kawasan Makro 200ha'
            });
var format_20241211_RencanaUmumR320241211_ROW_Polyline_6 = new ol.format.GeoJSON();
var features_20241211_RencanaUmumR320241211_ROW_Polyline_6 = format_20241211_RencanaUmumR320241211_ROW_Polyline_6.readFeatures(json_20241211_RencanaUmumR320241211_ROW_Polyline_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20241211_RencanaUmumR320241211_ROW_Polyline_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20241211_RencanaUmumR320241211_ROW_Polyline_6.addFeatures(features_20241211_RencanaUmumR320241211_ROW_Polyline_6);
var lyr_20241211_RencanaUmumR320241211_ROW_Polyline_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20241211_RencanaUmumR320241211_ROW_Polyline_6, 
                style: style_20241211_RencanaUmumR320241211_ROW_Polyline_6,
                popuplayertitle: '20241211_Rencana Umum R3 — 20241211_ROW_Polyline',
                interactive: false,
    title: '20241211_Rencana Umum R3 — 20241211_ROW_Polyline<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_ROW_Polyline_6_0.png" /> ROW 40 - Kolektor Sekunder<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_ROW_Polyline_6_1.png" /> ROW 24 - Lokal Sekunder<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_ROW_Polyline_6_2.png" /> ROW 12 - Shared Street<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_ROW_Polyline_6_3.png" /> ROW 12 - Lokal Sekunder<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_ROW_Polyline_6_4.png" /> ROW 12 - Lokal Tersier<br />\
    <img src="styles/legend/20241211_RencanaUmumR320241211_ROW_Polyline_6_5.png" /> ROW 6 - Lokal Tersier<br />' });
var format_PERSILBANGUNAN_7 = new ol.format.GeoJSON();
var features_PERSILBANGUNAN_7 = format_PERSILBANGUNAN_7.readFeatures(json_PERSILBANGUNAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERSILBANGUNAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERSILBANGUNAN_7.addFeatures(features_PERSILBANGUNAN_7);
var lyr_PERSILBANGUNAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERSILBANGUNAN_7, 
                style: style_PERSILBANGUNAN_7,
                popuplayertitle: 'PERSIL BANGUNAN',
                interactive: true,
                title: '<img src="styles/legend/PERSILBANGUNAN_7.png" /> PERSIL BANGUNAN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_20241211_RencanaUmumR320241211_LandUse_1.setVisible(true);lyr_20241211_RencanaUmumR320241211_ROW_Polygon_2.setVisible(true);lyr_20241211_RencanaUmumR3BDR_Blok_3.setVisible(true);lyr_20241211_RencanaUmumR3BDR_SubBlok_4.setVisible(true);lyr_20241211_RencanaUmumR3KawasanMakro200ha_5.setVisible(true);lyr_20241211_RencanaUmumR320241211_ROW_Polyline_6.setVisible(true);lyr_PERSILBANGUNAN_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20241211_RencanaUmumR320241211_LandUse_1,lyr_20241211_RencanaUmumR320241211_ROW_Polygon_2,lyr_20241211_RencanaUmumR3BDR_Blok_3,lyr_20241211_RencanaUmumR3BDR_SubBlok_4,lyr_20241211_RencanaUmumR3KawasanMakro200ha_5,lyr_20241211_RencanaUmumR320241211_ROW_Polyline_6,lyr_PERSILBANGUNAN_7];
lyr_20241211_RencanaUmumR320241211_LandUse_1.set('fieldAliases', {'fid': 'fid', 'NAMPGM': 'NAMPGM', 'NAMOBJ': 'NAMOBJ', 'KODPGM': 'KODPGM', 'NAMSZN': 'NAMSZN', 'KODSZN': 'KODSZN', 'NAMZON': 'NAMZON', 'KODZON': 'KODZON', 'NAMUZN': 'NAMUZN', 'KDB_maks': 'KDB_maks', 'KDH_min': 'KDH_min', 'KTB_maks': 'KTB_maks', 'KB_maks': 'KB_maks', 'TIPE': 'TIPE', 'KAPJIWA': 'KAPJIWA', 'Fungsi': 'Fungsi', 'KLB_max': 'KLB_max', 'Luas_ha': 'Luas_ha', });
lyr_20241211_RencanaUmumR320241211_ROW_Polygon_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_20241211_RencanaUmumR3BDR_Blok_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', });
lyr_20241211_RencanaUmumR3BDR_SubBlok_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', });
lyr_20241211_RencanaUmumR3KawasanMakro200ha_5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_20241211_RencanaUmumR320241211_ROW_Polyline_6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Tipe': 'Tipe', 'Fungsi': 'Fungsi', 'Detail': 'Detail', });
lyr_PERSILBANGUNAN_7.set('fieldAliases', {'Id': 'Id', 'Nomor': 'Nomor', 'air_bersih': 'air_bersih', 'kode_unik': 'kode_unik', 'internet_w': 'internet_w', });
lyr_20241211_RencanaUmumR320241211_LandUse_1.set('fieldImages', {'fid': '', 'NAMPGM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'KODPGM': 'TextEdit', 'NAMSZN': 'TextEdit', 'KODSZN': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'TextEdit', 'NAMUZN': 'TextEdit', 'KDB_maks': 'TextEdit', 'KDH_min': 'TextEdit', 'KTB_maks': 'TextEdit', 'KB_maks': 'TextEdit', 'TIPE': 'TextEdit', 'KAPJIWA': 'TextEdit', 'Fungsi': 'TextEdit', 'KLB_max': 'TextEdit', 'Luas_ha': 'TextEdit', });
lyr_20241211_RencanaUmumR320241211_ROW_Polygon_2.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_20241211_RencanaUmumR3BDR_Blok_3.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', });
lyr_20241211_RencanaUmumR3BDR_SubBlok_4.set('fieldImages', {'fid': '', 'Layer': '', });
lyr_20241211_RencanaUmumR3KawasanMakro200ha_5.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_20241211_RencanaUmumR320241211_ROW_Polyline_6.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'Tipe': 'TextEdit', 'Fungsi': 'TextEdit', 'Detail': 'TextEdit', });
lyr_PERSILBANGUNAN_7.set('fieldImages', {'Id': 'Range', 'Nomor': 'Range', 'air_bersih': 'TextEdit', 'kode_unik': 'TextEdit', 'internet_w': 'TextEdit', });
lyr_20241211_RencanaUmumR320241211_LandUse_1.set('fieldLabels', {'fid': 'no label', 'NAMPGM': 'no label', 'NAMOBJ': 'no label', 'KODPGM': 'no label', 'NAMSZN': 'no label', 'KODSZN': 'no label', 'NAMZON': 'no label', 'KODZON': 'no label', 'NAMUZN': 'no label', 'KDB_maks': 'no label', 'KDH_min': 'no label', 'KTB_maks': 'no label', 'KB_maks': 'no label', 'TIPE': 'no label', 'KAPJIWA': 'no label', 'Fungsi': 'no label', 'KLB_max': 'no label', 'Luas_ha': 'no label', });
lyr_20241211_RencanaUmumR320241211_ROW_Polygon_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_20241211_RencanaUmumR3BDR_Blok_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', });
lyr_20241211_RencanaUmumR3BDR_SubBlok_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'hidden field', });
lyr_20241211_RencanaUmumR3KawasanMakro200ha_5.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_20241211_RencanaUmumR320241211_ROW_Polyline_6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'Tipe': 'no label', 'Fungsi': 'no label', 'Detail': 'no label', });
lyr_PERSILBANGUNAN_7.set('fieldLabels', {'Id': 'no label', 'Nomor': 'no label', 'air_bersih': 'no label', 'kode_unik': 'no label', 'internet_w': 'no label', });
lyr_PERSILBANGUNAN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});