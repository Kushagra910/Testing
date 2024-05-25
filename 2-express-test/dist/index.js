"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post('/sum', (req, res) => {
    const { a, b } = req.body;
    const ans = a + b;
    // updating the code or adding branches , if you haven't written test for this you will  
    // end up decreasing the code coverage. for the updated code base the test should run atleast once.
    if (a > 1000000 || b > 1000000) {
        return res.status(422).json({
            message: "Sorry we don't support big numbers"
        });
    }
    res.json({
        answer: ans
    });
});
exports.app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const ans = a * b;
    res.status(200).json({
        answer: ans
    });
});
