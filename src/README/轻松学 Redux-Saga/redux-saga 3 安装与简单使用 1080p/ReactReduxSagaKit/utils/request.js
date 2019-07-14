import fetch from "fetch";
export const request = (res) =>{
    const {method, url} = res;
    fetch[method](url).then((resolve) => {
        return resolve;
    })
}