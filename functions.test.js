const functions = require('./functions')

test('expect 3+3 to be 6', ()=>{
  expect(functions.add(3,3)).toBe(6)
});

test('isNull to be null', ()=>{
  expect(functions.isNull()).toBeNull()
});
