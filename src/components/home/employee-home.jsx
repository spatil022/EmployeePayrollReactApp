import React from "react";
import addIcon from "../../assets/icons/add-24px.svg";
import "./employee-home.scss";
import EmployeeService from "../../services/employee-payroll-service";
import Display from "./display";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const employeeService = new EmployeeService();

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchExpand: false,
      employeeArray: [],
      AllEmployeeArray: [],
    };
    
  }
 
  componentDidMount() {
    this.getAllEmployee();
  }
  recivedMessage = () =>{
    this.getAllEmployee();
}
  getAllEmployee = () => {
    
    employeeService
      .getAllEmployee()
      .then((data) => {
        console.log("data after get ", data.data);
        this.setState({
          employeeArray: data.data,
          AllEmployeeArray: data.data,
        });
      })
      .catch((err) => {
        console.log("err after ", err);
      });
  };

 
  render() {
    return (
      <div>
        <header className='header row center'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span> <br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
        <div className="column content">
        <div className="emp-detail">
            <div className="detail-text">
              Employee Details <div className="count"></div>
            </div>
            
              <Link to="payroll-form" className="add-button" >
                <img src={addIcon} alt="" /> Add User
              </Link>
              </div>
          <div className="table-main">
            <Display
              employeeArray={this.state.employeeArray}
              childtoParent={this.recivedMessage}
              
            />
          </div>
        </div>
      </div>
    );
  }
}