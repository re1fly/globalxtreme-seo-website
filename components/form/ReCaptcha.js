import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const reCaptchaKey = process.env.myReCAPTCHA.secretKey

const CaptchaButton = ({ onVerifyCaptcha }) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const clickHandler = async () => {
        if (!executeRecaptcha) {
            return;
        }

        const token = await executeRecaptcha('contact');

        onVerifyCaptcha(token);
    };

    return (
        <button onClick={clickHandler}>
            Please validate you are a human.
        </button>
    );
};

export const ReCaptcha = ({ onVerifyCaptcha }) => (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
        <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
    </GoogleReCaptchaProvider>
);


export default ReCaptcha
