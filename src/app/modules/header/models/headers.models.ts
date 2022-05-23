export interface HeaderContactInfo {
    icon: string;
    text: string;
}

export interface HeaderMenuItems {
    label: string;
    path: string;
    childrens?: HeaderMenuItems[];
}
