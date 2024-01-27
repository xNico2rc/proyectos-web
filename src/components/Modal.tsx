import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function ModalDemo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className=" bg-black text-white font-['Gilroy-Bold'] px-14 py-7"
      >
        Contactame Ya
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className=" bg-[#ffffdd] text-black"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-['Gilroy-Bold'] text-3xl text-balance">
                Contactame Dejandome tu Email
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="Nombre"
                  classNames={{
                    inputWrapper: ["bg-zinc-900/20", "hover:bg-zinc-900/10"],
                  }}
                />
                <Input
                  type="email"
                  label="Email"
                  classNames={{
                    inputWrapper: ["bg-zinc-900/20", "hover:bg-zinc-900/10"],
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className=" bg-black text-white font-['Gilroy-Medium']"
                  onPress={onClose}
                >
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
