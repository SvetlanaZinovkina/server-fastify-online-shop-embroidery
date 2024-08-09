const routes = {
  defaultApiPath: () => '/api/v1',
  notFoundPage: () => '*',
  mainPage: () => '/',
  login: () => '/login',
  signUp: () => '/signup',
  cart: () => '/cart',
  purchases: () => '/purchases',
  shopPage: () => '/shop/embroidery',
  getEmbroideriesPath: () => '/shop/embroidery',
  getPopularEmbroidery: () => '/shop/popular-embroidery',
  getEmbroidery: (id) => `/shop/embroidery/${id}`,
  updateUsername: () => '/user/username',
  getEmbroideriesByCategory: (categoryId) => `/shop/category/${categoryId}`,
  uploadEmbroidery: () => '/shop/embroidery',
  uploadEmbroideryAdmin: () => '/shop/embroidery',
  getCategories: () => '/shop/category',
  uploadCategory: () => '/shop/category',
  updateEmail: () => '/user/email',
  updatePassword: () => '/user/password',
  catalogSvgPath: () => '/catalog/svg',
  getUserData: () => '/user',
  editUserData: (userId) => `/user/${userId}/edit`,
  editEmbroidery: (id) => `/edit/${id}`,
  discount: () => '/discount',
};

export default routes;
