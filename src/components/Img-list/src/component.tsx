import React, { FC } from 'react';
import { ImgListProps } from './interface';
const ImgList: FC<ImgListProps> = ({ imgList }) => {
    return (imgList && imgList.length > 0) ? (
        <>
            {
                imgList.map(({ img, alt }, index) => {
                    return <img src={img} alt={alt} key={`img-${index}`} style={{ maxWidth: "750px", width: "100%", marginBottom: '30px' }} />;
                })
            }
        </>
    ) : null;
};
export default ImgList;