import config from "../config/config";
import AxiosService from "./axios-service";

const axiosservice = new AxiosService();

export default class EmployeeService {
  baseUrl = config.baseUrl;

  addEmployee(data) {
    return axiosservice.postService(`${this.baseUrl}/Create`, data);
  }
  getAllEmployee() {
    console.log("In getAllEmployee")
    return axiosservice.Get('/get');
  }

  deleteEmployee(id, data) {
    console.log("data deleted");
    return axiosservice.Delete('/delete/'+id, data);
}

updateEmployee(data) {
  console.log("Id will update");
  return axiosservice.putService(`${this.baseUrl}/update/`, data);
}
getEmployeeById(id) {
  console.log("get emp by id");
    return axiosservice.Get('/getbyId?employeeId=' + id);
}
  
} 