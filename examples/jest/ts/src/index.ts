import extra from './extra';

export default extra;

export class CustomError extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
