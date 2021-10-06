import * as Icon from "react-feather";
import FormInput from '../../form/FormInput'
import FormTextArea from '../../form/FormTextArea'
import {useState, useCallback, useEffect} from "react";
import {TelegramClient} from "messaging-api-telegram";
import {ModalInfo} from '../../UIPartials'
import * as yup from 'yup'
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import React from "react";


const roomChatIDs = process.env.myTelegram.roomChatIDs
const clientTG = new TelegramClient({
    accessToken: process.env.myTelegram.botTokens.DEVELOPMENT
})

const validationSchema = yup.object().shape({
    userId: yup.string().required(),
    email: yup.string().required().email(),
    siteURL: yup.string().required().url(),
    message: yup.string().required(),
    // valCheckBoxCaptcha: yup.boolean().required('Please complete the Captcha'),
    // captchaToken: yup.string().required('Please complete the Captcha')
})

let recaptchaInstance;
const executeCaptcha = (e) => {
    e.preventDefault();
    recaptchaInstance.execute();
};

const FormReport = () => {
    const [isLoading, setIsLoading] = useState(false)

    const formMethods = useForm({
        resolver: yupResolver(validationSchema)
    })
    const {register, handleSubmit, reset, setValue, formState:{ errors }} = formMethods

    const _handleSend = async (data) => {
        const bundleMsg = '--------------------\n' +
            'User ID: ' + data.userId+'\n' +
            'E-mail: ' + data.email+'\n' +
            'siteURL: ' + data.siteURL+'\n' +
            'message: ' + data.message+'\n' +
            '--------------------'

        await _isLoading(true)
        await clientTG.sendMessage(roomChatIDs.DEVELOPMENT, bundleMsg).then((res) => {
            if (res.messageId) {
                reset()
                _closeModal()
                setTimeout(() => {_handleModalMsg(false)}, 400)
            }
            _isLoading(false)
        })
    }


    const _isLoading = useCallback((allow) => {
        setIsLoading(allow)
    }, [isLoading])

    const _closeModal = () => {$('#modalFormReportInternet').modal('hide')}

    const _handleModalMsg = (hide = true) => {
        $('#modalInfoMessage').modal(hide ? 'hide' : 'show')
    }

    const _handleCaptchaToken = (token = '') => {
        setValue('captchaToken', token);
        setValue('valCheckBoxCaptcha',token ? true : false)
    }

    useEffect(() => {
        register('valCheckBoxCaptcha')
        register('captchaToken')
    }, [])

    useEffect(() => {
        console.log('err: ', errors)
    }, [errors])

    const recaptchaRef = React.createRef();

    const _handleSubmitRecaptcha = (event) => {
        event.preventDefault();
        // Execute the reCAPTCHA when the form is submitted
        recaptchaRef.current.execute();
    };

    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        console.log('see captchaCode: ', captchaCode)
        if(!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the
        // alert
        // alert(`Hey, ${email}`);
        // Reset the reCAPTCHA so that it can be executed again if user
        // submits another email.
        recaptchaRef.current.reset();
    }

    const _handleRecaptchaLoaded = () => {
        console.log('captcha successfully loaded')
    }

    const _handleVerifyCallback = (response) => {
        alert('response: ', response ? true : false)
    }

    const _handleTestSend = async (data) => {
        // e.preventDefault();
        alert('is work')
        const recaptchaValue = recaptchaRef.current.getValue()
    }

    const [tokenRecaptcha, setTokenRecaptcha] = useState('')
    const [expiredToken, setExpiredToken] = useState(false)
    const _handleChangeRecaptcha = async (value) => {
        console.log("Captcha value:", value);
        await setTokenRecaptcha(value)
        await _handleCaptchaToken(value)
        value === null ? setExpiredToken(true) : ''
    }



    return  (
        <>
            <div className="modal right fade fade-left" id="modalFormReportInternet" tabIndex="-1" role="dialog"
                 data-backdrop="static" data-keyboard="false"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content border-0 b-rad-20 base-box-shadow">
                        <div className="modal-body position-relative">
                            <h5 className="text-center font-weight-bold mb-5 mt-5">REPORT HERE</h5>

                            <FormProvider {...formMethods}>
                                <form onSubmit={handleSubmit(_handleSend)}
                                      // onSubmit={handleSubmit(_handleTestSend)}
                                      className={'needs-validation '}>

                                    <div className="pl-md-5 pr-md-5 mb-5">
                                        <FormInput name="userId"
                                                   addClass={'small ' + ''}
                                                   iconClass="fa fa-user"
                                                   placeholder="your user id (arbiMdy46)"
                                                   useMessage={true}
                                                   colorMessage="text-danger fs-dot-8-rem"/>

                                        <FormInput name="email"
                                                   type="email"
                                                   addClass="small"
                                                   iconClass="fa fa-envelope"
                                                   placeholder="your e-mail (user@globalxtreme.net)"
                                                   useMessage={true}
                                                   colorMessage="text-danger fs-dot-8-rem"/>

                                        <FormInput name="siteURL"
                                                   addClass="small"
                                                   iconClass="fa fa-globe"
                                                   placeholder="site URL (http://urlName.com)"
                                                   useMessage={true}
                                                   colorMessage="text-danger fs-dot-8-rem"/>

                                        <FormTextArea name="message"
                                                      placeholder="type your message"
                                                      rows={5}
                                                      addClass="small"
                                                      extraClass="mt-4 mb-4 text-left"
                                                      useMessage={true}
                                                      colorMessage="text-danger fs-dot-8-rem"
                                                      label="your message for administrator"
                                                      labelClass="small font-italic"/>

                                        {/*<Recaptcha*/}
                                        {/*    sitekey="6LfTolwUAAAAAJ16pnJ1qBgXKlzGeKXRsCMRXllK"*/}
                                        {/*    render="explicit"*/}
                                        {/*    onloadCallback={_handleRecaptchaLoaded}*/}
                                        {/*    verifyCallback={_handleVerifyCallback}*/}
                                        {/*/>*/}

                                        {/*<div className="form-group">*/}
                                        {/*    <ReCAPTCHA*/}
                                        {/*        size="normal"*/}
                                        {/*        // ref={recaptchaRef}*/}
                                        {/*        {...register('captchaToken')}*/}
                                        {/*        onChange={_handleChangeRecaptcha}*/}
                                        {/*        sitekey="6LefknIcAAAAAM_ta2IS7ph3-W21NSQ7Y9DeGNa2"/>*/}

                                        {/*    <small className="form-text text-danger fs-dot-8-rem">*/}
                                        {/*        {errors.valCheckBoxCaptcha?.message}*/}
                                        {/*    </small>*/}
                                        {/*</div>*/}

                                        <div className="w-100 text-center mt-5">
                                            <button className="btn btn-outline-yellow btn-sm btn-send-report mr-3"
                                                    onClick={_closeModal}
                                                    type="button"
                                                    disabled={isLoading}>
                                                CANCEL
                                            </button>

                                            <button className="btn btn-primary-yellow btn-sm btn-send-report"
                                                    type="submit"
                                                    disabled={isLoading}>
                                                SEND
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                    </div>
                </div>
            </div>

            <ModalInfo>
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5 text-center">
                        <Icon.CheckCircle size={60} color="green"/>

                        <h3 className="font-weight-600 mt-4">
                            Thanks
                        </h3>
                        <p className="small">Your report has been submitted successfully!</p>

                        <button className="btn btn-primary-yellow b-rad-20 btn-sm btn-large-second"
                                onClick={_handleModalMsg}>
                            Close
                        </button>
                    </div>
                </div>
            </ModalInfo>
        </>
    )
}

export default FormReport
