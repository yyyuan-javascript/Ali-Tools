import { AriaAttributes } from "react";

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      align?: string;
    }
  }
  