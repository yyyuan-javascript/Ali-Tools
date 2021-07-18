import { Fields } from "../../product-detail-form/src/interface";
export interface PreviewProps {
    fields: Fields;
    isOnline?:Boolean;
    selfRef:React.RefObject<HTMLDivElement>;
} 