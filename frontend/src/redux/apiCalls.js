import { publicRequest } from "../server";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  updateProfile,
} from "./adminRedux";

export const loginAdmin = async (dispatch, admin) => {
  dispatch(loginStart());
  try {
    const result = await publicRequest.post("/admin/login-admin", admin);
    dispatch(loginSuccess(result.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logoutAdmin = async (dispatch) => {
  dispatch(logoutSuccess());
  window.location.href = "/login";
};

export const updateAdmin = async (dispatch, admin, id) => {
  try {
    const result = await publicRequest.put(
      "/admin/update_profile/" + id,
      admin
    );
    dispatch(updateProfile(result.data));
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
