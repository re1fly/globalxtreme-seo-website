import {GX_BALI_KEROBOKAN, GX_BALI_DENPASAR, GX_BALIKPAPAN,
    GX_SAMARINDA, GX_MALANG} from '../../config/locations'
import {UICardPackage, UISectionPackage} from "../UIPartials";

export const getPackageByLocation = (locationId = '') => {
    let getPackage = null

    switch (locationId) {
        case GX_BALI_KEROBOKAN:
            getPackage = <PackageFOBaliKerobokan/>
            break;
        case GX_BALI_DENPASAR:
            getPackage = <PackageFOBaliKerobokan/>
            break;
        case GX_BALIKPAPAN:
            getPackage = <PackageFOBalikpapan/>
            break;
        case GX_SAMARINDA:
            getPackage = <PackageFOSamarinda/>
            break;
        case GX_MALANG:
            getPackage = <PackageFOMalang/>
            break;
        default:
            getPackage = <PackageFOBaliKerobokan/>
            break;
    }

    return getPackage;
}


const ColumnPackage = ({children, extraClass = '', dataAos = 'fade-up', other = {}}) => (
    <div className={'col-lg-4 col-md-6 mt-3 mb-3 ' + extraClass}
         data-aos={dataAos}
         {...other}>
        {children}
    </div>
)


