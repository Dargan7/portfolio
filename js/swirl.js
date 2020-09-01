(function() {
    // CanvasSwirl 0.8 by Andrew Stibbard: http://xhva.net  http://jsswirl.com
    var start = function() {
        if ($(window).width() < 480) {
            swirl1 = new CanvasSwirl(
                document.getElementById('swirl1_surface'),
            {
                "count": "50",
                "shape": "circles",
                "radiusInnerMax": "50%",
                "radiusInnerMin": "25%",
                "radiusOuterMax": "50%",
                "radiusOuterMin": "50%",
                "thicknessMin": 1,
                "thicknessMax": 1,
                "fadeTime": 0.3,
                "rotationVelMin": 0.05,
                "rotationVelMax": 0.3,
                "originX": "center",
                "originY": "center",
                "originXOffsetMin": 0,
                "originXOffsetMax": 0,
                "originYOffsetMin": 0,
                "originYOffsetMax": 0,
                "distanceVelMin": 0.25,
                "distanceVelMax": 0.6,
                "saturationMin": "50",
                "saturationMax": "80",
                "lightnessMin": "0",
                "lightnessMax": "60",
                "hueMin": "100",
                "hueMax": "140",
                "hueIncrement": 1,
                "opacityMin": 1,
                "opacityMax": 1,
                "opacityScaleAtCenter": 1,
                "opacityScaleAtEdge": 1,
                "opacityScaleIsRelative": true,
                "lightnessScaleAtCenter": 1,
                "lightnessScaleAtEdge": 1,
                "lightnessScaleIsRelative": true,
                "saturationScaleAtCenter": 1,
                "saturationScaleAtEdge": 1,
                "saturationScaleIsRelative": true,
                "distanceJitterMin": 0,
                "distanceJitterMax": 0,
                "rotationJitterMin": 0,
                "rotationJitterMax": 0
            }
            );
        } else {
            swirl1 = new CanvasSwirl(
                document.getElementById('swirl1_surface'),
            {
                "count": "100",
                "shape": "circles",
                "radiusInnerMax": "50%",
                "radiusInnerMin": "25%",
                "radiusOuterMax": "50%",
                "radiusOuterMin": "50%",
                "thicknessMin": 1,
                "thicknessMax": 1,
                "fadeTime": 0.3,
                "rotationVelMin": 0.05,
                "rotationVelMax": 0.3,
                "originX": "center",
                "originY": "center",
                "originXOffsetMin": 0,
                "originXOffsetMax": 0,
                "originYOffsetMin": 0,
                "originYOffsetMax": 0,
                "distanceVelMin": 0.25,
                "distanceVelMax": 0.6,
                "saturationMin": "50",
                "saturationMax": "80",
                "lightnessMin": "0",
                "lightnessMax": "60",
                "hueMin": "100",
                "hueMax": "140",
                "hueIncrement": 1,
                "opacityMin": 1,
                "opacityMax": 1,
                "opacityScaleAtCenter": 1,
                "opacityScaleAtEdge": 1,
                "opacityScaleIsRelative": true,
                "lightnessScaleAtCenter": 1,
                "lightnessScaleAtEdge": 1,
                "lightnessScaleIsRelative": true,
                "saturationScaleAtCenter": 1,
                "saturationScaleAtEdge": 1,
                "saturationScaleIsRelative": true,
                "distanceJitterMin": 0,
                "distanceJitterMax": 0,
                "rotationJitterMin": 0,
                "rotationJitterMax": 0
            }
            );
        }
    };
    if (window.addEventListener) window.addEventListener('load', start, false);
    else if (window.attachEvent) window.attachEvent('onload', start);
})();
