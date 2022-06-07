import pkg1 from '@pks/pkg1';
import _ from 'lodash'

function fun2() {
  pkg1();
  console.log(`I am package 2: ${_.lowerCase('--Foo-Bar--')} 123123`);
}

export default fun2;