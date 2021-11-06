import React, {useState} from "react"
import {Col, Form, Input} from "antd"
import {useDispatch, useSelector} from "react-redux"

//components
import Header from "../../components/Header/Header"
import {toOnboarding} from "../../redux/actions/backButton"
import {confirmAction} from "../../redux/actions/application"
import ButtonComponent from "../../components/Button/Button"
import {translate} from "../../LanguagesContext";

import "./userData.scss"

const UserData = () => {

    const [loading, setLoading] = useState(false)
    const {personalData} = useSelector(state => state.application)
    const dispatch = useDispatch()

    const {first_name, last_name, middle_name, birth_place, birth_date, gender, pinfl, passport_series, passport_number, passport_expiry_date, token} = personalData

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className="main_style user_main">
            <Header title="Удостоверение личности" handleClick={()=>dispatch(toOnboarding())}/>
            <Col span={22}><h4 className="user_sub_title">{translate("userTitle")}</h4></Col>

            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {
                    dispatch(confirmAction(token))
                    setLoading(true)
                }}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Input
                        defaultValue={first_name}
                        value={first_name}
                        size="small"
                        prefix={translate("name")}
                     />
                </Form.Item>

                <Form.Item>
                    <Input
                        size="small"
                        prefix={translate("surName")}
                        value={last_name}
                        defaultValue={last_name}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        size="small"
                        prefix={translate("middleName")}
                        value={middle_name}
                        defaultValue={middle_name}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        size="small"
                        prefix={translate("placeOfBirth")}
                        value={birth_place}
                        defaultValue={birth_place}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        size="small"
                        prefix={translate("dateOfBirth")}
                        value={birth_date}
                        defaultValue={birth_date}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        size="small"
                        prefix={translate("sex")}
                        value={gender === '1' ? 'Мужчина' : gender === '2' ? "Женщина" : gender}
                        defaultValue={gender === '1' ? 'Мужчина' : gender === '2' ? "Женщина" : gender}
                    />
                </Form.Item>

                <Col span={22}>
                    <h4 className="user_sub_title user_data">
                        {translate("identityDocument")}
                    </h4>
                </Col>

                <Form.Item style={{marginTop: '20px'}}>
                    <Input
                        value={pinfl}
                        defaultValue={pinfl}
                        maxLength={14}
                        size="small"
                        prefix={translate("pinfl")}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        maxLength={2}
                        size="small"
                        prefix={translate("passSeria")}
                        value={passport_series}
                        defaultValue={passport_series}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        maxLength={7}
                        size="small"
                        prefix={translate("passNumber")}
                        value={passport_number}
                        defaultValue={passport_number}
                    />
                </Form.Item>

                <Form.Item>
                    <Input
                        style={{marginBottom: '40px'}}
                        value={passport_expiry_date}
                        defaultValue={passport_expiry_date}
                        size="small"
                        bordered={false}
                        prefix={translate("passDate")}
                    />
                </Form.Item>

                <Form.Item>
                    <ButtonComponent
                        back_class="user_btn"
                        isLoading={loading}
                        text={translate("confirm")}
                    />
                </Form.Item>
            </Form>
        </div>
    )
}


export default UserData
