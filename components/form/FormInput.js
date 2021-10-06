import {useFormContext} from 'react-hook-form'

const FormInput = (props) => {
    const {register, formState:{ errors }} = useFormContext()
    const msgError = errors[props.name]?.message
    const addClassError = props.useMessage && msgError ? ' is-invalid ' : ''

    return (
        <div className={'form-group mb-3 ' + props.extraClass + (props.iconClass ? ' form-use-icon' : '')}>
            {props.iconClass ? (<span className={'form-control-feedback ' + (props.iconClass||'')}/>) : null}
            <input type={props.type||'text'}
                   required={props.required ? true : false}
                   id={props.id||''}
                   placeholder={props.placeholder||''}
                   {...register(props.name)}
                   className={'form-control ' + (props.addClass||'') + addClassError}/>
            {props.useMessage ? (
                <small className={'form-text ' + (props.colorMessage||'text-muted')}>
                    {msgError}
                </small>
            ) : null}
        </div>
    )
}

export default FormInput
