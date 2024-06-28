"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./config/data-source");
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const logger_1 = require("./utils/logger");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({ origin: "http://localhost:3001" }));
app.use(express_1.default.json());
app.use("/api/auth", UserRoutes_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => {
    logger_1.logger.info("Data Source has been initialized!");
    app.listen(port, () => {
        logger_1.logger.info(`Server is running at http://localhost:${port}`);
    });
})
    .catch((err) => {
    logger_1.logger.error("Error during Data Source initialization:", err);
});
//# sourceMappingURL=index.js.map