import { Input } from "@nextui-org/react";
import { SendButton } from "../btn/SendButton";
import { SendIcon } from "../btn/SendIcone";

export default function CardNewsLetters() {
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
          contentRight={<SendIcon color="red" />}
        />
      </div>
    </div>
  );
}
