const assert = require("assert");
const Interest = require("../app/models/interest");

describe("Interest", function () {
  describe("#calculate()", function () {
    it("should return 10.47 for principal 1000, rate 5, and time 2", function () {
      assert.equal(Interest.calculate(1000, 5, 2), "102.50");
    });

    it("should return 50 for principal 1000, rate 5, and time 10", function () {
      assert.equal(Interest.calculate(1000, 5, 10), "628.89");
    });

    it("should return 0 for principal 0, rate 5, and time 2", function () {
      assert.equal(Interest.calculate(0, 5, 2), "0.00");
    });

    it("should return 0 for principal 1000, rate 0, and time 2", function () {
      assert.equal(Interest.calculate(1000, 0, 2), "0.00");
    });

    it("should return 1000 for principal 1000, rate 10, and time 0", function () {
      assert.equal(Interest.calculate(1000, 10, 0), "0.00");
    });

    it("should return 1000 for principal 1000, rate 0, and time 0", function () {
      assert.equal(Interest.calculate(1000, 0, 0), "0.00");
    });
  });
});
