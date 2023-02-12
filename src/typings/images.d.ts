declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
declare module '*.png' {
  const value: import('react').ImageSourcePropType;
  export default value;
}
