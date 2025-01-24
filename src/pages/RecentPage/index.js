import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import data from "../../data/shoes-data";

function RecentPage() {
  let [recentView, setRecentView] = useState([]);
  let [product, setProduct] = useState(data);

  useEffect(() => {
    let recent = JSON.parse(localStorage.getItem("recent"));
    setRecentView([...recent.sort()]);
  }, []);

  console.log("recentView : " + recentView);
  return (
    <div>
      <h4>최근본 상품리스트</h4>
      <Container fluid="md">
        <Row>
          {recentView.map((x, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`/images/shoes1.jpg`}
                    width={"80%"}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default RecentPage;
