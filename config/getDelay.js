let orderLoop = 0

export const getDelayTime = (delays = [], max = 0) => {
    let time = delays[orderLoop]
    orderLoop +=1
    if (orderLoop > max) {
        orderLoop = 0
    }

    return time
}

export const generateDelay = (count) => {
    let delay = []
    for (let i = 0; i < count; i++) {
        delay[i] = (i+1) + '00'
    }
    return delay
}
