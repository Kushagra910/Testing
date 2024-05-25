

import {describe,it,expect} from '@jest/globals'
import request from 'supertest'
import {app} from '../index';

describe("POST /sum" , ()=> {

  it("should return sum of two positive numbers", async() => {
      const res = await request(app).post('/sum').send({
        a : 1,
        b : 2
      })

      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
  })

  it("should fail when the numbers are too big", async() => {
     const res = await  request(app).post('/sum').send({
      a : 10000000,
      b : 0
     });
     expect(res.body.message).toBe("Sorry we don't support big numbers");
     expect(res.statusCode).toBe(422);
  })
})