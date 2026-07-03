"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let day = 7;
function Domingo() {
    console.log("Hoy es domingo tengo que ir a Misa");
}
if (day < 0 || day > 7) {
    console.log("Invalid day");
}
else {
    switch (day) {
        case 0:
            console.log("It is a Sunday");
            break;
        case 1:
            console.log("It is a Monday");
            break;
        case 2:
            console.log("Its is a Tuesday");
            break;
        case 3:
            console.log("It is a Wednesday");
            break;
        case 4:
            console.log("It is a Thursday");
            break;
        case 5:
            console.log("It is a Friday");
            break;
        case 6:
            console.log("It is a Saturday");
            break;
        case 7:
            console.log("It is a Sunday");
            Domingo();
            break;
        default:
            console.log("No such day exist");
            break;
    }
}
//# sourceMappingURL=Condicionales_Switch.js.map