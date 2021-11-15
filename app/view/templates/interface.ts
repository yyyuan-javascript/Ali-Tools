export interface Editor {
  imgList:string[];
  inputList:string[];
}
export interface TemplateConf {
  [tempName: string]: {
    preview: any;
    info: Object;
    content: any;
    editor: Editor;
  }
}