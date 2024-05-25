import { sum } from "../index";
import {describe,expect,it} from '@jest/globals'

//add a bunch of tests
describe('sum',()=>{
  it('should be able to add two positive integers',()=>{
       const ans = sum(2,3);
       expect(ans).toBe(5);
  });


  it('should be able to add two negative integers', () => {
    const ans= sum(-1,-2);
    expect(ans).toBe(-3);
  })

  it('should be able to add two zeroes',()=>{
    const ans = sum(0,0);
    expect(ans).toBe(0);
  })
})