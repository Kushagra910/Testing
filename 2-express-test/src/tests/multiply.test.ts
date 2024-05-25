import {describe,it,expect} from '@jest/globals'
import request from 'supertest'
import {app}from '../index'

describe("POST /multiply",()=>{
  it("should return multiplication of two postive integers",async()=>{
    const res = await request(app).post("/multiply").send({
      a : 100,
      b : 4
    })
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(400);
  })
  it("should return negative number when one number is postive and another number is negative",async()=>{
    const res = await request(app).post("/multiply").send({
      a : -1,
      b : 5
    })
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-5);
  })
  

  it("should return 0 if any number is zero",async() => {
    const res = await request(app).post("/multiply").send({
      a : 0,
      b : 19
    })

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(0);
  })
})