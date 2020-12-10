import React ,{Component} from 'react';
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import './App.css';
import Register from './components/auth/Register';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser , loginUser } from "./actions/authAction";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Landing from './components/layout/Landing'
import 'react-notifications/lib/notifications.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Profile from './components/profile/Profile';
import Notification from './components/dashboard/Notification';
import Setting from './components/dashboard/Setting';
import Client from './components/dashboard/Clients';
import Tasks from './components/dashboard/Tasks';
import Project from './components/dashboard/Project';
import Reports from './components/dashboard/Reports';
import Discussion from './components/discussion/Discussion';
import ClientDet from './components/profile/ClientProfile';
import UserDet from './components/profile/Userprofile';
import ProjectDet from './components/detailed/ProjectDet';
import TasksDet from './components/detailed/TasksDet';
import IssueDet from './components/detailed/IssueDet';
import ProfileEdit from './components/profile/ProfileEdit';
import AdminDashboard from './components/dashboard/AdminDashboard';
import AdminUser from './components/dashboard/AdminUser';
import adminProjectDet from './components/detailed/adminProjectDet';
import adminTaskDet from './components/detailed/adminTaskDet';
import adminIssueDet from './components/detailed/adminIssueDet';
import AdminAsset from './components/dashboard/AdminAsset';
import AdminTasks from './components/dashboard/AdminTasks';
import AdminVuln from './components/dashboard/AdminVuln';
import AdminUserProfile from './components/profile/AdminUserProfile';
import AdminProfile from './components/profile/AdminProfile';
import AdminSetting from './components/dashboard/AdminSetting';
import AdminNotification from './components/dashboard/AdminNotification';
import AdminProfileEdit from './components/profile/AdminProfileEdit';
import AdminDiscussion from './components/dashboard/AdminDiscussion';
require('dotenv').config({path: __dirname + '/.env'})


if (localStorage.jwtToken) {
   const token = localStorage.jwtToken;
  //  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

} 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <ReactNotification />
            <Route exact path="/" component={Landing} />
            <Route exact path="/Home" component={Landing} />       
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route  exact path="/forgetPassword" component={ForgetPassword} />
            <Route exact path="/reset/:token"  component={ResetPassword} /> 
            <Switch>
            <PrivateRoute exact path="/adminDashboard" component={AdminDashboard}/>
            <PrivateRoute exact path="/adminUser" component={AdminUser}/>
            <PrivateRoute exact path="/adminTasks" component={AdminTasks}/>
            <PrivateRoute exact path="/adminAssets" component={AdminAsset}/>
            <PrivateRoute exact path="/adminVulnerability" component={AdminVuln}/>
            <PrivateRoute exact path="/adminProjectDetails" component={adminProjectDet}/>
            <PrivateRoute exact path="/adminTasksDetails" component={adminTaskDet}/>
            <PrivateRoute exact path="/adminIssueDetails" component={adminIssueDet}/>
            <PrivateRoute exact path="/adminUserProfile" component={AdminUserProfile}/>
            <PrivateRoute exact path="/adminProfile" component={AdminProfile}/>
            <PrivateRoute exact path="/adminSetting" component={AdminSetting}/>
            <PrivateRoute exact path="/adminNotification" component={AdminNotification}/>
            <PrivateRoute exact path="/adminprofileEdit" component={AdminProfileEdit}/>
            <PrivateRoute exact path="/adminDiscussion" component={AdminDiscussion}/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <PrivateRoute exact path="/client" component={Client}/>
            <PrivateRoute exact path="/projects" component={Project}/>
            <PrivateRoute exact path="/reports" component={Reports}/>
            <PrivateRoute exact path="/tasks" component={Tasks}/>
            <PrivateRoute exact path="/clientProfile" component={ClientDet}/>
            <PrivateRoute exact path="/usersProfile" component={UserDet}/>
            <PrivateRoute exact path="/projectDetails" component={ProjectDet}/>
            <PrivateRoute exact path="/tasksDetails" component={TasksDet}/>
            <PrivateRoute exact path="/issueDetails" component={IssueDet}/>
            <PrivateRoute exact path="/profileEdit" component={ProfileEdit}/>
            <PrivateRoute exact path="/discussion" component={Discussion}/>
             <PrivateRoute exact path="/notification" component={Notification}/>
             <PrivateRoute exact path="/Setting" component={Setting}/>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
