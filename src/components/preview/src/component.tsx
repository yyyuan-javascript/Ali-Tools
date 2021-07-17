import React,{FC} from 'react';
import {PreviewProps} from './interface';
import {ProductDetailImg,
ProductInfoImg,
ProductShowImg,
BuyerNoticeImg,
} from './const';

const Preview:FC<PreviewProps> = ({
    fields}) => {
        const {chainLength,
            craft,
            material,
            pendantSize,
            productName} = fields || {};
    return (
        <p style={{maxWidth:"750px"}}>
<img  src={ProductInfoImg} alt="product info"/>

        </p>
    );

};
export default Preview;
