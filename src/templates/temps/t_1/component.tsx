import React,{FC} from 'react';
import './index.scss';
const dSrc= "https://img.alicdn.com/imgextra/i3/1713658316/O1CN01t1RpzI2BImOKmTaVu_!!1713658316.jpg";
const dTxt1 = "You <br/><br/> are <br/><br/> different<br/><br/>/";
const dTxt2 = "每天都是绽放之日";
const dTxt3 = "不褪色莫桑石项链";

const T1:FC<any> = ({src,txt1,txt2,txt3} = {}) => {
    return <div className="wrap t-1">
        <div className="inner"> 
        <div className="circle"></div>
        <div className="txt1" dangerouslySetInnerHTML={{__html:dTxt1}}/>
        <div className="txt2" dangerouslySetInnerHTML={{__html:dTxt2}}/>
        <div className="txt3" dangerouslySetInnerHTML={{__html:dTxt3}}/>
        <img  src={src||dSrc}/>
        </div>
        
    </div>
};
export default T1;