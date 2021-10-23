import React, { useState } from 'react';
import { TemplateConf } from './interface';
import { Modal } from 'antd';

export default () => {
  const [popProps, setPopProps] = useState<{ content: React.ComponentType | null; visible: boolean }> ({ content: null, visible: false})
  const contextLoader = (require as any).context('./temps', true, /^\.[\\/]\w+[\\/](info\.json|preview\.png|index\.ts)$/);

  const templates: TemplateConf = contextLoader.keys().reduce((res: TemplateConf, temp: string) => {
    const tempFolderName = temp.split('/')[1];
    if (!res[tempFolderName]) {
      res[tempFolderName] = {
        preview: contextLoader(`./${tempFolderName}/preview.png`).default,
        info: contextLoader(`./${tempFolderName}/info.json`),
        content: contextLoader(`./${tempFolderName}/index.ts`).default,
      };
    }
    return res;
  }, {});

  function showTemplate(template: TemplateConf[0]) {
    setPopProps({ content: template.content, visible: true });
  }
  return <div>
    {Object.keys(templates).map(tempName => (
      <img key={tempName} style={{ width: 100, height: 100 }} onClick={() => showTemplate(templates[tempName])} src={templates[tempName].preview} />
    ))}
    <Modal title="edit template" visible={popProps.visible}>{popProps.content && (popProps.content as any)()}</Modal>
  </div>
}