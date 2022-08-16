require([
    "esri/config",
    "esri/Map",
    "esri/views/SceneView"
],(esriConfig, Map, SceneView)=> {


esriConfig.apiKey = "AAPK8f36d5a7f89743e4be1093808945dfe4xjXNzvzwF2HgTDIBD0Q2XzGJQzOATYQlHw0Kep4cPBOWqRE2ns4ozsG0CKEprMVL";
    const map = new Map({
    basemap: "arcgis-topographic",
    ground: "world-elevation"
});

const view = new SceneView({
    map: map,
    camera: {
    position: {
        x: -118.808,
        y: 33.961,
        z: 2000 // meters
    },
        tilt: 75
    },
    container: "viewDiv"
    });

});