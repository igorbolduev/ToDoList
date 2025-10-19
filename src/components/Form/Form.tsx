
import classes from './Form.module.scss'

export const Form = () => {
    return (
        <div className={ classes.wrapper }>
        <form action="/ ">
            <label>
                <input type="text" className={ classes.input} />
                <button className={ classes.button }></button>
            </label>
        </form>
    </div>
    )
} 