import React from "react"
import {useDispatch} from "react-redux"

//components
import {handleRedirect} from "../../components/HandleBack"
import ButtonComponent from "../../components/Button/Button"
import {toOnboarding} from "../../redux/actions/backButton"
import {translate} from "../../LanguagesContext"

//images
import document from "../../images/Document.png"

import "./preOnboarding.scss"

const PreOnboarding = () => {

    const dispatch = useDispatch()

    return (
        <div className="main_body main_style">
            <h1 className="main_title" onClick={handleRedirect}>HamkorStore</h1>

            <div>
                <div className="main_image">
                    <img src={document} alt="loading img"/>
                </div>
                <p className="main_text">
                    {translate("mainText")}
                </p>
            </div>

            <ButtonComponent
                text={translate("mainBtn")}
                handleClick={()=>dispatch(toOnboarding())}
                back_class="main_btn"
            />
        </div>
    )
}

export default PreOnboarding