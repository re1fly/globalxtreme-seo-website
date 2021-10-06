export const SeoGeneral = () => (
    <>
        <meta name="google-site-verification" content=""/>
        <meta name="csrf-token" content=""/>
        <meta name='description' content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="page" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:url" content="" />
        <meta property="og:image:size" content="300" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:site" content="" />
        <meta name="author" content="Fastest Internet Connection in Bali"/>
        <meta name="keywords" content="Internet Provider, Internet in Bali, Unlimited, High speed, internet connection, 100Mbps Speed, Fiber Broadband, Wireless Broadband, Fiber Optic, GlobalXtreme"/>
        <link rel="canonical" href=""/>
    </>
)


const config = (title, meta = (<></>)) => {
    return {
        title: title,
        meta: meta,
    }
}

export const headPageHome = {
    ...config('GlobalXtreme | Fiber Broadband, Wireless, TV & Phone')
}

export const headPageFO = {
    ...config('GlobalXtreme offers Fiber Broadband up to 100 Mbps with')
}

export const headPageTVChannel = {
    ...config('GlobalXtreme TV Channel Full HD 4K')
}

export const headPageSpeedTest = {
    ...config('GlobalXtreme | Speed Test Connection')
}

export const headPageInternetPositive = {
    ...config('GlobalXtreme | Internet Positive')
}
