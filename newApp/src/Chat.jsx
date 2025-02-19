import { useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "bonjour!", turn: "first" },
    { text: "HUH,Bonjour?!", turn: "second" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      let changeturn;
      switch (messages[messages.length - 1].turn) {
        case "first":
          changeturn = "second";
          break;
        case "second":
          changeturn = "first";
          break;
        default:
          changeturn = "first";
      }

      setMessages([...messages, { text: input, turn: changeturn }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto space-y-2 p-2 border ">
        {messages.map((msg) => (
          <div
            className={`max-w-xs p-2 text-white ${
              msg.turn === "second"
                ? "bg-blue-500 self-end text-right"
                : "bg-gray-400 self-start text-left"
            }`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2 gap-2">
        <input
          type="text"
          className="flex-1 p-2 border "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 "
          onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
