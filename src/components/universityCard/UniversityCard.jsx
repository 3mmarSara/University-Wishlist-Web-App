import { Card, Button } from "react-bootstrap";
import "./UniversityCard.css";

const UniversityCard = ({ university, isOnWishlist, onAddToWishlist }) => (
  <Card className="university-card" style={{ width: "18rem" }}>
    <Card.Body className="card-body">
      <Card.Title className="name">{university.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {university.country} ({university.alpha_two_code})
      </Card.Subtitle>
      <Card.Text>
        <a
          href={university.web_pages[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </Card.Text>
    </Card.Body>
    <Button
      className="add-btn"
      onClick={onAddToWishlist}
      disabled={isOnWishlist}
    >
      {isOnWishlist ? "In Wishlist" : "Add to Wishlist"}
    </Button>
  </Card>
);

export default UniversityCard;
