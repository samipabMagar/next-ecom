import api from "."

export const getOrdersByUser = async(status) => {
    const response = await api.get(`api/orders/user?status=${status}`);
    return response.data;
}
export const createOrder = async (orderData) => {
    const response = await api.post("/api/orders", orderData);
    return response.data;
}

export const cancelOrder = async(id) => {
    const response = await api.put(`/api/orders/${id}/cancel`);

    return response.data;
}