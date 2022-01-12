import indexfile, { CustomError } from 'lib';

export class CustomErrorNoImport extends Error {
  constructor(m: string) {
    super(m);
  }
}

test('it should work', () => {
  expect(indexfile).toBe('test');
});

test('instanceof should work', () => {
  expect((new CustomError('foo')) instanceof CustomError).toBeTruthy();
});

test('instanceof inside file should work', () => {
  expect((new CustomErrorNoImport('foo')) instanceof CustomErrorNoImport).toBeTruthy();
});
