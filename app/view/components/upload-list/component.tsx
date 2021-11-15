import React,{FC,useState} from "react";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ShowUploadListInterface } from "antd/lib/upload/interface";

interface UploadItemProps {
    label:string;
    onChangeCb: (info:any)=>void
}
const UploadItem:FC<UploadItemProps> = ({label,onChangeCb}) => {
    // const props = {};
   
    return <Upload customRequest={onChangeCb} >
    {label+":"}<Button style={{marginBottom:"20px"}} icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>;
};

interface UpLoadImgsType {
    [key:string]:string
}
interface UploadListProps {
    imgList: string[];
    imgUploadCb: (imgs: UpLoadImgsType) => void;
}

const UploadList: FC<UploadListProps> = ({imgList,imgUploadCb}) => {
    const [upLoadImgs, setUpLoadImgs]=useState<UpLoadImgsType>({});
    return imgList.length ? <>{imgList.map( (item:string,index:number) => <UploadItem
     label={item}
     key={index}
      onChangeCb={
          (info)=>{
            //   console.log(item,info);
              const imgs = {...upLoadImgs,[item]:window.URL.createObjectURL(info.file)};
              setUpLoadImgs(imgs);
imgUploadCb(imgs);
// console.log(imgs);
            }
        }
      />)}</>:null;
};
export default UploadList;
