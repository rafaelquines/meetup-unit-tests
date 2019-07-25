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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const winston = require("winston");
let AppLogger = class AppLogger {
    constructor() {
        this.tag = '';
        this.message = (info) => (typeof info.message === 'object'
            ? JSON.stringify(info.message)
            : info.message);
        this.currentLogger = winston.createLogger({
            format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }), winston.format.printf(info => `${info.timestamp} ${info.level}${this.tag ? ` [${this.tag}]` : ``}: ${this.message(info)}`)),
            level: 'info',
            transports: [
                new winston.transports.Console(),
            ],
        });
    }
    info(message, tag) {
        this.setTag(tag);
        this.currentLogger.info(message);
    }
    warning(message, tag) {
        this.setTag(tag);
        this.currentLogger.warn(message);
    }
    error(message, tag) {
        this.setTag(tag);
        this.currentLogger.error(message);
    }
    setTag(tag) {
        this.tag = tag || '';
    }
    instance() {
        return this.currentLogger;
    }
};
AppLogger = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], AppLogger);
exports.AppLogger = AppLogger;
//# sourceMappingURL=app-logger.js.map