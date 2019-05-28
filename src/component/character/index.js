import React from "react";
import "../../style";

export default class Character extends React.Component {
  render() {
    const { character, loading } = this.props;
    console.log("loading123=", loading);
    if (loading)
      return (
        <div>
          <img src="/image/loading_spinner.gif" alt="loading spinner" />
        </div>
      );
    else
      return character ? (
        <div className="character">
          <img src={character.image} />
          <h3>Name: {character.name}</h3>
          <h3>ID: {character.id}</h3>
          <h3>status: {character.status}</h3>
          <h3>Gender: {character.gender}</h3>
        </div>
      ) : (
        <div />
      );
  }

  componentDidMount() {
    const {
      onLoad,
      match: {
        params: { id }
      }
    } = this.props;
    const callOnLoad = () => onLoad(id);
    callOnLoad();
  }
}
