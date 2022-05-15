import React, { useState } from 'react';
import { Modal as AntModal, Button } from 'antd';
import Form from '../form/index'
const Modal:React.FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <AntModal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form/>
      </AntModal>
    </>
  );
};

export default Modal