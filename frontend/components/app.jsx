import React from "react";
// import HomePageContainer from "./home_page/home_page_container";
import HomePage from "./home_page/home_page";
import SigninContainer from "./session/signin/signin_container";
import SignupContainer from "./session/signup/signup_container";
import { Route,Switch,Link } from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_utils';
import BooksByCategory from './book/bookCategories/books_by_category';
import NavBar from './home_page/navigation';


const App = () => (
  <div>
    <header>

    </header>

    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/books/:category" component={BooksByCategory} />
        <AuthRoute exact path="/signin" component={SigninContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);


// class App extends Component {
//   constructor(props){
//       super(props);
//       debugger
//       this.state = {
//           isNavbarHidden: false
//       };
//   }
//   render() {
//     return(
//         <div>
//           <header>
      
//           </header>
//           { (this.state.nav_bar.isHidden) ? null : <NavBar /> }
//           <Switch>
//               <Route exact path="/" component={HomePage} />
//               <Route exact path="/books/:category" component={BooksByCategory} />
//               <AuthRoute exact path="/signin" component={SigninContainer} />
//               <AuthRoute exact path="/signup" component={SignupContainer} />
//           </Switch>
//         </div>
//       )
//   }
// }

export default App;
