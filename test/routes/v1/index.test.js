import { beforeAll, describe, it, vi } from 'vitest';
const request = require('supertest');
import app from '../../../src/app';

const orderRequest = await import('../../resources/OrderRequest.json', {with: {type: 'json'}});

beforeAll(()=> {
    vi.mock('~/queues/orderQueue.producer', ()=> ({
        produce: vi.fn(),
        defineChannel: vi.fn()
    }))
})

describe('Teste de api', ()=> {
    it('testa api order', ()=> {
        return request(app)
            .post('/v1/order')
            .send(orderRequest.default)
            .expect(201, { success: true })
    })

    it('testa api order - error cond 1', ()=> {
        orderRequest.default.value = 999;
        return request(app)
            .post('/v1/order')
            .send(orderRequest.default)
            .expect(400, { code: 400, msg: 'Invalid order request.' })
    })

    it('testa api order - error cond 2', ()=> {
        orderRequest.default.value = 999;
        return request(app)
            .post('/v1/order')
            .send({})
            .expect(400, { code: 400, msg: "\"payment\" is required" })
    })
})