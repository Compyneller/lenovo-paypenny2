import React from "react";
import { Button, Modal } from "react-bootstrap";
import LegalDropDown from "./LegalDropDown";

const LegalModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <LegalDropDown />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LegalModal;
