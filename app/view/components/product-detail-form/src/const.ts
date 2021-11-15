import {Fields} from './interface';
// 工艺
export const CraftType = {
SEIKO_POLISHING:"精工抛光",
SEIKO_PLATING:"精工电镀",
ARTIFICIAL_MOSAIC:"人工镶嵌",
}; 
// 材质
export const Material = {
    S925_SLIVER:"s925银",
    S925_SLIVER_MOTHER_OF_PEARL:"s925银，贝母",
    s925_SLIVER_AUSTRIAN_CRYSTAL:"s925银, 奥地利水晶",
    s925_SLIVER_GAO_ZUAN:"s925银, 锆钻",
    s925_SLIVER_MOISSANITE:"s925银，莫桑石",
    gold_1k:"1k金，莫桑石",
    alloy_gold_18k:"合金，镀层18k金, s925银针"
};
// 链长
export const ChainLength = {
    L39_40:"39+4CM",
    L39_45:"39+4.5CM",
    L40_40:"40+4CM",
    L40_50:"40+5CM",
    L40_35_35:"40+3.5+3.5CM",
    undefined:'',
};
type FieldsAttr = keyof Fields ;

export const Trans:Partial<Record<FieldsAttr,string>> = {
    productName:'品名',
    craft: '工艺',
    material: '材质',
    chainLength: '链长',
    pendantSize:'吊坠尺寸',
    earringSize:"耳环尺寸",
    weight:"重量",
};

// 产品信息字段展示顺序
export const ProInfoSortCfg:FieldsAttr[]= [
    'productName',
    'craft',
    'material',
    'chainLength',
    'pendantSize',
    'earringSize',
    'weight',
];