import api from ".";

export const updateUser = async (userId, data) => {
  const response = await api.put(`/api/users/${userId}`, data);
  return response.data;
};

export const updateProfileImage = async (formdata) => {
  const response = await api.patch(`/api/users/profile-image`, formdata);

  return response.data;
};
