import React,{FC} from 'react';
import { Form,  Radio,  } from 'antd';
import {AntRadioProps} from './interface';
const AntRadio:FC<AntRadioProps> = ({initialValue,radios,label,name}) =>{
  // const [value, setValue] = React.useState(defaultValue);

  // const onChange = (e:RadioChangeEvent)  => {
  //   console.log('radio checked', e.target.value);
  //   setValue(e.target.value);
  // };
// const normalize = (value:string,pre:any,all:any)=>{console.log(value,pre,all);return{label,value};};
    return radios && radios.length > 0 ?(
        <Form.Item {...( {name,label,initialValue})}   >
        {/* <Radio.Group {...(defaultValue &&{defaultValue})}> */}
        <Radio.Group >
          {radios.map((item,index)=><Radio key={'radio'+index} value={item}>{item}</Radio>)}
        </Radio.Group>
        </Form.Item>
    ):null;
}; 
export default AntRadio;