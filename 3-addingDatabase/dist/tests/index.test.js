"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
vitest_1.vi.mock("../db", () => {
    return {
        prismaClient: {
            Sum: {
                create: vitest_1.vi.fn()
            }
        }
    };
});
(0, vitest_1.describe)("POST /sum", () => {
    (0, vitest_1.it)("should return sum of two positive numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post('/sum').send({
            a: 1,
            b: 2
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(3);
    }));
    (0, vitest_1.it)("should fail when the numbers are too big", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post('/sum').send({
            a: 10000000,
            b: 0
        });
        (0, vitest_1.expect)(res.body.message).toBe("Sorry we don't support big numbers");
        (0, vitest_1.expect)(res.statusCode).toBe(422);
    }));
});
