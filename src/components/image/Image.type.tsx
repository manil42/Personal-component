export interface ImageProps{
    src:string;
    alt:string;
    width?:string;
    height?:string;
    loading?:"lazy" | "eager" | "auto";
    onLoad?:() => void;
    onError?: ()=>void
}