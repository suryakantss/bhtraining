"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
const rxjs_1 = require("rxjs");
function add(a, b) {
    let ob = new rxjs_1.Observable((o) => {
        o.next(a + b);
        o.next(a + b);
        o.complete();
    });
    return ob;
}
