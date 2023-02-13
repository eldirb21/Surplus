import {colors} from './themes';

var setpassLength = 8;
var checkIsNull = key =>
  key === '' || key === undefined || key === null || key === NaN || key === 0;
var setemailReq = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
var setpassReq = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,}/,
);
var colored = [colors.grey, colors.danger, colors.persianGreen];

const validate = (model, value) => {
  var bool = {};
  var mess = {};
  var modelItem = value ? value : model;

  /** EMAIL */
  if (
    checkIsNull(typeof modelItem === 'string' ? modelItem : modelItem['email'])
  ) {
    mess['email'] = 'Please input your e-mail';
    bool['email'] = colored[1];
  } else if (!setemailReq.test(modelItem)) {
    mess['email'] = 'E-mail not match';
    bool['email'] = colored[1];
  } else if (setemailReq.test(modelItem)) {
    !mess['email'];
    bool['email'] = colored[2];
  } else {
    !mess['email'];
    !bool['email'];
  }

  /** PASSWORD */
  if (
    checkIsNull(
      typeof modelItem === 'string' ? modelItem : modelItem['password'],
    )
  ) {
    mess['password'] = 'Please input your password';
    bool['password'] = colored[1];
  } else if (!setpassReq.test(modelItem)) {
    mess['password'] = 'Password request is simbol, numbers and letters';
    bool['password'] = colored[1];
  } else if (modelItem.length < setpassLength) {
    mess['password'] = 'Minimum password 8 characters';
    bool['password'] = colored[1];
  } else if (
    setpassReq.test(modelItem) ===
    (modelItem.length < setpassLength === false)
  ) {
    !mess['password'];
    bool['password'] = colored[2];
  } else {
    !mess['password'];
    !bool['password'];
  } 

  return {bool, mess};
};
export default validate;
