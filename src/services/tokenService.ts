import nookies from 'nookies'

const ID_TOKEN = "ID_TOKEN"
const ONE_DAY = 86400

export const tokenService = {

  save(accessToken: string, context = null){
    globalThis?.localStorage.setItem(ID_TOKEN, accessToken);
    nookies.set(context, ID_TOKEN, accessToken, {maxAge: ONE_DAY, path: 'http://localhost:3000/my-stage'});
  },

  get(context = null){
    const cookies = nookies.get(context);
    return cookies[ID_TOKEN];
    // return globalThis?.localStorage?.getItem(ID_TOKEN);
  },

  delete(context = null){
    globalThis?.localStorage?.removeItem(ID_TOKEN);
    nookies.destroy(context, ID_TOKEN);
  }
}