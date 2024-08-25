export interface Meeting {
    businessId?: string,
    eventName?: string,
    duration: number,
    locationType?: string,
    locationURL?: string,
    themeColor?: string,
    createdBy?: string;
}

export interface User{
    name?: string;
    email?: string;
    note?: string;
}