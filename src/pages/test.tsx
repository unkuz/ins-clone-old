import React from 'react';
import { ImageNextJS } from '@/components/Common/ImageNextJS';

const Tw = () => {
  return (
    <div>
      <ImageNextJS
        src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
        width={50}
        height={50}
        circle
        pointer
      />
      <ImageNextJS
        src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
        height={200}
        width="full"
        pointer
      />
    </div>
  );
};

export default Tw;
