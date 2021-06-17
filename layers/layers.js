var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_2 = new ol.format.GeoJSON();
var features_Departamento_2 = format_Departamento_2.readFeatures(json_Departamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_2.addFeatures(features_Departamento_2);
var lyr_Departamento_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamento_2, 
                style: style_Departamento_2,
                interactive: true,
                title: '<img src="styles/legend/Departamento_2.png" /> Departamento'
            });
var format_PoblacinpordepartamentoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_3 = format_PoblacinpordepartamentoINDEC_3.readFeatures(json_PoblacinpordepartamentoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_3.addFeatures(features_PoblacinpordepartamentoINDEC_3);
var lyr_PoblacinpordepartamentoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_3, 
                style: style_PoblacinpordepartamentoINDEC_3,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_0.png" /> 10.000 - 56.375<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_1.png" /> 56.376 - 120.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_2.png" /> 120.001 - 203.675<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_3.png" /> 203.676 o más<br />'
        });
var format_ViviendaruralINDEC_4 = new ol.format.GeoJSON();
var features_ViviendaruralINDEC_4 = format_ViviendaruralINDEC_4.readFeatures(json_ViviendaruralINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendaruralINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendaruralINDEC_4.addFeatures(features_ViviendaruralINDEC_4);
var lyr_ViviendaruralINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendaruralINDEC_4, 
                style: style_ViviendaruralINDEC_4,
                interactive: true,
    title: 'Vivienda rural (INDEC)<br />\
    <img src="styles/legend/ViviendaruralINDEC_4_0.png" /> 25 - 2.500<br />\
    <img src="styles/legend/ViviendaruralINDEC_4_1.png" /> 2.501 - 5.250<br />\
    <img src="styles/legend/ViviendaruralINDEC_4_2.png" /> 5.251 - 12.000<br />\
    <img src="styles/legend/ViviendaruralINDEC_4_3.png" /> 12.001 o más<br />'
        });
var format_PEAINDEC_5 = new ol.format.GeoJSON();
var features_PEAINDEC_5 = format_PEAINDEC_5.readFeatures(json_PEAINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_5.addFeatures(features_PEAINDEC_5);
var lyr_PEAINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_5, 
                style: style_PEAINDEC_5,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_5_0.png" /> 6.250 - 35.500<br />\
    <img src="styles/legend/PEAINDEC_5_1.png" /> 35.501 - 77.250<br />\
    <img src="styles/legend/PEAINDEC_5_2.png" /> 77.251 - 130.000<br />\
    <img src="styles/legend/PEAINDEC_5_3.png" /> 130.001 o más<br />'
        });
var format_CabezasporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasporcinosMAGyP_6 = format_CabezasporcinosMAGyP_6.readFeatures(json_CabezasporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasporcinosMAGyP_6.addFeatures(features_CabezasporcinosMAGyP_6);
var lyr_CabezasporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasporcinosMAGyP_6, 
                style: style_CabezasporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_1.png" /> 150 - 750<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_2.png" /> 751 - 1.750<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_3.png" /> 1.751 - 3.250<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_4.png" /> 3.251 - 10.115<br />'
        });
var format_CabezasovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasovinosMAGyP_7 = format_CabezasovinosMAGyP_7.readFeatures(json_CabezasovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasovinosMAGyP_7.addFeatures(features_CabezasovinosMAGyP_7);
var lyr_CabezasovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasovinosMAGyP_7, 
                style: style_CabezasovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_1.png" /> 275 - 1.650<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_2.png" /> 1.651 - 5.750<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_3.png" /> 5.751 - 34.000<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_4.png" /> 34.001 - 65.025<br />'
        });
var format_CabezascaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezascaprinosMAGyP_8 = format_CabezascaprinosMAGyP_8.readFeatures(json_CabezascaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezascaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezascaprinosMAGyP_8.addFeatures(features_CabezascaprinosMAGyP_8);
var lyr_CabezascaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezascaprinosMAGyP_8, 
                style: style_CabezascaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_1.png" /> 50 - 2.225<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_2.png" /> 2.226 - 6.750<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_3.png" /> 6.751 - 24.000<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_4.png" /> 24.001 - 112.000<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_5.png" /> 112.001 o más<br />'
        });
