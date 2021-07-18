import { ImgItem } from '../../Img-list/src/interface';

export const getImgListFromString = (str: string): ImgItem[] => {
    return str ?str.trim().split("\n").map(item => { return { img: item }; }):[];
}