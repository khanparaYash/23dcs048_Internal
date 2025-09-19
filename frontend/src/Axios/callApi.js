import { Axios } from "./Axios";


export const callApi = async (apiObj, data = {}, params = "") => {
  try {
    const res = await Axios({
      method: apiObj.method,
      url: `${apiObj.url}${params}`,
      data
    });
    return res.data;
  } catch (err) {
    const payload = err?.response?.data || { msg: err.message || "API error" };
    throw payload;
  }
};
