const url = window.location.search
const urlParams = new URLSearchParams(url)

export const tokens =  {
    ctoken: urlParams.get("ctoken"),
    oauth: urlParams.get("oauth")
}
