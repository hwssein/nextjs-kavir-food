import api from "@/configs/api";

const getFoods = async () => await api.get("/");

const getFoodDetails = async (id) => await api.get(`/${id}`);

export { getFoods, getFoodDetails };
