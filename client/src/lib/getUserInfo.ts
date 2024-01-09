import _ from 'lodash';
require 

export const getUserData = _.memoize(async (username:string) => {
  try {
    const res = await fetch(`https://resume-api-rho.vercel.app/v1/generalinfo?name=${username}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }

});
