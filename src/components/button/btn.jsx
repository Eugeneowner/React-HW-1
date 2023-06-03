import style from "./button.module.scss"

const Button = (props) =>{
        let themeBtn
        if (props.theme === "aqua") {
            themeBtn = style.themeAqua
        } 
        if (props.theme === "dark") {
            themeBtn = style.themeDark
        }
        return (
            <button onClick={props.handleClick} className = {`${style.btn} ${themeBtn}`}>{props.text}</button>
        )
}

export default Button