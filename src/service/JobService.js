import axios from "axios";
import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/jobs";

class JobService {
 
    getAllByCompanyId(id) {
        return axios.get(`${JOBS_API_URL}/filter-by-company/${id}`, {headers: AuthHeader()})
    }


}

export default new JobService();