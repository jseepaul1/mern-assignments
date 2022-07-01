import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import DeleteButton from "./DeleteButton";

const DisplayAll = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((err) => console.log("ERROR IN GET ALL", err));
  }, []);

  const handleDelete = (deletedId) => {
    setPlayers(players.filter((player) => player._id !== deletedId));
  };

  return (
    <div>
      <Container>
        <div className ="link-text">
          <NavLink className="display-link" to="/">
            List
          </NavLink>
          <span>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;</span>
          <NavLink className="display-link" to="/players/addPlayer">
            Add Player
          </NavLink>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Preferred Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player._id}>
                <td>{player.playerName}</td>
                <td>{player.preferredPosition}</td>
                <td>
                  <Button className="button" variant="success">
                    <Link
                      className="link"
                      to={`/player/edit/${player._id}`}
                      state={player}
                    >
                      Edit
                    </Link>
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
                  {/* &nbsp; adds space*/}
                  <DeleteButton id={player._id} handleDelete={handleDelete} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DisplayAll;
