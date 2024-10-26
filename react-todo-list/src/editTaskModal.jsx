import Modal from "react-bootstrap/Modal";

function EditTaskModal({
  showEditModal,
  setShowEditModal,
  onSave,
  selectedItem,
  setSelectedItem,
  selectedId,
}) {
  return (
    <div>
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="d-flex gap-4">
          <p>Edit Modal</p>

          <button
            className="btn btn-danger"
            onClick={() => setShowEditModal(false)}
          >
            x
          </button>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            value={selectedItem}
            onChange={(e) => {
              setSelectedItem(e.target.value);
            }}
          />
          <button
            onClick={() => onSave(selectedId)}
            className="btn btn-success"
          >
            Save
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditTaskModal;
