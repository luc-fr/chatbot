
const ChatInput = ({newChatMessages, setNewChatMessages}) => {

  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {

    if(inputText === ''){
      alert('Enter a message!');
      return;
    }

    setNewChatMessages([
      ...newChatMessages, {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }, {
        message: Chatbot.getResponse(inputText),
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  return (
    <div>
      <input
        placeholder='Send a message to Chatbot!'
        onChange={saveInputText}
        value={inputText}
        className="m-3 p-2 rounded-lg"
      />
      <button
        onClick={sendMessage}
        className="text-white bg-emerald-500 rounded-lg text-xs p-3"
      >Send</button>
    </div>
  );
}
