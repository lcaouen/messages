import React from "react";
import "./New.Module.css";

import { Modal, Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { MdFiberNew } from "react-icons/md";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MessagesActions from "../store/actions";

class New extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { show: false, texte: "texte", private: true };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    let message = {
      text: this.state.texte,
      private: this.state.private
    };
    this.props.addMessage(message);
    this.setState({ show: false });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ id: 3 });
    this.setState({ show: true });
  }

  render() {
    return (
      <div class="New">
        <Button onClick={this.handleShow}>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <MdFiberNew />
          </IconContext.Provider>
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nouveau message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.texte}
                  onChange={e => this.setState({ texte: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="private">
                <Form.Check
                  type="checkbox"
                  label="Privé"
                  checked={this.state.private}
                  onChange={e => this.setState({ private: e.target.checked })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleAdd}>
              Ajouter
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
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
)(New);
