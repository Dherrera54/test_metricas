import {ErrorResponse} from './error-response';
import {ErrorBody} from './error-body';



describe('Creacion del objecto ErrorBody', () => {

  it('should create an instance', () => {
    expect(new ErrorResponse(new ErrorBody())).toBeTruthy();
  });
});

