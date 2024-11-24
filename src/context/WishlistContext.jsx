import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (university) => {
    if (!wishlist.some((item) => item.name === university.name)) {
      setWishlist([...wishlist, { ...university, checked: false }]);
    }
  };

  const removeFromWishlist = (name) => {
    setWishlist(wishlist.filter((item) => item.name !== name));
  };

  const toggleChecked = (name) => {
    setWishlist(
      wishlist.map((item) =>
        item.name === name ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, toggleChecked }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
