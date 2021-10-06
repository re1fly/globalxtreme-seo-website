export const GX_BALI_KEROBOKAN = 1;
export const GX_BALI_DENPASAR = 2;
export const GX_BALIKPAPAN = 3;
export const GX_SAMARINDA = 4;
export const GX_MALANG = 5;


const addressBaliKerobokan = (
    `JL. Raya Kerobokan 388x,<br/>
     Br. Semer, Kuta, Bali (80361) Indonesia<br/>
     P. (0361) 3003401, (0361) 736811<br/>
     F. (0361) 736833<br/>
     E. info@globalxtreme.net<br/>
     Marketing 0878 6120 0011<br/>
     CSO 0878 6120 0012<br/>
     CSO 0878 6120 0007<br/>
     SMS Gateway 083 894 99 88 11`
)

const addressBaliDenpasar = (
    `Jl Raya Merdeka, Link. <br/>
     Sebudi, Sumerta Kelod, Denpasar Timur <br/>
     Komplek Pertokoan Graha Merdeka Unit 11, Bali (80239), Indonesia.<br/>
     P. (0361) 3003450<br/>
     E. info@globalxtreme.net<br/>
     Marketing 0819 1000 9387<br/>
    `
)

const addressBalikpapan = (
    `Jl. Syarifuddin Yoes No. 135-136 Sepinggan,<br/>
    Balikpapan 76115<br/>
    P. 08180-3002299<br/>
    E. info.balikpapan@globalxtreme.net`
)

const addressSamarinda = (
    `Ruko Grand Mahakam City Blok F No. 16<br/>
    Jl. KH. Siradj Salman, Samarinda 75124, Kaltim<br/>
    P. 0851 0297 0440<br/>
    E. info.samarinda@globalxtreme.net`
)

const addressMalang = (
    `Ruko Istana Dinoyo E5, Jl. MT Haryono 1A,<br/>
     Malang 65144<br/>
     P. (0341) 573222<br/>
     F. (0341) 566977<br/>
     E. cso.malang@globalxtreme.net`
)


const objLocation = (name, id, ) => {return {name: name, id: id}}
const objAddress = (address, id) => {return {address: address, id: id}}

export const getLocations = [
    {
        isGroup: true, groupName: 'Bali', locations: [
            objLocation('Bali, Area Kerobokan', GX_BALI_KEROBOKAN),
            objLocation('Bali, Area Denpasar', GX_BALI_DENPASAR)
        ]
    },
    objLocation('Balikpapan', GX_BALIKPAPAN),
    objLocation('Samarinda', GX_SAMARINDA),
    objLocation('Malang', GX_MALANG),
]

const addressAll = [
    objAddress(addressBaliKerobokan, GX_BALI_KEROBOKAN),
    objAddress(addressBaliDenpasar, GX_BALI_DENPASAR),
    objAddress(addressBalikpapan, GX_BALIKPAPAN),
    objAddress(addressSamarinda, GX_SAMARINDA),
    objAddress(addressMalang, GX_MALANG)
]

export const findAddress = (id) => {
    let index = addressAll.findIndex((vm) => vm.id == id)
    return index > -1 ? addressAll[index] : addressAll[0]
}
