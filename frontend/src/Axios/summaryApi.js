export const baseURL = "http://localhost:5000" ;

export const SummaryApi = {
  // Auth
  register: { url: "/api/auth/register", method: "post" },
  login: { url: "/api/auth/login", method: "post" },
  user_details: { url: "/api/auth/me", method: "get" },
  logout: { url: "/api/auth/logout", method: "get" },

  };
