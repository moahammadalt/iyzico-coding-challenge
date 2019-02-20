import * as helper from '../../src/globals/helper';

// Unit tests
describe('unit tests for helper.js functions', () => {

  it('checkValue function should return true when it has [false, ``, undefined, null, {}, []], otherwise it return true', () => {
    
    // Falsy values
    expect(helper.checkValue(false)).toBeFalsy();
    expect(helper.checkValue(undefined)).toBeFalsy();
    expect(helper.checkValue(null)).toBeFalsy();
    expect(helper.checkValue('')).toBeFalsy();
    expect(helper.checkValue({})).toBeFalsy();
    expect(helper.checkValue([])).toBeFalsy();


    // Truthy values
    expect(helper.checkValue('test')).toBeTruthy();
    expect(helper.checkValue(0)).toBeTruthy();
    expect(helper.checkValue(54)).toBeTruthy();
    expect(helper.checkValue('54')).toBeTruthy();
    expect(helper.checkValue(['54'])).toBeTruthy();
    expect(helper.checkValue({test: '54'})).toBeTruthy();

  });

  it('isObjEmpty function should return true if an object is empty and false if it is not empty', () => {

    expect(helper.isObjEmpty({test: 'test'})).toBeFalsy();
    expect(helper.isObjEmpty({})).toBeTruthy();

  });

});