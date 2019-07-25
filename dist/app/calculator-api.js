"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const request = require("superagent");
let CalculatorApi = class CalculatorApi {
    constructor() {
        this.apiUrl = 'http://api.mathjs.org/v4/';
    }
    async add(a, b) {
        const response = await request.get(this.apiUrl)
            .query({
            expr: a + '+' + b,
        }).send();
        console.log(response.body);
        return Number(response.body);
    }
    async subtract(a, b) {
        const response = await request.get(this.apiUrl)
            .query({
            expr: a + '-' + b,
        }).send();
        return Number(response.body);
    }
    async multiply(a, b) {
        const response = await request.get(this.apiUrl)
            .query({
            expr: a + '*' + b,
        }).send();
        return Number(response.body);
    }
    async divide(a, b) {
        const response = await request.get(this.apiUrl)
            .query({
            expr: a + '/' + b,
        }).send();
        return Number(response.body);
    }
};
CalculatorApi = __decorate([
    inversify_1.injectable()
], CalculatorApi);
exports.CalculatorApi = CalculatorApi;
//# sourceMappingURL=calculator-api.js.map