var format_CabezasbovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasbovinosMAGyP_9 = format_CabezasbovinosMAGyP_9.readFeatures(json_CabezasbovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasbovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasbovinosMAGyP_9.addFeatures(features_CabezasbovinosMAGyP_9);
var lyr_CabezasbovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasbovinosMAGyP_9, 
                style: style_CabezasbovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_1.png" /> 1 - 14.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_2.png" /> 14.001 - 40.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_3.png" /> 40.001 - 85.750<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_4.png" /> 85.751 - 135.000<br />'
        });
var format_HectreasciruelosINDEC_10 = new ol.format.GeoJSON();
var features_HectreasciruelosINDEC_10 = format_HectreasciruelosINDEC_10.readFeatures(json_HectreasciruelosINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasciruelosINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasciruelosINDEC_10.addFeatures(features_HectreasciruelosINDEC_10);
var lyr_HectreasciruelosINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasciruelosINDEC_10, 
                style: style_HectreasciruelosINDEC_10,
                interactive: true,
    title: 'Hectáreas ciruelos (INDEC)<br />\
    <img src="styles/legend/HectreasciruelosINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasciruelosINDEC_10_1.png" /> 1 - 450<br />\
    <img src="styles/legend/HectreasciruelosINDEC_10_2.png" /> 451 - 1.150<br />\
    <img src="styles/legend/HectreasciruelosINDEC_10_3.png" /> 1.151 - 3.250<br />\
    <img src="styles/legend/HectreasciruelosINDEC_10_4.png" /> 3.251 o más<br />'
        });
var format_HectreasdehortalizasINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_11 = format_HectreasdehortalizasINDEC_11.readFeatures(json_HectreasdehortalizasINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_11.addFeatures(features_HectreasdehortalizasINDEC_11);
var lyr_HectreasdehortalizasINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_11, 
                style: style_HectreasdehortalizasINDEC_11,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_1.png" /> 1 - 800<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_2.png" /> 801 - 2.000<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_3.png" /> 2.001 - 4.300<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_4.png" /> 4.301 - 7.200<br />'
        });
var format_HectreasdevidINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdevidINDEC_12 = format_HectreasdevidINDEC_12.readFeatures(json_HectreasdevidINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdevidINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdevidINDEC_12.addFeatures(features_HectreasdevidINDEC_12);
var lyr_HectreasdevidINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdevidINDEC_12, 
                style: style_HectreasdevidINDEC_12,
                interactive: true,
    title: 'Hectáreas de vid (INDEC)<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_1.png" /> 1 - 1.350<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_2.png" /> 1.351 - 8.550<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_3.png" /> 8.551 - 15.000<br />\
    <img src="styles/legend/HectreasdevidINDEC_12_4.png" /> 15.001 o más<br />'
        });
var format_HectreasduraznerosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasduraznerosINDEC_13 = format_HectreasduraznerosINDEC_13.readFeatures(json_HectreasduraznerosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasduraznerosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasduraznerosINDEC_13.addFeatures(features_HectreasduraznerosINDEC_13);
var lyr_HectreasduraznerosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasduraznerosINDEC_13, 
                style: style_HectreasduraznerosINDEC_13,
                interactive: true,
    title: 'Hectáreas durazneros (INDEC)<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_13_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_13_2.png" /> 101 - 1.000<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_13_3.png" /> 1.001 - 2.500<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_13_4.png" /> 2.501 - 3.750<br />'
        });
var format_HectreasdeolivosINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdeolivosINDEC_14 = format_HectreasdeolivosINDEC_14.readFeatures(json_HectreasdeolivosINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeolivosINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeolivosINDEC_14.addFeatures(features_HectreasdeolivosINDEC_14);
var lyr_HectreasdeolivosINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeolivosINDEC_14, 
                style: style_HectreasdeolivosINDEC_14,
                interactive: true,
    title: 'Hectáreas de olivos (INDEC)<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_1.png" /> 1 - 350<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_2.png" /> 351 - 1.350<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_3.png" /> 1.351 - 5.350<br />\
    <img src="styles/legend/HectreasdeolivosINDEC_14_4.png" /> 5.351 - 7.000<br />'
        });
