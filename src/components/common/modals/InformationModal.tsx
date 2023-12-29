import React, { FC, ReactElement } from "react"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal"
import RedButton from "../buttons/RedButtton"

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactElement
}

const InformationModal: FC<Props> = ({ isOpen, onClose, children }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="6xl">
    <ModalOverlay />
    <ModalContent>
      <ModalBody p={0}>{children}</ModalBody>
    </ModalContent>
  </Modal>
)

export default InformationModal
