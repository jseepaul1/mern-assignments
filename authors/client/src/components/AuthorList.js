import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((err) => console.log("ERROR IN GET ALL", err));
  }, []);

  const handleDelete = (deletedId) => {
    setAuthors(authors.filter((author) => author._id !== deletedId)); // this will return a new array when the delete button is clicked
  };

  return (
    <div>
      <Container>
        <h3>We have quotes by:</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Authors</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {
              authors
                .map((author) => (
                  <tr key={author._id}>
                    <td>{author.name}</td>
                    <td>
                      <Button className = "button" variant="success"><Link className= "link" to={`/author/edit/${author._id}`} state={author}>
                        Edit
                      </Link></Button>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
                      {/* &nbsp; adds space*/}
                      <DeleteButton id={author._id} handleDelete={handleDelete} />
                    </td>
                  </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AuthorList;
