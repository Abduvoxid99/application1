import React from "react"
import {Button} from "antd"

const ButtonComponent = ({text,handleClick,back_class,isLoading,isDisabled}) => {
    return (
        <div className={`navigation_btn btn_pass ${back_class}`}>
            <Button
                loading={isLoading}
                disabled={isDisabled}
                type="primary"
                htmlType="submit"
                className="next-btn "
                onClick={handleClick}
            >
                {text}
            </Button>
        </div>
    );
};

export default ButtonComponent