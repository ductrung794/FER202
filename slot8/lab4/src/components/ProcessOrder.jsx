import React, { useReducer, useEffect } from "react";
import { Button, Modal, Toast } from "react-bootstrap";

function ProcessOrder() {
  const initialState = { isShowModal: false, isConfirmed: false };

  function reducer(state, action) {
    switch (action.type) {
      case "OPEN_MODAL":
        return { ...state, isShowModal: true };
      case "CLOSE_MODAL":
        return { ...state, isShowModal: false };
      case "CONFIRM_ORDER":
        return { ...state, isConfirmed: true, isShowModal: false };
      case "RESET_CONFIRM":
        return { ...state, isConfirmed: false };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isConfirmed) {
      const t = setTimeout(() => dispatch({ type: "RESET_CONFIRM" }), 3000);
      return () => clearTimeout(t);
    }
  }, [state.isConfirmed]);

  return (
    <>
      <Button variant="primary" onClick={() => dispatch({ type: "OPEN_MODAL" })}>  Xử lý đơn hàng </Button>
      <Modal
        show={state.isShowModal}
        onHide={() => dispatch({ type: "CLOSE_MODAL" })}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body> <p> Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không? </p> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>  Hủy </Button>
          <Button variant="success" onClick={() => dispatch({ type: "CONFIRM_ORDER" })}> Xác nhận </Button>
        </Modal.Footer>
      </Modal>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <Toast
          show={state.isConfirmed}
          bg="success"
          onClose={() => dispatch({ type: "RESET_CONFIRM" })}
          autohide
          delay={3000}
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">Thành công</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Xử lý đơn hàng thành công!</Toast.Body>
        </Toast>
      </div>
    </>
  );
}

export default ProcessOrder;
