import expect from 'expect'

import ObSer from 'src/index'

describe('测试', () => {
  it('a1b2 合并为 a=1&b=2', () => {
    expect(ObSer({a:1,b:2})).toContain('a=1&b=2');
  })
})
