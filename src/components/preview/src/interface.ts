
export interface Fields {
    chainLength:string;
    craft:string;
    material:string;
    pendantSize:string;
    productName:string;
}
export interface PreviewProps {
    fields: Fields;
    isOnline?:Boolean;
} 