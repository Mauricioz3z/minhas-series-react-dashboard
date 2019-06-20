import React, { Component,Fragment } from 'react'
import Input from '../components/input'
import Axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import {browserHistory} from 'react-router'
import 'react-toastify/dist/ReactToastify.css'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

const initialState = { email: "", senha: "", blocking: false }






class Login extends Component {

  constructor(props) {
    super(props);
    this.toggleBlocking = this.toggleBlocking.bind(this);
    this.state = initialState;
  }

  toggleBlocking() {
    this.setState({blocking: !this.state.blocking});
  }

   toastMessage(mensagem,type){
     toast[type](mensagem,{position: toast.POSITION.BOTTOM_RIGHT})
   }
  //  toastError(mensagem){
  //   toast.error(mensagem,{position: toast.POSITION.BOTTOM_RIGHT})
  // }
  
   envia(e) {
    e.preventDefault();
    this.toggleBlocking()
       Axios.post('https://minhas-series-api.herokuapp.com/auth',
        { username: this.state.email, password: this.state.senha }).then(ress=>{
          
          console.log('ress', ress)
           
          if(ress.data.success){
            const token = ress.data.token;
             localStorage.setItem('token',token)
            browserHistory.push('/dashboard')
            this.toggleBlocking()
          }else{
            this.toastMessage('Login ou senha incorretos!','error')
            this.toggleBlocking()
          }

      
        }).catch(error=>console.log(error))
     
    

    console.log(this.state)
  }

  handleChange(e) {
    const form = { ...this.state }
    const { name, value } = e.target;
    form[name] = value;
    this.setState(form)
  }

  render() {
    return (
      
  
         <BlockUi tag="div" blocking={this.state.blocking}>
      <div className="page-holder d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
              <div className="pr-lg-5"><img src="img/series-muito-longas.jpg" alt="" className="img-fluid shadow-img" /></div>
              {/* illustration.svg */}
            </div>
            <div className="col-lg-5 px-lg-4">
              <h1 className="text-base text-primary text-uppercase mb-4">Minas Séries Dashboard</h1>
              <h2 className="mb-4">Bem-Vindo!</h2>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <form id="loginForm" action="index.html" className="mt-4">

                <Input type="text" name="email" onChange={e => this.handleChange(e)}
                  label="Username or Email address"
                  placeholder="Username or Email address"
                  value={this.state.email}
                />
                <Input type="password" name="senha"
                  onChange={e => this.handleChange(e)}
                  label="Password"
                  placeholder="Password"
                  value={this.state.senha}
                />

                {/* <div className="form-group mb-4">
                  <div className="custom-control custom-checkbox">
                    <input id="customCheck1" type="checkbox" className="custom-control-input" />
                    <label htmlFor="customCheck1" className="custom-control-label">Remember Me</label>
                  </div>
                </div> */}

                <button type="button" onClick={e => this.envia(e)} className="btn btn-primary shadow px-5">Log in</button>
              </form>
            </div>
          </div>
          <p className="mt-5 mb-0 text-gray-400 text-center">Design by <a href="https://bootstrapious.com/admin-templates" className="external text-gray-400">Bootstrapious</a> & Your company</p>

        </div>
     
      </div>
      <ToastContainer />
      </BlockUi>
    
         
       
    );
  }

}

export default Login;