import { Button, Input, Modal, Text, useModal } from "@nextui-org/react";
import { useState } from "react";
import { SendIcon } from "../btn/SendIcone";
import ModalNewsleetter from "../ModalNewsletter";
export default function CardNewsLetters() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#222] w-1/2 p-2 rounded-lg border border-black mx-auto">
      <div className="w-full flex justify-center text-white overflow-hidden">
        <Input
          id="message"
          className="overflow-hidden"
          color="error"
          size="xl"
          width="100%"
          underlined
          clearable
          contentRightStyling={false}
          placeholder="Type your message..."
          contentRight={<SendIcon color="red" onClick={openModal} />}
        />
      </div>
      <ModalNewsleetter isModalOpen={isModalOpen} closeModal={closeModal}/>
    </div>
  );
}
