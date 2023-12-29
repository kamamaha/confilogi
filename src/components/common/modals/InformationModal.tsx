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
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <RedButton text="Close" onClick={onClose} />
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default InformationModal
