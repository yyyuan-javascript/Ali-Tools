import React, { FC } from 'react';
import { PreviewProps } from './interface';
import {
    ProductDetailImg,
    ProductInfoImg,
    ProductShowImg,
    BuyerNoticeImg,
} from './const';
import ProductInfo from '../../product-info';
const Preview: FC<PreviewProps> = ({
    fields }) => {
    const {
    showImgListStr,
    detailImgListStr,    
    } = fields || {};
    console.log(    showImgListStr,
        );

    return (
        <div style={{padding: '0 9px',background: 'white'}}>
            <div style={{
                maxWidth: "750px", margin: "auto",
                 fontSize: '14px', fontWeight: 600, fontFamily: 'MicrosoftJhengHei',
                position: 'relative'
            }}>
                <img src={ProductInfoImg} alt="product info" style={{ maxWidth: "750px", width: "100%" }} />
                <ProductInfo {...{ fields }} />
                <img src={ProductShowImg} alt="product show" style={{ maxWidth: "750px", width: "100%" }} />
            </div>
        </div>
    );

};
export default Preview;
