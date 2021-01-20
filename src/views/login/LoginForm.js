import React from 'react'
import './index.scss'
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
class loginForm extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    changeIsLogin=()=>{
        this.props.changeState(false)
    }
    render () {
        return (
            <div className='loginForm'>
                <div className='loginForm-header'>
                    <div>登录</div>
                    <div onClick={this.changeIsLogin}>注册账户</div>
                </div>
                <div className='loginForm-main'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}

                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Row>
                                <Row gutter={13}>
                                    <Col className="gutter-row" span={16}>
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <Button type="primary" danger className="login-form-button" block>
                                            获取验证码</Button>
                                    </Col>

                                </Row>
                            </Row>

                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col span={24}>
                                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                                        登录</Button>
                                </Col>
                            </Row>

                        </Form.Item>

                    </Form>
                </div>
            </div>
        )
    }
}
export default loginForm