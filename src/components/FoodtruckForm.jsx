import React from "react";

export default class MessageForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    // Stay within this component when using
    // document.querySelector. If you have the tendency
    // of selecting nodes of other components here, then
    // user Refs instead.
    let name = document.querySelector("[name=name]").value;
    let website = document.querySelector("[name=website]").value;
    let bio = document.querySelector("[name=bio]").value;
    let twitterHandle = document.querySelector("[name=twitterHandle]").value;
    document.querySelector("[name=name]").value = "";
    document.querySelector("[name=website]").value = "";
    document.querySelector("[name=bio]").value = "";
    document.querySelector("[name=twitterHandle]").value = "";
    fetch("https://8dbc8l.sse.codesandbox.io/messages/new", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        website: website,
        bio: bio,
        twitterHandle: twitterHandle
      })
    })
      .then((x) => x.json())
      .then((response) => {
        if (response.status === 200) {
          this.props.loadState();
        }
      });
  }
  render() {
    // Note that action and method of the form are not used, they act
    // like comments.
    return (
      <form
        action="https://8dbc8l.sse.codesandbox.io/messages/new"
        method="POST"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input type="text" name="name" placeholder="Foodtruck Name" />
          <input type="text" name="website" placeholder="Website" />
          <input type="text" name="bio" placeholder="Bio" />
          <input type="text" name="twitterHandle" placeholder="Twitter Handle" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}