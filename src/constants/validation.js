import {colors} from './themes';

var setpassLength = 8;
var checkIsNull = key =>
  key === '' || key === undefined || key === null || key === NaN || key === 0;
var setemailReq = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
var setpassReq = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,}/,
);
var colored = [colors.grey, colors.danger, colors.persianGreen];

const validateColor = (model, value) => {
  var defaults = colors.grey;
  var errors = colors.danger;
  var matchs = colors.persianGreen;

  var newModel = {};

  /** EMAIL */
  if (checkIsNull(model['email']) && !value) {
    newModel['email'] = true;
  } else {
    if (model['email'] && value && setemailReq.test(value) === false) {
      newModel['email'] = true;
    } else if (value && setemailReq.test(value)) {
      if (value && setemailReq.test(value)) {
        newModel['email'] = false;
      } else !newModel['email'];
    } else !newModel['email'];
  }

  /** PASSWORD */
  if (checkIsNull(model['password']) && !value) {
    newModel['password'] = true;
  } else {
    if (model['password'] && value && !setpassReq.test(value)) {
      newModel['password'] = true;
    } else if (model['password'] && value && value.length < setpassLength) {
      newModel['password'] = true;
    } else {
      if (value && value.length >= setpassLength) {
        newModel['password'] = false;
      } else !newModel['password'];
    }
  }

  /** CONFIRM PASSWORD */
  if (model['password'] !== model['confirmPass']) {
    newModel['confirmPass'] = true;
  } else !newModel['confirmPass'];

  return newModel;
};

const validateMessage = (model, value) => {
  var newModel = {};

  /** EMAIL */
  if (checkIsNull(model['email']) && !value) {
    newModel['email'] = 'Please input your e-mail';
  } else {
    if (model['email'] && value && setemailReq.test(value) === false) {
      newModel['email'] = 'E-mail not match';
    } else !newModel['email'];
  }

  /** PASSWORD */
  if (checkIsNull(model['password']) && !value) {
    newModel['password'] = 'Please input your password';
  } else {
    if (model['password'] && value && !setpassReq.test(value)) {
      newModel['password'] = 'Password request is simbol, numbers and letters';
    } else if (model['password'] && value && value.length < setpassLength) {
      newModel['password'] = 'Minimum password 8 characters';
    } else !newModel['password'];
  }

  /** CONFIRM PASSWORD */
  console.log(model['password']);
  console.log(model['confirmPass']);
  if (model['password'] !== model['confirmPass']) {
    newModel['confirmPass'] = 'Password not match';
  } else !newModel['confirmPass'];

  return newModel;
};

const validate = (model, value) => {
  // var bool = validateColor(model, value);
  // var str = validateMessage(model, value);
  var bool = {};
  var str = {};
  var modelItem = value ? value : model;
  console.log('modelItem = ', setemailReq.test(modelItem));
  console.log('modelItem = ', modelItem);

  /** EMAIL */
  if (
    checkIsNull(typeof modelItem === 'string' ? modelItem : modelItem['email'])
  ) {
    str['email'] = 'Please input your e-mail';
    bool['email'] = true;
  } else if (!setemailReq.test(modelItem)) {
    str['email'] = 'E-mail not match';
    bool['email'] = true;
  } else {
    !str['email'];
    !bool['email'];
  }
  // if (checkIsNull(model['email']) && !value) {
  //   bool['email'] = true;
  //   str['email'] = true;
  // } else {
  //   if (model['email'] && value && setemailReq.test(value) === false) {
  //     bool['email'] = colored[0];
  //     str['email'] = colored[0];
  //   } else if (value && setemailReq.test(value)) {
  //     if (value && setemailReq.test(value)) {
  //       bool['email'] = false;
  //       str['email'] = false;
  //     } else {
  //       !bool['email'];
  //       !str['email'];
  //     }
  //   } else {
  //     !bool['email'];
  //     !str['email'];
  //   }
  // }

  return {bool, str};
};
export {validateColor, validateMessage, checkIsNull};
export default validate;
