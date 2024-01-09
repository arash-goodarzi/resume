const _ = require('lodash');
require 

export const getUserData = _.memoize(async (username:string) => {
  try {
    // const res = await fetch(`http://www.localhost:3000/api/userInfo?name=${username}`);
    const res = await fetch(`http://localhost:8000/v1/generalinfo?name=${username}`);
    // const res = await fetch(`https://resume-api-beta-amber.vercel.app/v1/generalinfo?name=${username}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }

  // const res = await axios.get(`http://www.localhost:3000/api/userInfo?name=${username}`)
  // const data = await res.data
  // console.log(data)
  // return data
});
