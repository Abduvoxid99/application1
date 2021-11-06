import React, {useState} from "react"
import {Button, Col, Row, Form, Input, Checkbox, Modal, DatePicker} from "antd"
import {useDispatch} from "react-redux"
import moment from "moment"

import {getUserData} from "../../redux/actions/application"
import {backToMain} from "../../redux/actions/backButton"
//components
import Header from "../../components/Header/Header"
import Agree from "../../components/Document/Agree"
import ButtonComponent from "../../components/Button/Button"
import {translate} from "../../LanguagesContext"
//images
import leftOutIcon from "../../icons/Icon color.png"

import "./passport.scss"

const Passport = () => {

    const [loading, setLoading] = useState(false)
    const [offer, setOffer] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const dispatch = useDispatch()

    const onFinish = ({birth_date, passport_number, passport_series}) => {

        setLoading(true)
        const params = {
            birth_date: moment(birth_date).format("DD.MM.YYYY"),
            passport_number,
            passport_series,
            agreement: 1
        }
        dispatch(getUserData(params))
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    const dateFormat = 'DD.MM.YYYY';

    return (
        <div className="main_style passport_main">
            <Header title={translate("headerTitle")} handleClick={() => dispatch(backToMain())}/>
            <div className="passport_container">
                <Form
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col span={22}>
                            <h1 className="passport_sub_title pass_data">{translate("enterData")}</h1>
                        </Col>
                    </Row>

                    <Form.Item
                        style={{marginTop: '20px'}}
                        label={translate("passportSeries")}
                        name="passport_series"
                        rules={[
                            {
                                required: true,
                                message: `${translate('validateSeries')}`,
                            },
                            {
                                pattern: /[A-Za-z]/,
                                message: `${translate("validateOnlySeries")}`,
                            }
                        ]}
                    >
                        <Input
                            maxLength="2"
                            onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()}
                            size="small"
                            placeholder={translate("enterPassData")}
                            className="pass_input"
                            style={{borderBottom: '1px solid black '}}
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        label={translate("passportNumber")}
                        name="passport_number"
                        rules={[
                            {
                                required: true,
                                message: `${translate('validateNumber')}`,
                            },
                            {
                                pattern: /^(?:\d*)$/,
                                message: `${translate('validateOnlyNumber')}`,
                            },
                            {
                                pattern:".{0}|.{8,}",

                            }
                        ]}
                    >
                        <Input
                            maxLength={7}
                            size="small"
                            placeholder={translate("enterPassData")}
                            className="pass_input"
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item
                        label={translate("birthDay")}
                        name="birth_date"
                        rules={[
                            {
                                required: true,
                                message: `${translate("validateBirthDay")}`,
                            },
                        ]}

                    >
                        <DatePicker
                            placeholder={translate("birthDayFormat")}
                            className="pass_input"
                            format={dateFormat}
                            disabled={loading}
                            showToday={false}
                        />

                    </Form.Item>

                    <Form.Item>
                        <Checkbox
                            onChange={(e) => {
                                setOffer(e.target.checked)
                            }}
                            checked={offer}
                        >
                            <p> {translate("agreementTitle")} </p>
                        </Checkbox>
                        <span onClick={() => {
                            setIsModalVisible(true)
                        }} className="personal_data">{translate("agreementText")}</span>
                    </Form.Item>

                    <Form.Item>
                        <ButtonComponent
                            isLoading={loading}
                            isDisabled={!offer}
                            text={translate("continue")}
                        />
                    </Form.Item>
                </Form>

                <Modal
                    visible={isModalVisible}
                    closable={false}
                    footer={null}
                    centered={true}
                    className="modal_oferta"
                >
                    <div className="header_modal">
                        <span><img src={leftOutIcon} onClick={() => setIsModalVisible(false)} alt=""/></span>
                        <Col span={22}><h3 className="header_title">{translate("modalHeadTitle")}</h3></Col>
                    </div>
                    <Agree/>

                    <div className="footer_modal">
                        <div className="btn_modal">
                            <Button
                                loading={loading}
                                type="primary"
                                htmlType="submit"
                                className="btn_modal_body"
                                onClick={() => {
                                    setOffer(true)
                                    setIsModalVisible(false)
                                }}
                            >
                                {translate("agree")}
                            </Button>
                        </div>

                    </div>

                </Modal>
            </div>
        </div>
    )
}

export default Passport