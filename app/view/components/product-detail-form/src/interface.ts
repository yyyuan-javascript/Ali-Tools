export interface ProductDetailFormProps {
    onChangeCb:(obj:any)=>void;
    onlineClickCb?: () => void;
}
export interface Fields {
    chainLength:string;
    craft:string;
    material:string;
    pendantSize:string;
    productName:string;
    showImgListStr:string;
    detailImgListStr:string;
    earringSize: string;
    weight: string;
}