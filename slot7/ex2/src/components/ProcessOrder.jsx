import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ProcessOrder() {
  // ✅ STATE
  const [isShowModal, setIsShowModal] = useState(false);

  // ✅ ACTIONS
  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleConfirm = () => {
    alert(
      "Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?"
    );
    alert("Xử lý đơn hàng thành công!");
    setIsShowModal(false);
  };

  return (
    <>
      {/* BUTTON XỬ LÝ ĐƠN HÀNG */}
      <Button variant="primary" onClick={handleOpenModal}>
        Xử lý đơn hàng
      </Button>

      {/* MODAL */}
      <Modal
        show={isShowModal}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProcessOrder;
