import React from 'react'
import './index.scss'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            isLogin: true
        }


    }
    changeState = (loginState) => {
        this.setState({
            isLogin: loginState
        })
    }


    render () {
        const { isLogin } = this.state
        return (
            <div className='login'>
                1
                {isLogin == true}
                {this.state.isLogin == true ? <LoginForm changeState={this.changeState}></LoginForm> : <RegisterForm changeState={this.changeState}></RegisterForm>}
            </div>
        )
    }
}
export default Login