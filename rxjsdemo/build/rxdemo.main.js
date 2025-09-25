"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjsdemo_1 = require("./rxjsdemo");
(0, rxjsdemo_1.add)(10, 20).subscribe({
    next: (res) => {
        console.log(res);
    }, error: () => {
    }, complete: () => {
        console.log('END...');
    }
});
