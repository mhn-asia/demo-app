import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CadValidators {
  /**
   * Check for empty (optional fields) values
   *
   * @param value
   */
  static isEmptyInputValue(value: any): boolean {
    return value == null || value.length === 0;
  }

  /**
   * Must match validator
   *
   * @param controlPath A dot-delimited string values that define the path to the control.
   * @param matchingControlPath A dot-delimited string values that define the path to the matching control.
   */
  static mustMatch(controlPath: string, matchingControlPath: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      // Get the control and matching control
      const control = formGroup.get(controlPath);
      const matchingControl = formGroup.get(matchingControlPath);

      // Return if control or matching control doesn't exist
      if (!control || !matchingControl) {
        return null;
      }

      // Delete the mustMatch error to reset the error on the matching control
      if (matchingControl.hasError("mustMatch")) {
        delete matchingControl.errors.mustMatch;
        matchingControl.updateValueAndValidity();
      }

      // Don't validate empty values on the matching control
      // Don't validate if values are matching
      if (this.isEmptyInputValue(matchingControl.value) || control.value === matchingControl.value) {
        return null;
      }

      // Prepare the validation errors
      const errors = { mustMatch: true };

      // Set the validation error on the matching control
      matchingControl.setErrors(errors);

      // Return the errors
      return errors;
    };
  }

  /**
   * Email validator
   */
  static email(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      // Get the control
      const control = c;

      // Return if control doesn't exist
      if (!control) {
        return null;
      }

      // Delete the email error to reset the error on the control
      if (control.errors?.["email"]) {
        delete control.errors.email;
        control.updateValueAndValidity();
      }

      // Don't validate empty values on the control
      if (this.isEmptyInputValue(control.value)) {
        return null;
      }

      // Prepare the validation errors
      const errors = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value) ? null : { email: true };

      // Set the validation error on the control
      control.setErrors(errors);

      // Return the errors
      return errors;
    };
  }

  /**
   * Number validator
   */
  static number(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      // Get the control
      const control = c;

      // Return if control doesn't exist
      if (!control) {
        return null;
      }

      // Delete the error to reset the error on the control
      if (control.errors?.["number"]) {
        delete control.errors.number;
        control.updateValueAndValidity();
      }

      // Don't validate empty values on the control
      if (this.isEmptyInputValue(control.value)) {
        return null;
      }

      // Prepare the validation errors
      const errors = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(control.value) ? null : { number: true };

      // Set the validation error on the control
      control.setErrors(errors);

      // Return the errors
      return errors;
    };
  }

  static whitespace(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      // Get the control
      const control = c;

      // Return if control doesn't exist
      if (!control) {
        return null;
      }

      // Delete the error to reset the error on the control
      if (control.errors?.["whitespace"]) {
        delete control.errors.whitespace;
        control.updateValueAndValidity();
      }

      // Don't validate empty values on the control
      if (this.isEmptyInputValue(control.value)) {
        return null;
      }

      // Prepare the validation errors
      const isWhitespace = (/\s/).test(control.value);
      const isValid = !isWhitespace;
      const errors = isValid ? null : { whitespace: true };

      // Set the validation error on the control
      control.setErrors(errors);

      // Return the errors
      return errors;
    };
  }
}
