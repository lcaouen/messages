let messages = [
  {
    id: 1,
    text: "message 1",
    private: true
  },
  {
    id: 2,
    text: "message 2",
    private: false
  }
];

export default {
  getMessages() {
    return messages;
  },
  getMessage(id) {
    return messages.filter(m => m.id === id);
  },
  getNextId() {
    return (
      messages.reduce((prev, cur) => {
        return prev.id > cur.id ? prev.id : cur.id;
      }) + 1
    );
  },
  addMessage(message) {
    message.id = this.getNextId();
    messages.push(message);
  }
};
