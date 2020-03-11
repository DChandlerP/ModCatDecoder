let modelCode, topWoodCode, fretsCode, topSpecCode, topGradeCode, neckWoodCode, neckCarveCode, fingerboardCode;
let inlayCode, bridgeCode, colorCode, hardwareCode, treblepuCode, middlepuCode, basspuCode, elecCode;
let model, topWood, frets, topSpec, topGrade, neckWood, neckCarve, fingerboard;
let inlay, bridge, color, hardware, treblepu, middlepu, basspu, elec;

const setValues = (field, value) => {
    document.getElementById(field).innerHTML = value
};

const setFieldValues = () => {
    setValues("modelField", model);
    setValues("topWoodField", topWood);
    setValues("fretsField", frets);
    setValues("topSpecField", topSpec);
    setValues("topGradeField", topGrade);
    setValues("neckWoodField", neckWood);
    setValues("neckCarveField", neckCarve);
    setValues("fingerboardField", fingerboard);
    setValues("inlayField", inlay);
    setValues("bridgeField", bridge);
    setValues("colorField", color);
    setValues("hardwareField", hardware);
    setValues("treblepuField", treblepu);
    setValues("middlepuField", middlepu);
    setValues("basspuField", basspu);
    setValues("elecField", elec)
};

const setCodeValues = str => {
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

const getMODCATstring = (string, array, specName) => {
    const modcatKey = string + array;
    if(prs[modcatKey]){
        return prs[modcatKey];
    } else {
        return "Could not find " + specName + " '" + array + "'"
    }
};

const setMODCATValues = () => {
    model = getMODCATstring("model", modelCode, "Model");
    topWood = getMODCATstring("topWood", topWoodCode, "Top Wood");
    frets = getMODCATstring("frets", fretsCode, "Frets");
    topSpec = getMODCATstring("topSpec", topSpecCode, "Top Spec");
    topGrade = getMODCATstring("topGrade", topGradeCode, "Top Grade");
    neckWood = getMODCATstring("neckWood", neckWoodCode, "Neck Wood");
    neckCarve = getMODCATstring("neckCarve", neckCarveCode, "Neck Carve");
    fingerboard = getMODCATstring("fingerboard", fingerboardCode, "Fingerboard Wood");
    inlay = getMODCATstring("inlay", inlayCode, "Inlay");
    bridge = getMODCATstring("bridge", bridgeCode, "Bridge");
    color = getMODCATstring("color", colorCode, "Color");
    hardware = getMODCATstring("hardware", hardwareCode, "Hardware");
    treblepu = getMODCATstring("treblepu",treblepuCode, "Treble Pickup");
    middlepu = getMODCATstring("middlepu",middlepuCode, "Middle Pickup");
    basspu = getMODCATstring("basspu", basspuCode, "Bass Pickup");
    elec = getMODCATstring("elec", elecCode, "Electronics");
};
// removes whitespace replaces - with _ and everything is made uppercase
const format = text => text.replace(/\s+/g,"").replace(/-/g, "_").toUpperCase();

const format = text => text.replace(/\s+/g,"").replace(/-/g, "_").toUpperCase();

const decodeMODCAT = modcat => {
    setCodeValues(code);
    setMODCATValues();
    setFieldValues()
};