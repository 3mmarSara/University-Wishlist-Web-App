import { Button } from "react-bootstrap";
import "./WishlistTable.css"; 

const WishlistTable = ({ wishlist, onRemove, onToggleChecked }) => (
  <div className="table-container">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">University Name</th>
          <th scope="col">Country</th>
          <th scope="col">Checked</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {wishlist.map((item, index) => (
          <tr key={item.name}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.country}</td>
            <td>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleChecked(item.name)}
              />
            </td>
            <td>
              <Button variant="danger" onClick={() => onRemove(item.name)}>
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default WishlistTable;
