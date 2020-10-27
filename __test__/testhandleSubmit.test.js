import {handleSubmit} from '../src/client/js/app';

describe('Testing the submit functionality is Defined', () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
    test('It should be a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });

})

