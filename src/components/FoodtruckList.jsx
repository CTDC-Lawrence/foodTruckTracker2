import React from "react";

export default class MessageList extends React.Component {
  transformMessage(message) {
    let dateTime =
      new Date(message.time).toDateString() +
      " " +
      new Date(message.time).toLocaleTimeString("en-US");

    return (
      <tr key={message.id}>
        <td>
          <strong>{dateTime}</strong>
        </td>
        <td>{message.name}</td>
        <td>{message.message}</td>
      </tr>
    );
  }
  render() {
    let messagesJsx = this.props.messages.map(this.transformMessage);
    return (
      <table>
        <tbody>{messagesJsx}</tbody>
      </table>
    );
  }
}