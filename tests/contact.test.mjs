import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContact, submitContact } from '../src/lib/contact.js';

const values = { name: ' Keith ', email: ' keith@example.com ', message: ' Hello! ' };

test('rejects blank fields and malformed email addresses', () => {
    assert.deepEqual(Object.keys(validateContact({ name: '  ', email: '', message: '\n' })), ['name', 'email', 'message']);
    assert.ok(validateContact({ ...values, email: 'invalid@' }).email);
    assert.deepEqual(validateContact(values), {});
});

test('sends trimmed data and accepts explicit service confirmation', async () => {
    for (const success of [true, 'true']) {
        await submitContact(values, async (url, options) => {
            assert.match(url, /^https:\/\/formsubmit.co\/ajax\//);
            assert.equal(options.method, 'POST');
            assert.deepEqual(JSON.parse(options.body), { name: 'Keith', email: 'keith@example.com', message: 'Hello!' });
            assert.ok(options.signal instanceof AbortSignal);
            return { ok: true, json: async () => ({ success }) };
        });
    }
});

test('rejects HTTP errors, service failures, invalid responses, and network failures', async () => {
    const cases = [
        async () => ({ ok: false }),
        async () => ({ ok: true, json: async () => ({ success: 'false' }) }),
        async () => ({ ok: true, json: async () => ({}) }),
        async () => ({ ok: true, json: async () => { throw new SyntaxError('Invalid JSON'); } }),
        async () => { throw new TypeError('Network failure'); },
        async () => { throw new DOMException('Timed out', 'TimeoutError'); },
    ];
    for (const fetchRequest of cases) await assert.rejects(submitContact(values, fetchRequest));
});
