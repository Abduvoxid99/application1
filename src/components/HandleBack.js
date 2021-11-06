import {tokens} from "../tokens"
import {lang} from "../LanguagesContext";

export const handleRedirect = () => {
    window.location.replace(`${window.location.origin}/hamkor-store?lang=${lang}&ctoken=${tokens.ctoken}&oauth=${tokens.oauth}`)
}