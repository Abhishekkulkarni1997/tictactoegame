import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemsArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemsArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[1] &&
      itemsArray[0] === itemsArray[2]
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
      toast(`${itemsArray[0]} wins`, { type: "success" });
    } else if (
      itemsArray[3] !== "empty" &&
      itemsArray[3] === itemsArray[4] &&
      itemsArray[3] === itemsArray[5]
    ) {
      setWinMessage(`${itemsArray[3]} wins`);
      toast(`${itemsArray[3]} wins`, { type: "success" });
    } else if (
      itemsArray[6] !== "empty" &&
      itemsArray[6] === itemsArray[7] &&
      itemsArray[6] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[6]} wins`);
      toast(`${itemsArray[6]} wins`, { type: "success" });
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[4] &&
      itemsArray[0] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
      toast(`${itemsArray[0]} wins`, { type: "success" });
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[4] &&
      itemsArray[2] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[2]} wins`);
      toast(`${itemsArray[2]} wins`, { type: "success" });
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[3] &&
      itemsArray[0] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
      toast(`${itemsArray[0]} wins`, { type: "success" });
    } else if (
      itemsArray[1] !== "empty" &&
      itemsArray[1] === itemsArray[4] &&
      itemsArray[1] === itemsArray[7]
    ) {
      setWinMessage(`${itemsArray[1]} wins`);
      toast(`${itemsArray[1]} wins`, { type: "success" });
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[2] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[2]} wins`);
      toast(`${itemsArray[2]} wins`, { type: "success" });
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemsArray[itemNumber] === "empty") {
      isCross
        ? (itemsArray[itemNumber] = "cross")
        : (itemsArray[itemNumber] = "circle");
      setIsCross(!isCross);
    } else {
      return toast("item aleady filled", { type: "error" });
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <h1 className="text-warning text-center bg-success">Tic Tac Toe</h1>
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-center">{winMessage}</h1>
              <Button color="success" block onClick={reloadGame}>
                Reload Game
              </Button>{" "}
            </div>
          ) : (
            <h1 className="text-info text-center">
              {isCross ? "Cross's" : "Circle's"} turn
            </h1>
          )}
          <div className="grid">
            {itemsArray.map((item, index) => (
              <Card key={index}>
                <CardBody
                  className="box"
                  onClick={() => {
                    changeItem(index);
                  }}
                >
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
