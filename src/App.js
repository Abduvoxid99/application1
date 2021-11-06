import {ConfigProvider} from "antd"
import locale from "antd/lib/locale/ru_RU"
import "moment/locale/ru"

//components
import ScreenSwitcher from "./screens/ScreenSwitcher"

function App() {
    return (
        <ConfigProvider locale={locale}>
            <ScreenSwitcher/>
        </ConfigProvider>
    )
}

export default App
