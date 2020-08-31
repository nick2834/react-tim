import React from 'react';
import "./index.less";
import { CheckCircleOutlined, CloseCircleFilled } from '@ant-design/icons';
class Todo extends React.Component {
    close = () =>{
        this.props.onClose()
    }
    openTodoWindow = (e) =>{
        console.log(e)
        // e.stopPropagetion()
    }
    render() {
        return (
            <div className="todo_container" onClick={() => this.openTodoWindow(this)}>
                <CheckCircleOutlined />
                <span className="info">代办 · 0</span>
                <CloseCircleFilled className="close" onClick={() => this.close()}/>
            </div>
        )
    }
}

export default Todo