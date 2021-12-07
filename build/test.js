"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CircuitBraker_1 = require("./circuit-breaker/CircuitBraker");
const BreakerOptions_1 = require("./circuit-breaker/BreakerOptions");
const breaker1 = new CircuitBraker_1.CircuitBreaker({
    method: "get",
    url: "http://localhost:3000"
}, new BreakerOptions_1.BreakerOptions(3, 5, 5000));
const breaker2 = new CircuitBraker_1.CircuitBreaker({
    method: "get",
    url: "http://localhost:3000"
}, new BreakerOptions_1.BreakerOptions(6, 7, 1000));
setInterval(() => {
    breaker1
        .exec()
        .then(console.log)
        .catch(console.error);
}, 500);
setInterval(() => {
    breaker2
        .exec()
        .then(console.log)
        .catch(console.error);
}, 1500);
//# sourceMappingURL=test.js.map