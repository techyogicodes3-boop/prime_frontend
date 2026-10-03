import test from 'node:test';
import assert from 'node:assert/strict';
import {digitsOnly, isTenDigitPhone, isValidEmail} from '../src/lib/enquiry-validation.js';

test('phone input keeps only the first ten digits', () => {
  assert.equal(digitsOnly('98a-76 5432109'), '9876543210');
});

test('phone validation requires exactly ten numeric digits', () => {
  assert.equal(isTenDigitPhone('9876543210'), true);
  assert.equal(isTenDigitPhone('987654321'), false);
  assert.equal(isTenDigitPhone('98765 43210'), false);
  assert.equal(isTenDigitPhone('98765432100'), false);
});

test('email validation rejects malformed addresses', () => {
  assert.equal(isValidEmail('person@example.com'), true);
  assert.equal(isValidEmail('person@example'), false);
});
