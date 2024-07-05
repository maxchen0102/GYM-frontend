import axiosInstance from '../utils/axiosInstance';

export const deleteCategory = async (id) => {
    const data={
        id:id
    }
    const response = await axiosInstance.post(`/delete_category/`,data);
    return response.data;
};
