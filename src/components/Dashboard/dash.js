import React from "react";
import "./dashs.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import HomeDashboardComponent from "../Homecomponent/HomedashComponent";
import AppProduct from "../AppProduct/AppProduct";
import SideBarMenu from "./SideBar/SideBar";
import Users from '../User/Users.jsx'
import  CreateInvoice from '../Invoice/CreateInvoice'
import Todo from '../Todo/Todo'
import { useLocation } from 'react-router-dom';
import Chat from '../Chat/Chat'
import Logins from '../Login/login.jsx'
import TodoAdd from  '../Todo/Add'
import AddOfferProduct from '../offersection/offer'
import Emply from '../Employ'
import MyCalendar from '../calendar/cldcomponent/Calendar.jsx'
import UpdateEvent from '../calendar/cldcomponent/UpdateEvent.jsx'
const Dashboard = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Router>
        <Switch>
          <div className="containers   ">
  
              
            <SideBarMenu />
            <Route     exact                  path="/form"                  render={() => <TodoAdd />}                />
                
    <Route exact path="/Login" render={() => <Logins/>} />
            <div className="Access ">
              {
                pathname=="/calendars" ?
                <div>
                 <Route  path="/calendars" exact render={() =><MyCalendar/>} />
                  </div>:
                  <>
              <div className="header">
                <Header />
              </div> 
               <div className="Card_section  overflow-y-auto  ">
                <Route
                  exact
                  path="/"
                  render={() => <HomeDashboardComponent />}
                />
                <Route exact path="/Clendar" render={() => <AppProduct />} />
                <Route exact path="/Users" render={() => <Users />} />
                <Route exact path="/CreateInvoice" render={() => < CreateInvoice />} />
                <Route exact path="/Profile" render={() => <Emply />} />
                <Route exact path="/Todo" render={() => < Todo />} />
                <Route exact path="/ChatBox" render={() => <Chat/>} />
                <Route exact path="/AddOfferProduct" render={() => <AddOfferProduct/>} />
               <Route path="/calendars/event/:id/update" render={() =><UpdateEvent/>}/>
              </div>
              </>
              }
           
            </div> 
          </div>
        </Switch>
      </Router>
    </>
  );
};
export default Dashboard;
