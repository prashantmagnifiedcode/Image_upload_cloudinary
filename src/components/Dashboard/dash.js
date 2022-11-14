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
import PendingProduct from '../PendingProduct'
import ListedProduct from '../ListedProduct'
// import Register from '../Recuiter/Recuiter.js'
import {Redirect} from 'react-router-dom'
import {useContextState} from '../../Redux/Global/GlobalContext.js'
import Register from '../Login/Registration'
const Dashboard = () => {
  
  const  { authState}=useContextState()
  const auth= authState.isAuthenticated
  console.log("auth",auth)
  return (
    <>
      <Router>
        <Switch>
          <div className="containers    ">
            

            
  {auth&&<SideBarMenu  />}
              
            
                
            <div className="Access ">
             
{/*                 
              <div className="header">
              <Header />
              </div>  */}

                <Route
                  exact
                  path="/"
                  render={ () => (auth ? <HomeDashboardComponent /> : <Redirect to="/Login" />)}
                />
            <Route     exact   path="/form"   render={() => <TodoAdd />}   />
              {/* <Route exact path="/Login" render={() => <Logins/>} /> */}
              <Route
          exact
          path="/Login"
          render={() => (auth ? <Redirect to="/" /> : <Logins/>)}
        />
                <Route exact path="/Clendar" render={() => <AppProduct />} />
                <Route exact path="/Users" render={() => <Users />} />
                <Route exact path="/CreateInvoice" render={() => < CreateInvoice />} />
                <Route exact path="/Profile" render={() => <Emply />} />
                <Route exact path="/Todo" render={() => < Todo />} />
                <Route exact path="/ChatBox" render={() => <Chat/>} />
                <Route exact path="/AddOfferProduct" render={() => <AddOfferProduct/>} />
                <Route  path="/calendars" exact render={() =><MyCalendar/>} />
               <Route path="/calendars/event/:id/update" render={() =><UpdateEvent/>}/>
               <Route path="/ListedProduct" render={() =><ListedProduct/>}/>
               <Route path="/PendingForApproval" render={() =><PendingProduct/>}/>
               <Route path="/Register"   render={() =><Register/>}/>
              
              
           
            </div> 
          </div>
        </Switch>
      </Router>
    </>
  );
};
export default Dashboard;
