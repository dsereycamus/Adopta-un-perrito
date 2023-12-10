import Card from "react-bootstrap/Card";
import CardDog from "./Tags";

const MyCard = ({ img, name, text, color, breed }) => {
  return (
    <>
      <Card style={{ width: "18rem", height: "26rem" }} className="text-center">
        <Card.Img className="img-card" variant="top" src={img} />
        <Card.Body className="body-card">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{text}</Card.Subtitle>
          <CardDog text={breed} color={color} />
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
