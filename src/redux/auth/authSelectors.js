export const getError = state => state.auth.error;
export const getIsLoading = state => state.auth.isLoading;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getIsRefreshing = state => state.auth.isRefreshing;