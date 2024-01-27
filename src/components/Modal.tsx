import React, { useState } from "react";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/EmailTemplate";
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
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  // Manejadores de cambios para los inputs y textarea
  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };
  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const finalHtml = render(
    <EmailTemplate firstName={inputValue1 as string} />,
    {
      pretty: true,
    }
  );
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
                  value={inputValue1}
                  onChange={handleInputChange1}
                  classNames={{
                    inputWrapper: ["bg-zinc-900/20", "hover:bg-zinc-900/10"],
                  }}
                />
                <Input
                  type="email"
                  label="Email"
                  value={inputValue2}
                  onChange={handleInputChange2}
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
                  onClick={async () => {
                    try {
                      const res = await fetch("/api/sendEmail.json", {
                        method: "POST",
                        headers: {
                          "Content-type": "aplication/json",
                        },
                        body: JSON.stringify({
                          from: "delivered@resend.dev",
                          to: inputValue2,
                          subject: `Proyectos web Para ${inputValue1}`,
                          html: finalHtml,
                          text: "",
                        }),
                      });
                      const data = await res.json();
                      console.log(data);
                    } catch (e) {
                      console.error(e);
                    }
                  }}
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
