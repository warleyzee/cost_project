import ConfirmDialog from '../../form/confirmDialog/ConfirmDialog';

function DeleteProject({ onConfirm, onCancel }) {
    return (
      <div>
        <ConfirmDialog
            message="Você tem certeza que deseja deletar este projeto?"
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
      </div>
    )
}  

  export default DeleteProject;