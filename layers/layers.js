var wms_layers = [];


        var lyr_SatelliteMap_0 = new ol.layer.Tile({
            'title': 'Satellite Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Navaids_20221111_1 = new ol.format.GeoJSON();
var features_Navaids_20221111_1 = format_Navaids_20221111_1.readFeatures(json_Navaids_20221111_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Navaids_20221111_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Navaids_20221111_1.addFeatures(features_Navaids_20221111_1);
var lyr_Navaids_20221111_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Navaids_20221111_1, 
                style: style_Navaids_20221111_1,
                interactive: true,
                title: '<img src="styles/legend/Navaids_20221111_1.png" /> Navaids_20221111'
            });

lyr_SatelliteMap_0.setVisible(true);lyr_Navaids_20221111_1.setVisible(true);
var layersList = [lyr_SatelliteMap_0,lyr_Navaids_20221111_1];
lyr_Navaids_20221111_1.set('fieldAliases', {'Asset_Number': 'Asset_Number', 'Location_Code': 'Location_Code', 'Location': 'Location', 'NavAid_Name': 'NavAid_Name', 'Status': 'Status', 'Northing': 'Northing', 'Easting': 'Easting', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Chart_Character': 'Chart_Character', 'Flash_Sequence': 'Flash_Sequence', 'Light_Range': 'Light_Range', 'Light_Colour': 'Light_Colour', 'Light Make': 'Light Make', 'Light Model': 'Light Model', 'Light Color': 'Light Color', 'Battery Install Date': 'Battery Install Date', 'Battery Type': 'Battery Type', 'Battery Qty': 'Battery Qty', 'Lamp Qty': 'Lamp Qty', 'Lamp Type': 'Lamp Type', 'Regulator': 'Regulator', 'Solar Panel Qty': 'Solar Panel Qty', 'Solar Panel Type': 'Solar Panel Type', 'Situation': 'Situation', 'Risk_Category': 'Risk_Category', 'Infrastructure_Subgroup_Code': 'Infrastructure_Subgroup_Code', 'Service Link': 'Service Link', });
lyr_Navaids_20221111_1.set('fieldImages', {'Asset_Number': 'TextEdit', 'Location_Code': 'TextEdit', 'Location': 'TextEdit', 'NavAid_Name': 'TextEdit', 'Status': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Chart_Character': 'TextEdit', 'Flash_Sequence': 'TextEdit', 'Light_Range': 'TextEdit', 'Light_Colour': 'TextEdit', 'Light Make': 'TextEdit', 'Light Model': 'TextEdit', 'Light Color': 'TextEdit', 'Battery Install Date': 'TextEdit', 'Battery Type': 'TextEdit', 'Battery Qty': 'TextEdit', 'Lamp Qty': 'TextEdit', 'Lamp Type': 'TextEdit', 'Regulator': 'TextEdit', 'Solar Panel Qty': 'TextEdit', 'Solar Panel Type': 'TextEdit', 'Situation': 'TextEdit', 'Risk_Category': 'TextEdit', 'Infrastructure_Subgroup_Code': 'TextEdit', 'Service Link': 'TextEdit', });
lyr_Navaids_20221111_1.set('fieldLabels', {'Asset_Number': 'inline label', 'Location_Code': 'inline label', 'Location': 'inline label', 'NavAid_Name': 'inline label', 'Status': 'inline label', 'Northing': 'inline label', 'Easting': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Chart_Character': 'inline label', 'Flash_Sequence': 'inline label', 'Light_Range': 'inline label', 'Light_Colour': 'inline label', 'Light Make': 'inline label', 'Light Model': 'inline label', 'Light Color': 'inline label', 'Battery Install Date': 'inline label', 'Battery Type': 'inline label', 'Battery Qty': 'inline label', 'Lamp Qty': 'inline label', 'Lamp Type': 'inline label', 'Regulator': 'inline label', 'Solar Panel Qty': 'inline label', 'Solar Panel Type': 'inline label', 'Situation': 'inline label', 'Risk_Category': 'inline label', 'Infrastructure_Subgroup_Code': 'inline label', 'Service Link': 'no label', });
lyr_Navaids_20221111_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});