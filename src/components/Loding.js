import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import './Loding.css'
import * as legoData from "../source/legoloading.json";
import * as doneData from "../source/doneloading.json";
import Navbar from './Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 3000);
        });
    }, 3200);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <FadeIn>
            <div class="center justify-content-center align-items-center">
              <div className="image"><img src="images/logo.png" alt="" /></div>
              <h1>fetching Data</h1>
              {!this.state.loading ? (
                <Lottie options={defaultOptions} height={200} width={200} />
              ) : (
                  <Lottie options={defaultOptions2} height={200} width={200} />
                )}
            </div>
          </FadeIn>
        ) : (
            <Router>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/products' component={Products} />
                <Route path='/sign-up' component={SignUp} />
              </Switch>
            </Router>
          )}
      </div>
    );
  }
}