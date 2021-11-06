import React, {lazy, Suspense} from "react"
import {useSelector} from "react-redux"
import Error from "../components/Error/Error"
import Loading from "../components/Loading/Loading"

const UserData = lazy(() => import("../pages/UserData/UserData"))
const Passport = lazy(() => import("../pages/Passport/Passport"))
const PreOnboarding = lazy(() => import("../pages/PreOnboarding/PreOnboarding"))
const SmsPage = lazy(() => import("../pages/SmsPage/SmsPage"))

const ScreenSwitcher = () => {
    const {showScreen, error} = useSelector((state) => state.meta)
    if (error) return <Error/>

    switch (true) {
        case showScreen === "user_data":
            return <Suspense fallback={<Loading/>}><UserData/></Suspense>
        case showScreen === "sms":
            return <Suspense fallback={<Loading/>}><SmsPage/></Suspense>
        case showScreen === "onboarding":
            return <Suspense fallback={<Loading/>}><Passport/></Suspense>
        case showScreen === "main":
        default:
            return <Suspense fallback={<Loading/>}><PreOnboarding/></Suspense>
    }
}

export default ScreenSwitcher