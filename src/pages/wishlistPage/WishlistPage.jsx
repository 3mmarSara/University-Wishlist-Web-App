import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import WishlistTable from "../../components/wishlistTable/WishlistTable";
import "./WishlistPage.css";

function WishlistPage() {
  const { wishlist, removeFromWishlist, toggleChecked } =
    useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      <header>
        <h2 className="title">Wishlist </h2>
      </header>

      <WishlistTable
        wishlist={wishlist}
        onRemove={removeFromWishlist}
        onToggleChecked={toggleChecked}
      />
    </div>
  );
}

export default WishlistPage;
