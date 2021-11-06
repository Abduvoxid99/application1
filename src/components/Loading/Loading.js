import React from "react"
import {LoadingOutlined} from "@ant-design/icons"
import {Spin} from "antd"

import "./loading.scss"

const Loading = () => {
    return (
        <div className="loading">
            <Spin indicator={<LoadingOutlined style={{fontSize: 50}} spin/>}/>
        </div>
    )
}

export default Loading