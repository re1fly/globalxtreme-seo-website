import {useFormContext} from "react-hook-form";

const FormTextArea = (props) => {
    const {register, formState:{ errors }} = useFormContext()
    const msgError = errors[props.name]?.message
    const addClassError = props.useMessage && msgError ? ' is-invalid ' : ''

    return (
        <div className={'form-group mb-3 ' + props.extraClass||''}>
            {props.label ? <label htmlFor="" className={props.labelClass}>{props.label}</label> : null}
            <textarea required={props.required ? true : false}
                      name={props.name}
                      id={props.id||''}
                      placeholder={props.placeholder}
                      className={'form-control ' + (props.addClass||'') + addClassError}
                      {...register(props.name)}
                      cols={props.cols||'30'}
                      rows={props.rows||'10'}/>
            {props.useMessage ? (
                <small className={'form-text ' + (props.colorMessage||'text-muted')}>
                    {msgError}
                </small>
            ) : null}
        </div>
    )
}

export default FormTextArea
