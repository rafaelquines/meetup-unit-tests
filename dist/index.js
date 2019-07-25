"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_config_1 = require("./bootstrap/inversify.config");
inversify_config_1.getApp().start();
inversify_config_1.getLogger().info('Finished');
//# sourceMappingURL=index.js.map