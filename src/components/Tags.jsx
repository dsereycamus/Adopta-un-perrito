import Badge from "react-bootstrap/Badge";

const CardDog = ({ text, color }) => {
  return (
    <h4 className="d-grid pt-5">
      <Badge bg={color}>{text}</Badge>
    </h4>
  );
};

export default CardDog;
