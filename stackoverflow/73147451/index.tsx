import { Button, Modal } from 'antd';
import React from 'react';
import { useState } from 'react';

export const ModalComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Modal title"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        content
      </Modal>
    </>
  );
};
