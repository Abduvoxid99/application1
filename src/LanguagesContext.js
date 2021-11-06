import ru from "./translates/ru.json"
import uz from "./translates/uz.json"
import en from "./translates/en.json"
import uzK from "./translates/uzK.json"

const url = window.location.search
const urlParams = new URLSearchParams(url)
const urlLang = urlParams.get("lang")

export const lang = urlLang === "ru" || urlLang === "uz" || urlLang === "en" || urlLang === "uzK" ? urlLang : "ru"

export const translate = (key) => {
    if(urlLang === "uz")
        return [uz][0][key]
    else if(urlLang === "en")
        return [en][0][key]
    else if(urlLang === "ru")
        return [ru][0][key]
    else if(urlLang === "uzK")
        return [uzK][0][key]
    else
        return [ru][0][key]
}
