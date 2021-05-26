import { baseUrl } from '../config/config';
import axios from 'axios';



class AxiosService {
    api = axios.create({ url: baseUrl }); 
    postService(url = "", payload = null, tokenRequired = false, httpOptions = null) {
        return axios.post(url, payload, tokenRequired && httpOptions);
    }
   
    Get(url) {
        
        console.log("get service of axios is called");
        return axios.get(baseUrl+url, {
            headers: {
                contentType: 'application/json'
            }
        })
    }

    Delete(url) {
        console.log("Delete data ");
        return axios.delete(baseUrl+url, {
            headers: {
                contentType: 'application/json'
            }
        })
    }
   
    putService(url = "", payload = null, tokenRequired = false, httpOptions = null) {
        return axios.put(url, payload, tokenRequired && httpOptions);
    }
}


export default AxiosService;