import AuthDefault from '../views/auth/auth-default';
import SignIn from '../views/auth/sign-in';
import SignUp from '../views/auth/sign-up';
import Splash from '../views/auth/splash';
import Discover from '../views/discover';
import Forum from '../views/forum';
import Pesanan from '../views/pesanan';
import Profile from '../views/profile';
import {MainTab} from './main';

const dataMain = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'AuthDefault',
    component: AuthDefault,
  },
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
  {
    name: 'MainTab',
    component: MainTab,
  },
];

const dataTab = [
  {
    name: 'Discover',
    component: Discover,
  },
  {
    name: 'Pesanan',
    component: Pesanan,
  },
  {
    name: 'Forum',
    component: Forum,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

export {dataMain, dataTab};
