/**
 * 获取存储的用户令牌（token）。
 * @returns {string|boolean} 如果存在token则返回token字符串，否则返回false。
 */
export function getToken() {
  // 从localStorage检查是否存在token
  if (localStorage.token) {
    return localStorage.token;
  } else {
    return false;
  }
}

/**
 * 移除存储的用户令牌（token）。
 * @returns {boolean} 移除成功则返回true，如果不存在token则返回false。
 */
export function removeToken() {
  // 从localStorage移除token
  if (localStorage.token) {
    return localStorage.removeItem("token");
  } else {
    return false;
  }
}

/**
 * 获取存储的用户数据。
 * @returns {string|boolean} 如果存在userData则返回userData字符串，否则返回false。
 */
export function getUser() {
  // 从localStorage检查是否存在userData
  if (localStorage.userData) {
    return localStorage.userData;
  } else {
    return false;
  }
}

/**
 * 移除存储的用户数据。
 * @returns {boolean} 移除成功则返回true，如果不存在userData则返回false。
 */
export function removeUser() {
  // 从localStorage移除userData
  if (localStorage.userData) {
    return localStorage.removeItem("userData");
  } else {
    return false;
  }
}
