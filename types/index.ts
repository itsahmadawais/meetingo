export interface Document{
    id?: string;
}
export interface Meeting extends Document {
    businessId?: string,
    eventName?: string,
    duration: number,
    locationType?: string,
    locationURL?: string,
    themeColor?: string,
    createdBy?: string;
}

export interface User extends Document {
    name?: string;
    email?: string;
    note?: string;
}

export interface BusinessInfo extends Document {
    businessName: string;
    email?: string;
    userName?: string;
}