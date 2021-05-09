import {ErrorBody} from './error-body';

export class ErrorResponse {
   body: ErrorBody;

  constructor(body: ErrorBody) {
    this.body = body;
  }
}
