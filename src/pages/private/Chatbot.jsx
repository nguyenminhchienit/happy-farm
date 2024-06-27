import { useEffect } from "react";

const ChatComponent = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src =
      "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.4/libs/oversea/index.js";
    script.async = true;

    // Append the script to the document head
    document.head.appendChild(script);

    // Initialize the CozeWebSDK when the script is loaded
    script.onload = () => {
      new window.CozeWebSDK.WebChatClient({
        config: {
          bot_id: "7385055358118674440",
        },
        componentProps: {
          title: "Coze",
        },
      });
    };

    // Cleanup script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="chat-container">Loading chat...</div>;
};

export default ChatComponent;
