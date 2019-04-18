const assert = require("assert")//.strict 严格模式
const { message } = new assert.AssertionError({
    actual: 1,
    expected: 2,
    message: 'strictEqual'
})

try {
    assert.equal(1, '1')
}
catch (err) {
    assert(err instanceof assert.AssertionError)
    assert.strictEqual(err.message, message)
    /*
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
    */
}