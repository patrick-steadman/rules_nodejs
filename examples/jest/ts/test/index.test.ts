import indexfile, { CustomError, throwsCustomError } from 'lib';

test('it should work', () => {
  expect(indexfile).toBe('test');
});

test('it should throw Error', () => {
  expect(() => { throw new Error('normal error') }).toThrow(Error);
});


test('it should throw custom error', () => {
  expect(throwsCustomError).toThrow(CustomError);
});

test('CustomError should be CustomError', () => {
  expect(new CustomError('foo') instanceof CustomError).toBeTruthy();
});
