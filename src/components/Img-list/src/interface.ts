export interface ImgItem{
    img:string;
    alt?:string;
} 
export interface ImgListProps {
    imgList:ImgItem[];
    alt?:string;
}