import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailStatus: null,
      passwordStatus: null
    };
  }

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  }

  checkForms = () => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(this.state.email)) {
      this.setState({ emailStatus: true });
    }
    else {
      this.setState({ emailStatus: false });
    }

    if (this.state.password.length > 5) {
      this.setState({ passwordStatus: true });
    }
    else {
      this.setState({ passwordStatus: false });
    }
  }

  render() {

    let email;
    let emailError;
    if (this.state.emailStatus == null) {
      email = <input className="" id="email" type="text" name="email" placeholder="E-mail" required onChange={this.setEmail}></input>;
      emailError = <div id="email-error" className="_hidden">Invalid Username</div>
    }
    else if (this.state.emailStatus == true) {
      email = <input className="_green" id="email" type="text" name="email" placeholder="E-mail" required onChange={this.setEmail}></input>;
      emailError = <div id="email-error" className="_hidden">Invalid Username</div>
    }
    else {
      email = <input className="_red" id="email" type="text" name="email" placeholder="E-mail" required onChange={this.setEmail}></input>;
      emailError = <div id="email-error" className="_visible">Invalid Username</div>
    }

    let password;
    if (this.state.passwordStatus == null) {
      password = <input className="" id="password" type="password" name="password" placeholder="Password" required onChange={this.setPassword}></input>;
    }
    else if (this.state.passwordStatus == true) {
      password = <input className="_green" id="password" type="password" name="password" placeholder="Password" required onChange={this.setPassword}></input>;
    }
    else {
      password = <input className="_red" id="password" type="password" name="password" placeholder="Password" required onChange={this.setPassword}></input>;
    }

    return (
      <React.Fragment>

        <div className="container">
          <div className="name">
            Bank <span>Support Portal</span>
          </div>

          <form action="">

            <div className="input-outer email-block">

              {email}

              <label htmlFor="email" className='fas icon'>&#xf007;</label>
              <span className="check-container">

                {this.state.emailStatus !== null &&
                  (this.state.emailStatus ? <span className='fas check-true'>&#xf00c;</span> :
                    <span className='fas check-false'>&#xf00d;</span>)
                }

              </span>
              
            </div>
            {emailError}

            <br />
            <div className="input-outer password-block">

              {password}
              
              <label htmlFor="password" className='fas icon'>&#xf023;</label>
              <span className="check-container">

                {this.state.passwordStatus !== null &&
                  (this.state.passwordStatus ? <span className='fas check-true'>&#xf00c;</span> :
                    <span className='fas check-false'>&#xf00d;</span>)
                }

              </span>
            </div>
            <br />
            <button type="button" onClick={this.checkForms}>Login</button>
            <br />
            <div className="forgot-password">
              Forgot your password? <span>Reset it here.</span>
            </div>
          </form>
        </div>

      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);