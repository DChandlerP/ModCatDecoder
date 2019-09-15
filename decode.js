let modelCode, topWoodCode, fretsCode, topSpecCode;
let topGradeCode, neckWoodCode, neckCarveCode, fingerboardCode;
let inlayCode, bridgeCode, colorCode, hardwareCode;
let treblepuCode, middlepuCode, basspuCode, elecCode;
let model, topWood, frets, topSpec;
let topGrade, neckWood, neckCarve, fingerboard;
let inlay, bridge, color, hardware;
let treblepu, middlepu, basspu, elec;

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

const setCodeValues = m => {
    let arr = m.split("");
    modelCode = arr[0] + arr[1];
    topWoodCode = arr[2];
    fretsCode = arr[3];
    topSpecCode = arr[4];
    topGradeCode = arr[5];
    neckWoodCode = arr[6];
    neckCarveCode = arr[7];
    fingerboardCode = arr[8];
    inlayCode = arr[9];
    bridgeCode = arr[10];
    hardwareCode = arr[15];
    treblepuCode = arr[16];
    middlepuCode = arr[17];
    basspuCode = arr[18];
    elecCode = arr[19];

    // At least one color code has 3 characters, so need to accommodate that.
    tempColor = arr[11] + arr[12] + arr[13] + arr[14];
    colorCode = tempColor.replace(/_/g, "")
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

const decodeMODCAT = modcat => {
    let inMODCAT = modcat.replace(/\s+/g,"");
    inMODCAT = inMODCAT.replace(/-/g, "_");
    inMODCAT = inMODCAT.replace(/\^/g, "_");
    inMODCAT = inMODCAT.trim();
    inMODCAT = inMODCAT.toUpperCase();
    setCodeValues(inMODCAT);
    setMODCATValues();
    setFieldValues()
};