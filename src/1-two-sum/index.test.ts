import {twoSum} from './index'

it('Returns indices of the two numbers such that they add up to target', () => {
  expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1])
  expect(twoSum([3,2,4], 6)).toStrictEqual([1,2])
})

