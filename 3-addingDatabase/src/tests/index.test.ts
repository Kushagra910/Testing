

import {describe,it,expect ,vi} from 'vitest'
import request from 'supertest'
import {app} from '../index';



//Deep copy when all the keys are copied and you don't need to manage like this and simply do vi.mock('../db)
vi.mock("../db");

describe("POST /sum" , ()=> {

  it("should return sum of two positive numbers", async() => {
      const res = await request(app).post("/sum").send({
        a : 1,
        b : 2
      })
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