// Assuming isFieldDef is a function that checks for a field definition
function isFieldDef(def) {
    // Implement the logic to check if def is a valid field definition
    // This is just an example; replace it with actual validation logic
    return def && typeof def.fieldName === 'string' && typeof def.fieldType === 'string';
}

// positionDef is the object you want to check
const positionDef = {
    fieldName: "position",
    fieldType: "string"
};

// Use the if statement to check if positionDef is a field definition
if (isFieldDef(positionDef)) {
    // Code to execute if positionDef is a valid field definition
    console.log("positionDef is a valid field definition.");
} else {
    // Code to execute if positionDef is not a valid field definition
    console.log("positionDef is not a valid field definition.");
}
