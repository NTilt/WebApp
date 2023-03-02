import axios from "axios";

export default class DoctorPost {
    
    static async getAll() {
        const response = await axios.get(`https://localhost:44314/api/Doctor`);
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get(`https://localhost:44314/api/Doctor/${id}`);
        return response.data;
    }

    static async post(request) {
        const response = await axios.post(`https://localhost:44314/api/Doctor`,request,{
            headers: {
              'Content-Type': 'application/json',
            }});
        return response.data;
    }

    static async put(request){
        const response = await axios.put(`https://localhost:44314/api/Doctor`,request,{
            headers: {
              'Content-Type': 'application/json',
            }});
        return response.data;
    }

    static async DeleteById(id) {
        await axios.delete(`https://localhost:44314/api/Doctor/${id}`);
    }
}