const PackageFOBaliKerobokan = () => {
    const PointsXLite = () => (
        <>
            Single link<br/>
            Additional IDR 100,000 for Public IP<br/>
            Set Up Fee starting from IDR 500,000<br/>
            All prices are subject 10% VAT
        </>
    )

    const PointsXPref = () => (
        <>
            Multilink<br/>
            Priority services<br/>
            Public IP not included<br/>
            Additional IDR 100,000 for Public IP<br/>
            Set Up Fee starting from IDR 500,000<br/>
            All prices are subject 10% VAT
        </>
    )

    const PointsXSign = () => (
        <>
            Multilink<br/>
            Priority services<br/>
            Public IP included<br/>
            Set Up Fee starting from IDR 500,000<br/>
            All prices are subject 10% VAT
        </>
    )

    const PointXOffice = () => (
        <>
            <b className="font-weight-bold">Dedicated 1:1</b><br/> <br/>
            Single link<br/>
            Additional IDR 100,000 for Public IP<br/>
            Set Up Fee starting from IDR 500,000<br/>
            All prices are subject 10% VAT
        </>
    )

    const PointsDedic = () => (
        <>
            <b className="font-weight-bold">Dedicated 1:1</b><br/><br/>
            Multilink<br/>
            Public IP included<br/>
            Top Priority Services<br/>
            Set Up Fee starting from IDR 3,000,000<br/>
            All prices are subject 10% VAT
        </>
    )

    return (
        <>
            <UISectionPackage title="XTREME LITE">
                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '100'}}>
                    <UICardPackage
                        speed={75}
                        points={PointsXLite()}
                        iconSpeed="/images/speed/yellow-75.svg"
                        prices="IDR 300.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '200'}}>
                    <UICardPackage
                        speed={150}
                        points={PointsXLite()}
                        iconSpeed="/images/speed/yellow-150.svg"
                        prices="IDR 500.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={300}
                        points={PointsXLite()}
                        iconSpeed="/images/speed/yellow-300.svg"
                        prices="IDR 1.000.000/Month"/>
                </ColumnPackage>
            </UISectionPackage>

            <UISectionPackage title="XTREME PREFERRED">
                <ColumnPackage other={{'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={50}
                        iconSpeed="/images/speed/white-50.svg"
                        points={PointsXPref()}
                        prices="IDR 500.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '400'}}>
                    <UICardPackage
                        speed={100}
                        iconSpeed="/images/speed/white-100.svg"
                        points={PointsXPref()}
                        prices="IDR 1.000.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '500'}}>
                    <UICardPackage
                        speed={150}
                        iconSpeed="/images/speed/white-150.svg"
                        points={PointsXPref()}
                        prices="IDR 1.600.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>
            </UISectionPackage>

            <UISectionPackage title="XTREME SIGNATURE" extraClassRow="justify-content-center">
                <ColumnPackage other={{'data-aos-delay': '300'}}>
                    <UICardPackage
                        iconSpeed="/images/speed/yellow-200.svg"
                        speed={200}
                        points={PointsXSign()}
                        prices="IDR 2.500.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '400'}}>
                    <UICardPackage
                        speed={1000}
                        iconSpeed="/images/speed/yellow-1000.svg"
                        points={PointsXSign()}
                        prices="IDR 20.000.000/Month"/>
                </ColumnPackage>
            </UISectionPackage>

            <UISectionPackage title="XTREME OFFICE">
                <ColumnPackage other={{'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={25}
                        iconSpeed="/images/speed/white-25.svg"
                        type="Dedicated Link"
                        points={PointXOffice()}
                        prices="IDR 1.500.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '400'}}>
                    <UICardPackage
                        speed={50}
                        iconSpeed="/images/speed/white-50.svg"
                        type="Dedicated Link"
                        points={PointXOffice()}
                        prices="IDR 2.500.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '500'}}>
                    <UICardPackage
                        speed={100}
                        iconSpeed="/images/speed/white-100.svg"
                        type="Dedicated Link"
                        points={PointXOffice()}
                        prices="IDR 4.800.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>
            </UISectionPackage>

            <UISectionPackage title="Dedicated Link" extraClassRow="justify-content-center">
                <ColumnPackage other={{'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={50}
                        iconSpeed="/images/speed/yellow-50.svg"
                        type="Dedicated Link"
                        points={PointsDedic()}
                        prices="IDR 6.000.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '400'}}>
                    <UICardPackage
                        speed={100}
                        iconSpeed="/images/speed/yellow-100.svg"
                        type="Dedicated Link"
                        points={PointsDedic()}
                        prices="IDR 10.000.000/Month"/>
                </ColumnPackage>
            </UISectionPackage>
        </>
    )
}

const PackageFOBaliDenpasar = () => {


    return (
        <>

        </>
    )
}

const PackageFOBalikpapan = () => {

    const PointsXPrefBP = () => (
        <>
            Public IP not included<br/>
            Set Up Fee starting from IDR 1,500,000<br/>
            All prices are subject 10% VAT
        </>
    )

    const PointsXSignBP = () => (
        <>
            Public IP included<br/>
            Set Up Fee starting from IDR 1,500,000<br/>
            All prices are subject 10% VAT
        </>
    )


    return (
        <>
            <UISectionPackage title="XTREME PREFERRED">
                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '100'}}>
                    <UICardPackage
                        speed={20}
                        iconSpeed="/images/speed/white-50.svg"
                        points={PointsXPrefBP()}
                        prices="IDR 300.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '200'}}>
                    <UICardPackage
                        speed={40}
                        iconSpeed="/images/speed/white-100.svg"
                        points={PointsXPrefBP()}
                        prices="IDR 500.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={80}
                        iconSpeed="/images/speed/white-150.svg"
                        points={PointsXPrefBP()}
                        prices="IDR 800.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>
            </UISectionPackage>

            <UISectionPackage title="XTREME SIGNATURE" extraClassRow="justify-content-center">
                <ColumnPackage other={{'data-aos-delay': '100'}}>
                    <UICardPackage
                        iconSpeed="/images/speed/yellow-50.svg"
                        speed={50}
                        points={PointsXSignBP()}
                        prices="IDR 1.200.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '200'}}>
                    <UICardPackage
                        speed={100}
                        iconSpeed="/images/speed/yellow-100.svg"
                        points={PointsXSignBP()}
                        prices="IDR 2.200.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={200}
                        iconSpeed="/images/speed/yellow-1000.svg"
                        points={PointsXSignBP()}
                        prices="IDR 3.500.000/Month"/>
                </ColumnPackage>
            </UISectionPackage>
        </>
    )
}

const PackageFOSamarinda = () => {

    const PointsXPrefSM = () => (
        <>
            Public IP not included<br/>
            30% Bandwidth guarantee<br/>
            Set Up Fee starting from IDR 1,500,000<br/>
            All prices are subject 10% VAT
        </>
    )

    const PointsXSignSM = () => (
        <>
            Public IP included<br/>
            50% Bandwidth guarantee<br/>
            Set Up Fee starting from IDR 1,500,000<br/>
            All prices are subject 10% VAT
        </>
    )


    return (
        <>
            <UISectionPackage title="XTREME PREFERRED">
                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '100'}}>
                    <UICardPackage
                        speed={20}
                        iconSpeed="/images/speed/white-50.svg"
                        points={PointsXPrefSM()}
                        prices="IDR 300.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '200'}}>
                    <UICardPackage
                        speed={40}
                        iconSpeed="/images/speed/white-100.svg"
                        points={PointsXPrefSM()}
                        prices="IDR 500.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={80}
                        iconSpeed="/images/speed/white-150.svg"
                        points={PointsXPrefSM()}
                        prices="IDR 800.000/Month"
                        bgCard="bg-primary-yellow"
                        bgFooter="bg-white"/>
                </ColumnPackage>
            </UISectionPackage>

            <UISectionPackage title="XTREME SIGNATURE" extraClassRow="justify-content-center">
                <ColumnPackage other={{'data-aos-delay': '100'}}>
                    <UICardPackage
                        iconSpeed="/images/speed/yellow-50.svg"
                        speed={50}
                        points={PointsXSignSM()}
                        prices="IDR 1.200.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '200'}}>
                    <UICardPackage
                        speed={100}
                        iconSpeed="/images/speed/yellow-100.svg"
                        points={PointsXSignSM()}
                        prices="IDR 2.200.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-delay': '300'}}>
                    <UICardPackage
                        speed={200}
                        iconSpeed="/images/speed/yellow-1000.svg"
                        points={PointsXSignSM()}
                        prices="IDR 3.500.000/Month"/>
                </ColumnPackage>
            </UISectionPackage>
        </>
    )
}

const PackageFOMalang = () => {

    const PointsCombo = () => (
        <>
            One Public IP provided<br/>
            50% Bandwidth guarantee<br/>
            Installation Fee IDR 500,000<br/>
            All prices are subject 10% VAT
        </>
    )

    return (
        <>
            <UISectionPackage title="XTREME COMBO" extraClassRow="justify-content-center">
                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '100'}}>
                    <UICardPackage
                        iconSpeed="/images/speed/yellow-50.svg"
                        speed={10}
                        points={PointsCombo()}
                        prices="IDR 300.000/Month"/>
                </ColumnPackage>

                <ColumnPackage other={{'data-aos-anchor-placement': 'top', 'data-aos-delay': '200'}}>
                    <UICardPackage
                        speed={20}
                        iconSpeed="/images/speed/yellow-100.svg"
                        points={PointsCombo()}
                        prices="IDR 500.000/Month"/>
                </ColumnPackage>\
            </UISectionPackage>
        </>
    )
}
