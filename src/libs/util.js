import Cookies from 'js-cookie'
// cookie保存的天数

export const TOKEN_KEY = 'admin_token'
// 注意此处为了有效时间，使用了cookie
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {expires: 60 * 24 || 1})
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}
