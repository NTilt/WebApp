import axios from "axios";

export default class ReviewPost {
    
    static async getAll() {
        const response = await axios.get(`https://localhost:44314/api/Review/Get`);
        return response.data;
    }

    static async getByTwo() {
        const response = await axios.get(`https://localhost:44314/api/Review/GetByTwo`);
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get(`https://localhost:44314/api/Review/${id}`);
        return response.data;
    }

    static async post(review) {
        const response = await axios.post(`https://localhost:44314/api/Review/Post`,review,{
            headers: {
              'Content-Type': 'application/json',
            }});
        return response.data;
    }

    static async put(review){
        const response = await axios.put(`https://localhost:44314/api/Review/Put`,review,{
            headers: {
              'Content-Type': 'application/json',
            }});
        return response.data;
    }

    static async DeleteById(id) {
        await axios.delete(`https://localhost:44314/api/Review/${id}`);
    }
}