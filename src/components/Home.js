import React from 'react'
import { Button } from 'antd';
class Home extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return (
        <div>
            home
            <Button type="primary">Button</Button>
        </div>)
    }
}
export default Home;