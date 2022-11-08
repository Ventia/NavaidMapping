var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1 = new ol.format.GeoJSON();
var features_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1 = format_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.readFeatures(json_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.addFeatures(features_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1);
var lyr_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1, 
                style: style_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1,
                interactive: true,
                title: '<img src="styles/legend/Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.png" /> Ventia_Managed_Navaids_20221104 Ventia-Managed Nav Aids'
            });

lyr_Satellite_0.setVisible(true);lyr_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1];
lyr_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Ventia_Managed_Navaids_20221104VentiaManagedNavAids_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});