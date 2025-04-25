var size = 0;
var placement = 'point';
function categories_20241211_RencanaUmumR3BDR_Blok_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Blok 1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,66,255,1.0)', lineDash: [6.08,3.04,1.52,3.04,1.52,3.04], lineCap: 'square', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blok 2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [6.08,3.04,1.52,3.04,1.52,3.04], lineCap: 'square', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blok 3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [6.08,3.04,1.52,3.04,1.52,3.04], lineCap: 'square', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_20241211_RencanaUmumR3BDR_Blok_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Layer");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_20241211_RencanaUmumR3BDR_Blok_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
