export interface BreadcrumbsProps{
    data:BreadcrumbsItems[]
    seperator?: string;
}
export interface BreadcrumbsItems{
    text:string;
    url:string;
    icon?: string;
}
