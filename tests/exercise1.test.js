const exercise = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw error if input is not number ', () => {
        expect(() => { exercise.fizzBuzz("pankaj") }).toThrow();
    });

    it('should be divisible by 3 and 5', () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
        
    })
    it('should be divisible by 3 ', () => {
        const result = exercise.fizzBuzz(12);
        expect(result).toBe("Fizz");

    })
    it('should be divisible by 5', () => {
        const result = exercise.fizzBuzz(10);
        expect(result).toBe("Buzz");

    })
    it('should return input number', () => {
        const result = exercise.fizzBuzz(11);
        expect(result).toBe(11);

    })
})
