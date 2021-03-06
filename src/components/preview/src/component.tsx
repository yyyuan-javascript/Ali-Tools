import React, { FC } from 'react';
import { PreviewProps } from './interface';
import {
    ProductDetailImg,
    ProductInfoImg,
    ProductShowImg,
    BuyerNoticeImg,
} from './const';
import ProductInfo from '../../product-info';
import ImgList from '../../Img-list';
import {getImgListFromString} from './helper';
const Preview: FC<PreviewProps> = ({
    fields,selfRef }) => {
    const {
    showImgListStr,
    detailImgListStr,    
    } = fields || {};
    // console.log(    showImgListStr,
    //     );

    return (
        <div ref={selfRef} style={{padding: '0 9px',background: 'white'}}>
            <div style={{
                maxWidth: "750px", margin: "auto",
                 fontSize: '14px', fontWeight: 600, fontFamily: 'MicrosoftJhengHei',
                position: 'relative'
            }}>
                <ImgList imgList={[{img:ProductInfoImg,alt:"product info"}]}/>
                <ProductInfo {...{ fields }} />
                <ImgList imgList={[{img:ProductShowImg,alt:"product show"}]}/>
                <ImgList imgList={getImgListFromString(showImgListStr)}/>
                <ImgList imgList={[{img:ProductDetailImg,alt:"product detail"}]}/>
                <ImgList imgList={getImgListFromString(detailImgListStr)}/>
                <ImgList imgList={[{img:BuyerNoticeImg,alt:"buyers notice"}]}/>
            </div>
        </div>
    );

};
export default Preview;
