import React from "react";
import "../Connect.scss";
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Connected({ currentAccount }) {
  const [show, setShow] = useState(false);

  return (
    <div className="connect">
      <ToastContainer className="toast-container" position="bottom-end">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body style={{ color: "green", fontFamily: "Azonix" }}>
            Your wallet is connected!
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <button className="button" type="button" onClick={() => setShow(true)}>
        Welcome {currentAccount.slice(0, 6)}
      </button>
    </div>
  );
}

export default Connected;
