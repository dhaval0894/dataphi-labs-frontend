import React from 'react';
import Validation from 'react-validation';

Object.assign(Validation.rules, {
    // Key name maps the rule
    required: {
        // Function to validate value
        // NOTE: value might be a number -> force to string
        rule: value => {
            return value.toString().trim();
        },
        // Function to return hint
        // You may use current value to inject it in some way to the hint
        hint: value => {
            return <span className='form-error is-visible'>This Field Is Required</span>
        }
    },

    checkString: {
      rule: value => {
            return  /^[a-zA-Z]+$/.test(value);
      },

      hint: value => {
          return <span className='form-error is-visible'>Field should contain only alphabets(A-Z,a-z)</span>
      }
    },

    checkNumber: {
      rule: value => {
            return Number.isInteger(Number(value));

      },

      hint: value => {
          return <span className='form-error is-visible'>Field should contain only integer value(0-9)</span>
      }
    },

    checkLength: {
      rule: value => {
            return value.length === 10;

      },

      hint: value => {
          return <span className='form-error is-visible'>Field should contain exactly 10 digits</span>
      }
    },

    checkDate: {
      rule: value => {
            let dob = new Date(value);
            let today = new Date();
            if (dob === 'Invalid Date') {
              return false;
            }
            else if (dob > today ) {
              return false;
            }
            else {
              return true;
            }

      },

      hint: value => {
          return <span className='form-error is-visible'>Field should contain a valid date of birth</span>
      }
    },

});

export default Validation;
