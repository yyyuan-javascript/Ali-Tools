import React,{FC} from 'react';
import { Form, Input, Button } from 'antd';
const InputItem :FC<any> = (props) => {
    return <Form.Item {...props}>
    <Input  />
  </Form.Item>;
};

const InputList:FC<any> = ({inputList=[]}) => {
    return inputList.length?inputList.map((item:any, index:number)=><InputItem key={index} label={item} name={item}/>):null;
};
export default InputList;