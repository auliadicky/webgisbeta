var size = 0;
var placement = 'point';
function categories_20241211_RencanaUmumR320241211_ROW_Polyline_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ROW 40 - Kolektor Sekunder':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(68,58,130,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.699999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ROW 24 - Lokal Sekunder':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,131,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ROW 12 - Shared Street':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(75,148,225,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ROW 12 - Lokal Sekunder':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,65,151,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ROW 12 - Lokal Tersier':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,147,80,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ROW 6 - Lokal Tersier':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(197,174,148,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_20241211_RencanaUmumR320241211_ROW_Polyline_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Detail");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_20241211_RencanaUmumR320241211_ROW_Polyline_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
