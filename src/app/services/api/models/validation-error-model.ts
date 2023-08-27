/* tslint:disable */
/* eslint-disable */
export interface ValidationErrorModel {

  /**
   * an optional object which contains values required to render the error message.
   */
  ctx?: {
};

  /**
   * the error's location as a list.
   */
  loc?: Array<string>;

  /**
   * a computer-readable identifier of the error type.
   */
  msg?: string;

  /**
   * a human readable explanation of the error.
   */
  type_?: string;
}
