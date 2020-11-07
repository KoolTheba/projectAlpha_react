export default function letterChanger(str){
    const newStr = str.replace(/(a)|b/g, (_, a) => a ? "b" : "a")
    return newStr
}