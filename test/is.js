var tape = require("tape")
var is = require("..")

tape("is", function(test){
  test.equal(is(NaN, NaN), true, "NaN")
  test.equal(is(0, -0), false, "+0/-0")
  test.equal(is(0, 0), true, "0/0")
  test.equal(is(-0, -0), true, "-0/-0")
  test.equal(is("foo", "foo"), true, "literals")
  test.equal(is({}, {}), false, "objects")
  test.equal(is(test, test), true, "objects")
  test.end()
})
