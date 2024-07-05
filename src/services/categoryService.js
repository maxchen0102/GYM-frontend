import { deleteCategory } from "../api/categoryApi";

export const removeCategory = async (id) => {
    return await deleteCategory(id);
};