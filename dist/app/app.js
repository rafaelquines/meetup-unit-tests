"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("../ioc/types");
let App = class App {
    constructor(logger, calc, todoApi) {
        this.logger = logger;
        this.calc = calc;
        this.todoApi = todoApi;
    }
    start() {
        this.todoApi.get()
            .then((res) => {
            this.logger.info(JSON.stringify(res.length));
        });
    }
};
App = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.GenericLogger)),
    __param(1, inversify_1.inject(types_1.TYPES.CalculatorBase)),
    __param(2, inversify_1.inject(types_1.TYPES.TodoApiBase)),
    __metadata("design:paramtypes", [Object, Object, Object])
], App);
exports.App = App;
//# sourceMappingURL=app.js.map