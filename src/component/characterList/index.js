import React from "react";
import "../../style";

export default class CharacterList extends React.Component {
  onClick = id => {
    this.props.history.push("/characters/" + id);
  };

  createTable = () => {
    const { characters } = this.props,
      rowNum = 4,
      colNum = 2;
    let table = [];

    if (!characters) return table;

    for (let i = 0; i < colNum; i++) {
      let children = [];

      for (let j = 0; j < rowNum; j++) {
        const index = i * rowNum + j;
        children.push(
          <td key={index} onClick={() => this.onClick(characters[index].id)}>
            <img src={characters[index].image} />
            <h3>Name: {characters[index].name}</h3>
            <h3>ID: {characters[index].id}</h3>
            <h3>status: {characters[index].status}</h3>
            <h3>Gender: {characters[index].gender}</h3>
          </td>
        );
      }

      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  };

  render() {
    const { loading } = this.props;
    console.log("loading=", loading);
    if (loading)
      return (
        <div>
          <img src="/image/loading_spinner.gif" alt="loading spinner" />
        </div>
      );
    else
      return (
        <table>
          <tbody>{this.createTable()}</tbody>
        </table>
      );
  }

  componentDidMount() {
    const { onLoad } = this.props;
    const callOnLoad = () => onLoad();
    callOnLoad();
  }
}
