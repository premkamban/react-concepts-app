export var jsonFormat = {};
export var validator = {};
export var errorlist = [];
export const fields = { flag: false, errormessage: "", name: "" };
const isArray = (v) => {
    //log(v["constructor"], 'v["constructor"]');
    return v["constructor"] === Array;
}

const isObject = (v) => {
    return v["constructor"] === Object;
}

export function Validate(value) {
    let i;
    let updateValue = false;
    for (let obj in value) {
        if (isArray(value[obj])) {
            for (i = 0; i < value[obj].length; i++) {
                Validate(value[obj][i]);
            }
        } else {
            // const result = errorlist.filter((obj) => {
            //     obj.name !== value["name"];
            // });
            updateValue = true;
        }
    } 
    if (updateValue) {
        if (['Product_ID', 'Product_Cost'].includes(value.name)) {
            log(value.val, `value.val is ${typeof value.val}`);
            if (value.val !== '4') {
                fields.flag = true;
                fields.name = value.name;
                if (fields.flag) {
                    fields.errormessage = "value is more than 4";
                    errorlist.push(fields);
                }
            }
            // log(value.val !== 4 ? 'caught' : 'less', 'result');
        }
    }
}

const log = (str, description) => {
    console.log(`---${description}---`);
    console.log(str);
}



export function formatterJson(value, prevalues, prevJsonFormat) {
    let i;
    let jsonAfterGrouping = {};
    let conditionValues = [];
    let groupOperation;
    // log(value, 'values inside formatter json');
    if (value && Array.isArray(value[0])) {
        if (prevJsonFormat && prevalues) {
            let key = Object.keys(prevJsonFormat);
            prevJsonFormat[key] = prevalues;
        }
        for (i = 0; i < value.length; i++) {
            // log(value[i], `${value[i]}above 1st if`);
            if (Array.isArray(value[i])) {
                // log(value[i][0], `${value[i][0]}above 2nd if`);
                if (!Array.isArray(value[i][0])) {
                    let tempJson = {};
                    tempJson.name = value[i][0];
                    tempJson.op = value[i][1];
                    tempJson.val = value[i][2];
                    conditionValues.push(tempJson);
                } else {
                    formatterJson(value[i], conditionValues, jsonAfterGrouping);
                }
            } else {
                groupOperation = value[i];
                jsonAfterGrouping[value[i]] = [];
            }
        }
        jsonAfterGrouping[groupOperation] = conditionValues;

    } else {
        if (value) {
            jsonAfterGrouping.name = value[0];
            jsonAfterGrouping.op = value[1];
            jsonAfterGrouping.val = value[2];
        }
    }
    if (!prevJsonFormat) {
        jsonFormat = jsonAfterGrouping;
    } else {
        jsonFormat = prevJsonFormat;
        let key = Object.keys(prevJsonFormat);
        prevJsonFormat[key].push(jsonAfterGrouping);

    }
    return jsonFormat;
}