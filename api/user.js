import api from "."

export const updateUser = async(userId, data) => {
    const response = await api.put(`/api/users/${userId}`, data)
    return response.data;
}