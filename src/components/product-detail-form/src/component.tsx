import React,{FC, useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import {CraftType, Material,ChainLength} from './const';
import {ProductDetailFormProps} from './interface';
import AntRadio  from '../../ant-radio/src/component';
import TextArea from 'antd/lib/input/TextArea';

const ProductDetailForm:FC<ProductDetailFormProps> = ({onChangeCb,onlineClickCb,}) => {
  const [form] = Form.useForm();
  const formLayout ='vertical';
// debugger;
const handleOnlineClick =()=>{
    
    // const fields = form.getFieldsValue();
    // console.log(fields);
    // 
   const html = (onlineClickCb && onlineClickCb())||"";
   // 
   navigator.clipboard.writeText(html).then((res)=>{
// console.log(res);
alert('copy code success');
   });
//    console.log(html);
};
const handleOnChange = () => {
    const fields = form.getFieldsValue();
    // console.log(fields);
    onChangeCb(fields);
};

useEffect(()=>{
    const fields = form.getFieldsValue();
    onChangeCb(fields);
},[]);
  return (
    
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        // onFinish={(props)=>{console.log(props)}}
        onChange={handleOnChange}
      > 
        <Form.Item label="品名" name="productName">
          <Input  />
        </Form.Item>
        <AntRadio 
        label={"工艺"}
        name={"craft"}
        initialValue={CraftType.SEIKO_POLISHING}
        radios={Object.values(CraftType)}
        />
        <AntRadio 
        label={"材质"}
        name={"material"}
        initialValue={Material.S925_SLIVER}
        radios={Object.values(Material)}
        />
        <AntRadio 
        label={"链长"}
        name={"chainLength"}
        initialValue={ChainLength.L39_45}
        radios={Object.values(ChainLength)}
        />
        <Form.Item label="吊坠尺寸（MM）" name="pendantSize">
          <Input placeholder="长*宽" />
        </Form.Item>
        <Form.Item label="商品展示图片字符串（淘宝中复制）" name="showImgListStr">
          <TextArea  />
        </Form.Item>
        <Form.Item label="商品详情图片字符串（淘宝中复制）" name="detailImgListStr">
          <TextArea  />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" onClick={handleOnlineClick}>复制online代码</Button>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">复制h5代码</Button>
        </Form.Item>
      </Form>
    
  );
};

export default ProductDetailForm;