<a href="https://www.npmjs.com/package/pa-react-modal"><img alt="npm" src="https://img.shields.io/npm/dw/pa-react-modal"></a>
<a href="https://www.npmjs.com/package/pa-react-modal"><img alt="npm" src="https://img.shields.io/npm/v/pa-react-modal"></a>
<a href="https://www.npmjs.com/package/pa-react-modal"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/pa-react-modal"></a>
<a href="https://www.npmjs.com/package/pa-react-modal">
<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>


## Installation

```
npm i pa-react-modal
```
## Example

```js
import MyModal from 'pa-react-modal';
import { useState } from 'react';

const AppModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>My Modal Content</h1>
        <p>Vous pouvez cliquer sur la croix</p>
      </Modal>
    </div>
  );
};

export default AppModal;
```