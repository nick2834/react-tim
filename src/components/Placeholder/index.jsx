import React from 'react';
import { Result } from 'antd';

class Placeholder extends React.Component {
    render() {
        const style = {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        return (
            <div className="placeholder" style={style}>
                <Result status="500" />
            </div>
        )
    }
}

export default Placeholder