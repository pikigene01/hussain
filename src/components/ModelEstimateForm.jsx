import {
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

import EstimateForm from './EstimateForm';

export default function ModelEstimateForm({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bgColor="surface">
        <ModalCloseButton />
        <ModalBody py="10">
          <EstimateForm onSubmitted={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
