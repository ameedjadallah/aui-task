import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import classnames from 'classnames';

import "./Conversation.scss";
import data from "../data/data.json";

function Conversation() {
  const [conversation, setConversation] = useState(data.conversation);
  const [messageText, setMessageText] = useState("");

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "list-container",
      duration: 0,
    });
  };

  const sendMessage = async (e) => {
    if (e.key === "Enter") {
      let conv = conversation;
      conv.push({
        text: messageText,
        time: new Date().toLocaleString(),
        sender: true,
      });
      await setConversation(conv);
      setMessageText("");
      scrollToBottom();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  return (
    <div className="conversation">
      <div className="conversation-section">
        <div className="list-container" id="list-container">
          <div className="conversations-list flex flex-col justify-end items-end">
            {conversation.length !== 0 &&
              conversation.map((message, index) => {
                return (
                  <div
                    className={classnames(`conversations-list__item flex flex-col justify-start`,{
                        "sender items-end" : message.sender,
                        "items-start" : !message.sender,
                    })}
                    key={index}
                  >
                    <div className="coversation-text">{message.text}</div>
                    <div className="coversation-date">{message.time}</div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="conversation-message">
          <input
            className="message-text"
            placeholder="Type Something..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={sendMessage}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
