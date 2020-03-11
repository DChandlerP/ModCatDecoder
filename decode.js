let modelCode, topWoodCode, fretsCode, topSpecCode, topGradeCode, neckWoodCode, neckCarveCode, fingerboardCode;
let inlayCode, bridgeCode, colorCode, hardwareCode, treblepuCode, middlepuCode, basspuCode, elecCode;
let model, topWood, frets, topSpec, topGrade, neckWood, neckCarve, fingerboard;
let inlay, bridge, color, hardware, treblepu, middlepu, basspu, elec;

const addValueToDOM = (field, value) => document.getElementById(field).innerHTML = value;

const addFieldValuesToDOM = () => {
    addValueToDOM("modelField", model);
    addValueToDOM("topWoodField", topWood);
    addValueToDOM("fretsField", frets);
    addValueToDOM("topSpecField", topSpec);
    addValueToDOM("topGradeField", topGrade);
    addValueToDOM("neckWoodField", neckWood);
    addValueToDOM("neckCarveField", neckCarve);
    addValueToDOM("fingerboardField", fingerboard);
    addValueToDOM("inlayField", inlay);
    addValueToDOM("bridgeField", bridge);
    addValueToDOM("colorField", color);
    addValueToDOM("hardwareField", hardware);
    addValueToDOM("treblepuField", treblepu);
    addValueToDOM("middlepuField", middlepu);
    addValueToDOM("basspuField", basspu);
    addValueToDOM("elecField", elec)
};

const getCodesFromString = str => {
    str = format(str);
    modelCode = str.substring(0, 2);
    topWoodCode = str.substring(2, 3);
    fretsCode = str.substring(3, 4);
    topSpecCode = str.substring(4, 5);
    topGradeCode = str.substring(5, 6);
    neckWoodCode = str.substring(6, 7);
    neckCarveCode = str.substring(7, 8);
    fingerboardCode = str.substring(8, 9);
    inlayCode = str.substring(9, 10);
    bridgeCode = str.substring(10, 11);
    colorCode = str.substring(11, 15).replace(/_/g, "");
    hardwareCode = str.substring(15, 16);
    treblepuCode = str.substring(16, 17);
    middlepuCode = str.substring(17, 18);
    basspuCode = str.substring(18, 19);
    elecCode = str.substring(19, 20);
};

const getObjValue = (string, code, specName) => {
    const modcatKey = string + code;
    if(prs[modcatKey]){
        return prs[modcatKey];
    } else {
        return "Could not find " + specName + " '" + code + "'"
    }
};

const getObjValues = () => {
    model = getObjValue("model", modelCode, "Model");
    topWood = getObjValue("topWood", topWoodCode, "Top Wood");
    frets = getObjValue("frets", fretsCode, "Frets");
    topSpec = getObjValue("topSpec", topSpecCode, "Top Spec");
    topGrade = getObjValue("topGrade", topGradeCode, "Top Grade");
    neckWood = getObjValue("neckWood", neckWoodCode, "Neck Wood");
    neckCarve = getObjValue("neckCarve", neckCarveCode, "Neck Carve");
    fingerboard = getObjValue("fingerboard", fingerboardCode, "Fingerboard Wood");
    inlay = getObjValue("inlay", inlayCode, "Inlay");
    bridge = getObjValue("bridge", bridgeCode, "Bridge");
    color = getObjValue("color", colorCode, "Color");
    hardware = getObjValue("hardware", hardwareCode, "Hardware");
    treblepu = getObjValue("treblepu",treblepuCode, "Treble Pickup");
    middlepu = getObjValue("middlepu",middlepuCode, "Middle Pickup");
    basspu = getObjValue("basspu", basspuCode, "Bass Pickup");
    elec = getObjValue("elec", elecCode, "Electronics");
};
// removes whitespace replaces - with _ and everything is made uppercase
const format = text => text.replace(/\s+/g,"").replace(/-/g, "_").toUpperCase();

const decodeMODCAT = input => {
    getCodesFromString(input);
    getObjValues();
    addFieldValuesToDOM();
};