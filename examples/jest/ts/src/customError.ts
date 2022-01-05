export class CustomError extends Error {
    constructor(m: string) {
        super(m);
    }
}

export const throwsCustomError = () => {
  const err = new CustomError('foo');
  throw err;
}
