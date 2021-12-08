export interface Listing {
    id: number,
    img: string,
    header: string,
    type: string,
    address: string,
    bedroom: number,
    bathroom: number,
    house: string,
    houses: string,
    price: number,

}

export const listings = [
    {
        id: 1,
        img: '/assets/1.jpg',
        header: 'Porac Angeles Pampanga',
        type: 'Single Family',
        address: 'Phase 2A Porac Pampanga',
        bedroom: 3,
        bathroom: 1,
        house: '57 m²',
        houses: 'For Rent',
        price: 14000
    },
    {
        id: 2,
        img: '/assets/2.jpg',
        header: 'Rowhouse Bare',
        type: 'Singley',
        address: 'San Fernando, Pampanga',
        bedroom: 1,
        bathroom: 1,
        house: '40 m²',
        houses: 'For Sale',
        price: 450000
    },
    {
        id: 3,
        img: '/assets/3.jpg',
        header: 'Duplex Loft',
        type: 'Single',
        address: 'San Fernando, Pampanga',
        bedroom: 1,
        bathroom: 1,
        house: '55 m²',
        houses: 'For Sale',
        price: 750000
    },
    {
        id: 4,
        img: '/assets/4.jpg',
        header: 'Townhouse',
        type: 'Family',
        address: 'Mabalacat, Pampanga',
        bedroom: 2,
        bathroom: 1,
        house: '36 m²',
        houses: 'For Sale',
        price: 550000
    },
    {
        id: 5,
        img: '/assets/5.jpg',
        header: 'Winter Model Unit',
        type: 'Family',
        address: 'Clark Timog Residences, Angeles City',
        bedroom: 3,
        bathroom: 3,
        house: '200 m² ',
        houses: 'For Sale',
        price: 5500000
    },
    {
        id: 6,
        img: '/assets/6.jpg',
        header: 'Duplex',
        type: 'Family',
        address: 'Angeles City',
        bedroom: 3,
        bathroom: 1,
        house: '55 m²',
        houses: 'For Sale',
        price: 1100000
    },
    {
        id: 7,
        img: '/assets/7.jpg',
        header: 'House Pampanga',
        type: 'Couple',
        address: 'Pampanga',
        bedroom: 2,
        bathroom: 1,
        house: '26 m²',
        houses: 'For Sale',
        price: 625000
    },
    {
        id: 8,
        img: '/assets/8.jpg',
        header: 'House Pampanga',
        type: 'Single Family',
        address: 'Pampanga',
        bedroom: 3,
        bathroom: 1,
        house: '71 m²',
        houses: 'For Sale',
        price: 1550000
    },
    {
        id: 9,
        img: '/assets/9.jpg',
        header: 'House Duplex Pampanga',
        type: 'Single Family',
        address: 'Pampanga',
        bedroom: 2,
        bathroom: 1,
        house: '45 m²',
        houses: 'For Sale',
        price: 1151500
    },
    {
        id: 10,
        img: '/assets/10.jpg',
        header: 'Townhouse Pampanga Condo',
        type: 'Single Family',
        address: ' Pampanga',
        bedroom: 2,
        bathroom: 2,
        house: '90 m²',
        houses: 'For sale',
        price: 16500000
    },
    {
        id: 11,
        img: '/assets/11.jpg',
        header: 'House Pampanga',
        type: 'Family',
        address: 'Angeles City, Pampanga',
        bedroom: 4,
        bathroom: 4,
        house: '250 m²',
        houses: 'For Rent',
        price: 50000
    }

]