const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }))

    return config;
  },
  i18n: {
    locales: ['en', 'nl', 'id'],
    defaultLocale: 'en'
  },
  env: {
    tokenTawkToGX: {
      ID: '56fa108f092e9b571c69e358',
      KEY: 'default'
    },
    tokenTawkToTestArbi: {
      ID: '610948ee649e0a0a5ccf4f7d',
      KEY: '1fc649pcc'
    },

    myIG: {
      BASE_URL: 'https://graph.instagram.com/',
      TOKEN: 'IGQVJYUWFoTjAyUEZAjN1lXNWZAXM0RVU1dHOGUyLWtNMVJXRzBOUHNOWEFrd1lnbV93bE9oRzM5aVFQeEd1dnZA5NFotLTFUSzFaVVE5dDE4bVd1Q1NISFA4MFdYUUk0Yld0OUloLUJNbkdMc0pzRVJQZAgZDZD'
    },

    myTelegram: {
      baseURL: 'https://api.telegram.org',
      botTokens: {
        'WIREDOWN' : '1130256005:AAHZ1dF_pb_wI8_GgyuIXyX7U7gU85UwZzg',
        'MARKETING' : '951621176:AAHcyJGc_tvaHX6Z_zUrMGu4WmRiGIcXKdc',
        'DEVELOPMENT' : '1285522820:AAEzeBi2iz-Z0_1ua55G9jHg8EMKE8nXcSk',
        'TICKETING' : '1341635991:AAGTBTBx21NX6rtP1TxiNOjzuFCX0YSMLVc'
      },
      roomChatIDs: {
        'WIREDOWN': '-454997289',
        'MARKETING': '-1001408482769',
        'DEVELOPMENT': '-485588353',
        'CSO_CTSO': '-456050472',
        'CTSO_NA': '-473510864',
        'WORK_ORDER': '-448546819',
        'CRM_NOTIFICATION': '-550268302',
        'MYGX_APP_DIRECT_TICKETS': '-552367187'
      }
    },

    myReCAPTCHA: {
      siteKey: '6LdXO3IcAAAAAG_xeTpYb5xDj2F2STOhxJxQ3mdH',
      secretKey: '6LdXO3IcAAAAAFDprtLD6IPsRwxII05Lo1rOHWcd'
    },

    myReCAPTCHAV2: {
      siteKey: '6Ld-aHIcAAAAAF3WPwYJ2uDC34YjYGqZn0Hw4tD-',
      secretKey: '6Ld-aHIcAAAAAPWOEZTnLTPg-xau1Kt7xYhebXQf'
    },

    myRaptchaV2Loc: {
      siteKey: '6LefknIcAAAAAM_ta2IS7ph3-W21NSQ7Y9DeGNa2',
      secretKey: '6LefknIcAAAAACM_JS8_9ZWR_bchJaH5P_k4L7TP'
    }
  }
}
