export interface Listing {
    id: number,
    img: string,
    header: string,
    type: string,
    address: string,
    bedroom: number,
    bathroom: number,
    kitchen: string,
    houses: string,
    price: number,

}

export const listings = [
    {
        id: 1,
        img: '/assets/1.png',
        header: 'Single Family, Couple',
        type: 'Couple',
        address: '98 East st.',
        bedroom: 3,
        bathroom: 1,
        kitchen: '1',
        houses: 'For Rent',
        price: 150000
    },
    {
        id: 2,
        img: '/assets/2.png',
        header: 'Metroclark Homes',
        type: 'Single Family, Couple',
        address: '#23 Clark st. ',
        bedroom: 3,
        bathroom: 1,
        kitchen: '1',
        houses: 'For Sale',
        price: 2300000
    },
    {
        id: 3,
        img: '/assets/3.png',
        header: 'Olongapo',
        type: 'Family',
        address: '#11 Rita st.',
        bedroom: 4,
        bathroom: 3,
        kitchen: '1',
        houses: 'For Sale',
        price: 5000000
    },
    {
        id: 4,
        img: '/assets/4.png',
        header: 'Baloy',
        type: 'Couple',
        address: '#34 Baloy st.',
        bedroom: 2,
        bathroom: 2,
        kitchen: '1',
        houses: 'For Sale',
        price: 260000
    },
    {
        id: 5,
        img: '/assets/5.png',
        header: 'Angeles',
        type: 'Single Family',
        address: '#04 Clark Timog Residences',
        bedroom: 3,
        bathroom: 2,
        kitchen: '2',
        houses: 'For Sale',
        price: 500000
    },
    {
        id: 6,
        img: '/assets/6.png',
        header: 'Renzille',
        type: 'Couple',
        address: '#04 Sania st.',
        bedroom: 2,
        bathroom: 2,
        kitchen: '1',
        houses: 'For rent',
        price: 150000
    },
    {
        id: 7,
        img: '/assets/7.png',
        header: 'Pampanga',
        type: 'Couple',
        address: '#16 Abra st.',
        bedroom: 2,
        bathroom: 1,
        kitchen: '1',
        houses: 'For Rent',
        price: 40000
    },
    {
        id: 8,
        img: '/assets/8.png',
        header: 'Manila',
        type: 'Single Family, Couple',
        address: '#12 Cara sub st.',
        bedroom: 3,
        bathroom: 2,
        kitchen: '1',
        houses: 'For Rent',
        price: 500000
    },
    {
        id: 9,
        img: '/assets/9.png',
        header: 'Manila',
        type: 'Single Family',
        address: 'Pampanga',
        bedroom: 3,
        bathroom: 2,
        kitchen: '1',
        houses: 'For Rent',
        price: 30000
    },
    {
        id: 10,
        img: '/assets/10.png',
        header: 'Olongapo',
        type: 'Family',
        address: '#33 Dagupan st.',
        bedroom: 4,
        bathroom: 2,
        kitchen: '1',
        houses: 'For Rent',
        price: 60000
    },
    {
        id: 11,
        img: '/assets/11.png',
        header: 'Angeles',
        type: 'Single Family, Couple',
        address: '#17 San antonio st.',
        bedroom: 3,
        bathroom: 3,
        kitchen: '1',
        houses: 'For Sale',
        price: 5700000
    }
]