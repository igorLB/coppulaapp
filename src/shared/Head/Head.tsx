import React from 'react';

interface HeadPros {
    title: string;
    description?: string;
}

const Head = (props: HeadPros) => {
  React.useEffect(() => {
    document.title = 'PadawanTech | ' + props.title;
    document!.querySelector('meta[name="description"]')!.setAttribute('content', props.description || 'Emissão de NFe fácil e simples');
  }, [props]);

  return <></>;
};

export default Head;