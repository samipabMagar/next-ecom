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

export const payViaKhalti = async(orderId) => {
    const response = await api.post(`api/orders/${orderId}/payment/khalti`);
    return response.data;
}

export const confirmPayment = async(orderId, status) => {
    const response = await api.put(`/api/orders/${orderId}/confirm-payment`, {status});
    return response.data;
}

export const payViaCash = async(orderId) => {
    const response = await api.post(`api/orders/${orderId}/payment/cash`);
    return response.data;
}

export const payViaStripe = async(orderId) => {
    const response = await api.post(`/api/orders/${orderId}/payment/stripe`);
    return response.data;
}