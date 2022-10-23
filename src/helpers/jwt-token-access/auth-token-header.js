export default function authHeader() {
  ////console.logdisabled('authHeader')
  const obj = JSON.parse(sessionStorage.getItem("authUser"))

  if (obj && obj.accessToken) {
    return { Authorization: obj.accessToken }
  } else {
    return {}
  }
}
