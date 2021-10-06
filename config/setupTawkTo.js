import tawkTo from "tawkto-react";

const setupTawkTo = () => {
    tawkTo(process.env.tokenTawkToGX.ID, process.env.tokenTawkToGX.KEY)
}

export default setupTawkTo
