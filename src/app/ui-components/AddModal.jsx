

'use client';

import { Button, Modal } from 'flowbite-react';

export default function AddModal({ title, size, children, open, onClose }) {
  return (
    <div>
      <Modal show={open} onClose={onClose} size={size}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
}

