import React,{FC} from 'react';
import { Form, Input, Button } from 'antd';
import {CraftType, Material,ChainLength} from './const';
import {ProductDetailFormProps} from './interface';
import AntRadio  from '../../ant-radio/src/component';

const ProductDetailForm:FC<ProductDetailFormProps> = ({onChangeCb}) => {
  const [form] = Form.useForm();
  const formLayout ='vertical';
// debugger;
const handleOnlineClick =()=>{
    
    const fields = form.getFieldsValue();
    // console.log(fields);
    // 
};
const handleOnChange = () => {
    const fields = form.getFieldsValue();
    // console.log(fields);
    onChangeCb(fields);
};

  return (
    
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={(props)=>{console.log(props)}}
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