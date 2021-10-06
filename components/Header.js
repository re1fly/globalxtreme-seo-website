import Head from 'next/head'
import {SeoGeneral} from '../content/seoOfPage'

const Header = (props) => {
    const title = props.title || 'GlobalXtreme | Fiber Broadband, Wireless, TV & Phone'

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.png"/>
            <meta name="theme-color" content="#f9c900"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=1" />
            <SeoGeneral/>
            {props.meta||''}
        </Head>
    )
}

export default Header
