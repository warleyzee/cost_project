import ConfirmDialog from '../../form/confirmDialog/ConfirmDialog';

function DeleteProject({ onConfirm, onCancel }) {
    return (
      <div>
        <ConfirmDialog
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
      </div>
    )
}  

  export default DeleteProject;