export interface BreadcrumbsProps{
    data:BreadcrumbsItems[]
    separator?: string;
}
export interface BreadcrumbsItems{
    text:string;
    url:string;
    icon?: string;
}
