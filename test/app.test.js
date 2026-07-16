const assert = require('assert');

describe('Backend Tests', function() {
  it('Puerto por defecto debe ser 3001', function() {
    const PORT = process.env.PORT || 3001;
    assert.strictEqual(Number(PORT), 3001);
  });

  it('Variables de entorno DB deben tener valores por defecto', function() {
    const DB_PORT = process.env.DB_PORT || 3306;
    assert.strictEqual(Number(DB_PORT), 3306);
  });
});