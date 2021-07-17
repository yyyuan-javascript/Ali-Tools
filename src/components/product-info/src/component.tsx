import React, { FC } from 'react';
import { ProInfoSortCfg, Trans } from '../../product-detail-form/src/const';
import { ProductInfoProps } from './interface';
const ProductInfo: FC<ProductInfoProps> = ({
    fields,

}) => {
    return (
        <section  style={{ padding: '0 16px' }}>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                {ProInfoSortCfg.map((item, index) => {
                    const key = Trans[item];
                    const value = fields[item];
                    return (<p key={index} style={{ width: "50%" }}>{`【${key}】: ${value}`}</p>);
                })}
            </div>
            <p style={{ fontSize: '10px' }}>{'*注：手工测量，存在少许误差，请以实物为准。'}</p>
        </section>
    );
};
export default ProductInfo;