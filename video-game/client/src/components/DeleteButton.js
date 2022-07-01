import axios from "axios";
import Button from 'react-bootstrap/Button';

export const DeleteButton = (props) => {
    const { id, handleDelete } = props;
    const deleteHandler = () => {
      axios
        .delete(`http://localhost:8000/api/games/${id}`)
        .then((response) => {
          console.log(response);
          handleDelete(id);
          alert("Are you sure you want to delete this game?")
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
    };
    return <Button className ="button" variant = "danger" onClick={deleteHandler}>Delete</Button>;
  };
