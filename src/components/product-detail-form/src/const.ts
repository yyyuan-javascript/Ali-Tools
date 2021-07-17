import {Fields} from './interface';
// 工艺
export const CraftType = {
SEIKO_POLISHING:"精工抛光",
}; 
// 材质
export const Material = {
    S925_SLIVER:"s925银",
};
// 链长
export const ChainLength = {
    L39_45:"39+4.5CM",
};
type FieldsAttr = keyof Fields ;
export const Trans:Record<FieldsAttr,string> = {
    productName:'品名',
    craft: '工艺',
    material: '材质',
    chainLength: '链长',
    pendantSize:'吊坠尺寸'

};

// 产品信息字段展示顺序
export const ProInfoSortCfg:FieldsAttr[]= [
    'productName',
    'craft',
    'material',
    'chainLength',
    'pendantSize'
];