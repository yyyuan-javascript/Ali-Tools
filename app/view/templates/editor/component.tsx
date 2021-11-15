import React,{FC, useState, } from 'react';
import { Form, Upload, Button } from 'antd';
import UploadList from '@components/upload-list/component';
import InputList from '@components/input-list/component';

export interface ModuleEditorProps {
    onChangeCb: (fields:any)=>void,
    imgList:string[],
    inputList:string[], 
}
const formLayout ='vertical';
const ModuleEditor:FC<ModuleEditorProps> = ({onChangeCb,imgList,inputList}) => {
    const [form] = Form.useForm();
    const [imgObject,setImgObject] = useState<any>([]);
    const handleOnChange = () => {
        const fields = form.getFieldsValue();
        const data = {...fields, ...imgObject};
        // console.log(fields);
        onChangeCb(data);
    };
    const handleUploadChange = (imgs:any) => {
        setImgObject(imgs);
        const fields = form.getFieldsValue();
        const data = {...fields,...imgs};
        onChangeCb(data);
    };
    return (<>
     <UploadList imgList={imgList} imgUploadCb={handleUploadChange} />
    <Form
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onChange={handleOnChange}
      > 
        <InputList inputList={inputList} />
        </Form>
        </>);
};
export default ModuleEditor;