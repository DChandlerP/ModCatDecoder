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

    if (str.length < 20) {
        numUnderscores = 20 - str.length;
        underscores = "";
        for ( i=0; i < numUnderscores; i++ ) {
            underscores += "_";
        }
        str = [str.slice(0, 11), underscores, str.slice(11)].join('');
        console.log("MODCAT reconstructed to " + str);
    }

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
    if ( colorCode != '____') {
        colorCode = str.substring(11, 15).replace(/_/g, "");
    }
    hardwareCode = str.substring(15, 16);
    treblepuCode = str.substring(16, 17);
    middlepuCode = str.substring(17, 18);
    basspuCode = str.substring(18, 19);
    elecCode = str.substring(19, 20);
};

const getValue = (str, code, spec) => prs[str + code] ? prs[str + code] : `Couldn't find ${spec} for ${code}`;

//A bit clever but it makes the data obj more readable.
const getFieldValues = () => {
    model = getValue("model", modelCode, "Model");
    topWood = getValue("topWood", topWoodCode, "Top Wood");
    frets = getValue("frets", fretsCode, "Frets");
    topSpec = getValue("topSpec", topSpecCode, "Top Spec");
    topGrade = getValue("topGrade", topGradeCode, "Top Grade");
    neckWood = getValue("neckWood", neckWoodCode, "Neck Wood");
    neckCarve = getValue("neckCarve", neckCarveCode, "Neck Carve");
    fingerboard = getValue("fingerboard", fingerboardCode, "Fingerboard Wood");
    inlay = getValue("inlay", inlayCode, "Inlay");
    bridge = getValue("bridge", bridgeCode, "Bridge");
    color = getValue("color", colorCode, "Color");
    hardware = getValue("hardware", hardwareCode, "Hardware");
    treblepu = getValue("treblepu", treblepuCode, "Treble Pickup");
    middlepu = getValue("middlepu", middlepuCode, "Middle Pickup");
    basspu = getValue("basspu", basspuCode, "Bass Pickup");
    elec = getValue("elec", elecCode, "Electronics");
};
// removes whitespace & replaces - with _
const format = text => text.replace(/\s+/g,"").replace(/-/g, "_").toUpperCase();

const decodeMODCAT = input => {
    getCodesFromString(input);
    getFieldValues();
    addFieldValuesToDOM();
};