var format_Capacitaciones2019tcnicas_15 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_15 = format_Capacitaciones2019tcnicas_15.readFeatures(json_Capacitaciones2019tcnicas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_15.addFeatures(features_Capacitaciones2019tcnicas_15);
var lyr_Capacitaciones2019tcnicas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_15, 
                style: style_Capacitaciones2019tcnicas_15,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_15.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018tcnicas_16 = new ol.format.GeoJSON();
var features_Capacitaciones2018tcnicas_16 = format_Capacitaciones2018tcnicas_16.readFeatures(json_Capacitaciones2018tcnicas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018tcnicas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018tcnicas_16.addFeatures(features_Capacitaciones2018tcnicas_16);
var lyr_Capacitaciones2018tcnicas_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018tcnicas_16, 
                style: style_Capacitaciones2018tcnicas_16,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018tcnicas_16.png" /> Capacitaciones 2018 (técnicas)'
            });
var format_Localidades_17 = new ol.format.GeoJSON();
var features_Localidades_17 = format_Localidades_17.readFeatures(json_Localidades_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_17.addFeatures(features_Localidades_17);
var lyr_Localidades_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_17, 
                style: style_Localidades_17,
                interactive: true,
                title: '<img src="styles/legend/Localidades_17.png" /> Localidades'
            });
var format_BER_18 = new ol.format.GeoJSON();
var features_BER_18 = format_BER_18.readFeatures(json_BER_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_18.addFeatures(features_BER_18);
var lyr_BER_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_18, 
                style: style_BER_18,
                interactive: true,
                title: '<img src="styles/legend/BER_18.png" /> BER'
            });
var format_BER_19 = new ol.format.GeoJSON();
var features_BER_19 = format_BER_19.readFeatures(json_BER_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_19.addFeatures(features_BER_19);
var lyr_BER_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_19, 
                style: style_BER_19,
                interactive: true,
                title: '<img src="styles/legend/BER_19.png" /> BER'
            });
var format_CAIR_20 = new ol.format.GeoJSON();
var features_CAIR_20 = format_CAIR_20.readFeatures(json_CAIR_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIR_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIR_20.addFeatures(features_CAIR_20);
var lyr_CAIR_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIR_20, 
                style: style_CAIR_20,
                interactive: true,
                title: '<img src="styles/legend/CAIR_20.png" /> CAIR'
            });
var format_Delegacin_21 = new ol.format.GeoJSON();
var features_Delegacin_21 = format_Delegacin_21.readFeatures(json_Delegacin_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_21.addFeatures(features_Delegacin_21);
var lyr_Delegacin_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_21, 
                style: style_Delegacin_21,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_21.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamento_2.setVisible(true);lyr_PoblacinpordepartamentoINDEC_3.setVisible(true);lyr_ViviendaruralINDEC_4.setVisible(true);lyr_PEAINDEC_5.setVisible(true);lyr_CabezasporcinosMAGyP_6.setVisible(true);lyr_CabezasovinosMAGyP_7.setVisible(true);lyr_CabezascaprinosMAGyP_8.setVisible(true);lyr_CabezasbovinosMAGyP_9.setVisible(true);lyr_HectreasciruelosINDEC_10.setVisible(true);lyr_HectreasdehortalizasINDEC_11.setVisible(true);lyr_HectreasdevidINDEC_12.setVisible(true);lyr_HectreasduraznerosINDEC_13.setVisible(true);lyr_HectreasdeolivosINDEC_14.setVisible(true);lyr_Capacitaciones2019tcnicas_15.setVisible(true);lyr_Capacitaciones2018tcnicas_16.setVisible(true);lyr_Localidades_17.setVisible(true);lyr_BER_18.setVisible(true);lyr_BER_19.setVisible(true);lyr_CAIR_20.setVisible(true);lyr_Delegacin_21.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamento_2,lyr_PoblacinpordepartamentoINDEC_3,lyr_ViviendaruralINDEC_4,lyr_PEAINDEC_5,lyr_CabezasporcinosMAGyP_6,lyr_CabezasovinosMAGyP_7,lyr_CabezascaprinosMAGyP_8,lyr_CabezasbovinosMAGyP_9,lyr_HectreasciruelosINDEC_10,lyr_HectreasdehortalizasINDEC_11,lyr_HectreasdevidINDEC_12,lyr_HectreasduraznerosINDEC_13,lyr_HectreasdeolivosINDEC_14,lyr_Capacitaciones2019tcnicas_15,lyr_Capacitaciones2018tcnicas_16,lyr_Localidades_17,lyr_BER_18,lyr_BER_19,lyr_CAIR_20,lyr_Delegacin_21];
