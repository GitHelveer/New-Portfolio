import "./Button.css"
function Button(props) {
    return (
<button className="mainbutton">
    {props.button}
</button>
    );
}

export default Button;