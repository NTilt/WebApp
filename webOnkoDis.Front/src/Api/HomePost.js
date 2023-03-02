import axios from "axios";

export default class HomePost {
    
    static async getAll() {
        const response = await axios.get(`https://localhost:44314/api/Home`);
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get(`https://localhost:44314/api/Home/${id}`);
        return response.data;
    }

    static async post(homePost) {
        const response = await axios.post(`https://localhost:44314/api/Home`,homePost,{
            headers: {
              'Content-Type': 'application/json',
            }});
        return response.data;
    }

    static async put(homePost){
        const response = await axios.put(`https://localhost:44314/api/Home`,homePost,{
            headers: {
              'Content-Type': 'application/json',
            }});
        return response.data;
    }

    static async DeleteById(id) {
        await axios.delete(`https://localhost:44314/api/Home/${id}`);
    }
}