lyr_Departamento_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_ViviendaruralINDEC_4.set('fieldAliases', {'Viv. rur': 'Viv. rur', });
lyr_PEAINDEC_5.set('fieldAliases', {'PEA': 'PEA', });
lyr_CabezasporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezascaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasbovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasciruelosINDEC_10.set('fieldAliases', {'Ciruelo': 'Ciruelo', });
lyr_HectreasdehortalizasINDEC_11.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdevidINDEC_12.set('fieldAliases', {'Vid': 'Vid', });
lyr_HectreasduraznerosINDEC_13.set('fieldAliases', {'Duraznero': 'Duraznero', });
lyr_HectreasdeolivosINDEC_14.set('fieldAliases', {'Olivo': 'Olivo', });
lyr_Capacitaciones2019tcnicas_15.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018tcnicas_16.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo': 'Tipo', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Localidades_17.set('fieldAliases', {'Localidad': 'Localidad', 'Personas': 'Personas', });
lyr_BER_18.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BER_19.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_CAIR_20.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', });
lyr_Delegacin_21.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', 'CAD 2020': 'CAD 2020', });
lyr_Departamento_2.set('fieldImages', {'Depto': '', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_ViviendaruralINDEC_4.set('fieldImages', {'Viv. rur': 'TextEdit', });
lyr_PEAINDEC_5.set('fieldImages', {'PEA': 'TextEdit', });
lyr_CabezasporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezascaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasbovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasciruelosINDEC_10.set('fieldImages', {'Ciruelo': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_11.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdevidINDEC_12.set('fieldImages', {'Vid': 'TextEdit', });
lyr_HectreasduraznerosINDEC_13.set('fieldImages', {'Duraznero': 'TextEdit', });
lyr_HectreasdeolivosINDEC_14.set('fieldImages', {'Olivo': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_15.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2018tcnicas_16.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Localidades_17.set('fieldImages', {'Localidad': 'TextEdit', 'Personas': 'TextEdit', });
lyr_BER_18.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BER_19.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_CAIR_20.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Delegacin_21.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', 'CAD 2020': '', });
lyr_Departamento_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_ViviendaruralINDEC_4.set('fieldLabels', {'Viv. rur': 'inline label', });
lyr_PEAINDEC_5.set('fieldLabels', {'PEA': 'inline label', });
lyr_CabezasporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezascaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasbovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasciruelosINDEC_10.set('fieldLabels', {'Ciruelo': 'inline label', });
lyr_HectreasdehortalizasINDEC_11.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdevidINDEC_12.set('fieldLabels', {'Vid': 'inline label', });
lyr_HectreasduraznerosINDEC_13.set('fieldLabels', {'Duraznero': 'inline label', });
lyr_HectreasdeolivosINDEC_14.set('fieldLabels', {'Olivo': 'inline label', });
lyr_Capacitaciones2019tcnicas_15.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018tcnicas_16.set('fieldLabels', {'Localidad': 'inline label', 'Tipo': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Localidades_17.set('fieldLabels', {'Localidad': 'inline label', 'Personas': 'inline label', });
lyr_BER_18.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BER_19.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_CAIR_20.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', });
lyr_Delegacin_21.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', 'CAD 2020': 'inline label', });
lyr_Delegacin_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});