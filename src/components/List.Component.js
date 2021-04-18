import React from "react";
import "./List.Module.css";

import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator_simple.min.css";
import { ReactTabulator } from "react-tabulator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MessagesActions from "../store/actions";

class List extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      columns: [
        {
          title: "id",
          field: "id",
          width: 150,
          headerFilter: "input",
          editor: "input"
        },
        {
          title: "text",
          field: "text",
          width: 500,
          headerFilter: "input",
          editor: "input"
        },
        {
          title: "private",
          field: "private",
          width: 100,
          align: "center",
          formatter: "tickCross"
        }
      ],
      selectedRowDetail: [],
      data: []
    };

    this.props.getMessages();
  }

  ref = undefined;

  options = {
    layout: "fitColumns",
    tooltips: true,
    movableColumns: true,
    resizableRows: true,
    index: "properties.id",
    height: "400px"
  };

  rowClick = (e, row) => {};

  componentDidUpdate(prevProps) {
    Object.keys(prevProps).forEach(key => {
      if (prevProps[key] !== this.props[key]) {
        let oldValue = prevProps[key];
        let value = this.props[key];
        if (
          typeof this[`on${key[0].toUpperCase()}${key.slice(1)}Changed`] ===
          "function"
        ) {
          this[`on${key[0].toUpperCase()}${key.slice(1)}Changed`](
            oldValue,
            value
          );
        }
      }
    });
  }

  onMessagesChanged(oldValue, value) {
    this.setState({ data: value });
  }

  render() {
    return (
      <div class="List">
        <ReactTabulator
          className="Tabulator"
          ref={ref => (this.ref = ref)}
          columns={this.state.columns}
          key={this.state.columns}
          data={this.state.data}
          options={this.options}
          rowClick={this.rowClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.MessagesReducer
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MessagesActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
