import React, { FC } from 'react';
import { ProInfoSortCfg, Trans } from '../../product-detail-form/src/const';
import { ProductInfoProps } from './interface';
const ProductInfo: FC<ProductInfoProps> = ({
    fields,

}) => {
    return (
        <section  style={{ padding: '0 16px' }}>
            <div >
                {ProInfoSortCfg.map((item, index) => {
                    const key = Trans[item];
                    const value = fields[item];
                    return (value?<p key={index} style={{ display:"inline-block",width: "50%" }}>{`【${key}】: ${value}`}</p>:null);
                })}
            </div>
            <p style={{ fontSize: '10px' }}>{'*注：手工测量，存在少许误差，请以实物为准。'}</p>
        </section>
    );
};
export default ProductInfo;