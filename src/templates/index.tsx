import React, { useState } from 'react';
import { TemplateConf,Editor } from './interface';
import { Modal } from 'antd';
import { Layout } from 'antd';
import ModuleEditor from './editor';
const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const [popProps, setPopProps] = useState<{ content: React.ComponentType | null; visible: boolean;editor:Editor }> ({ content: null, visible: false,editor:{imgList:[],inputList:[]}})
  const [previewModuleProps, setPreviewModuleProps] = useState<any>({});
  const contextLoader = (require as any).context('./temps', true, /^\.[\\/]\w+[\\/](info\.json|preview\.png|index\.ts|editor\.json)$/);

  const templates: TemplateConf = contextLoader.keys().reduce((res: TemplateConf, temp: string) => {
    const tempFolderName = temp.split('/')[1];
    if (!res[tempFolderName]) {
      res[tempFolderName] = {
        preview: contextLoader(`./${tempFolderName}/preview.png`).default,
        info: contextLoader(`./${tempFolderName}/info.json`),
        content: contextLoader(`./${tempFolderName}/index.ts`).default,
        editor: contextLoader(`./${tempFolderName}/editor.json`),
      };
    }
    return res;
  }, {});
  

  // 显示弹窗
  function showTemplate(template: TemplateConf[0]) {
    setPopProps({ content: template.content, visible: true ,editor: template.editor});
  }
  return <div>
    {Object.keys(templates).map(tempName => (
      <img key={tempName} style={{ width: 100, height: 100 }} onClick={() => showTemplate(templates[tempName])} src={templates[tempName].preview} />
    ))}
    <Modal title="edit template" width="100%" 
bodyStyle	={{background:'#8C8C8C'}}
style={{paddingBottom:'0',top:'0'}}
    visible={popProps.visible}>
 <Layout>
      <Layout>
        <Content>{popProps.content && (popProps.content as any)(previewModuleProps)}</Content>
        <Sider>
          <ModuleEditor {...popProps.editor} onChangeCb={(data:any)=>{console.log(data);setPreviewModuleProps(data)}}/>
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
      
      </Modal>
  </div>
}