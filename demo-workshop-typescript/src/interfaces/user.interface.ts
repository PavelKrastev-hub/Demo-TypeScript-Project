export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: number;
    website: string;
    company: Company
}

type Address = {
    street: string;
    suit: string;
    city: string;
    zipcode: number;
    geo: Geo
}

type Geo = {
    lat: number;
    lng: number;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}