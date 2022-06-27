import axios from "axios";
import Button from 'react-bootstrap/Button';

const DeleteButton = (props) => {
  const { id, handleDelete } = props;
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((response) => {
        console.log(response);
        handleDelete(id);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  return <Button variant="danger" onClick={deleteHandler}>Delete</Button>;
};

export default DeleteButton;
