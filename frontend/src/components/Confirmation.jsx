import { ListGroup } from "react-bootstrap";
import "./Confirmation.css";

const Confirmation = ({ address = null, payment = null }) => {
  let fullPrice = 0;
  const shipment = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const cart = JSON.parse(sessionStorage.getItem("cart"));

  const createList = () => {
    cart.forEach((index) => {
      fullPrice += index.price * index.quantity;
    });

    return cart.map((index) => (
      <ListGroup.Item key={index.uid}>
        <div className="item-image me-3" style={{ float: "left" }}>
          <img src={index.imageUrl} alt="product in cart" />
        </div>
        <div className="row">
          <div className="col">
            <div style={{ float: "left" }}>
              <b>{index.name}</b>
            </div>
            <div style={{ float: "right" }}>R$ {index.price}</div>
          </div>
        </div>
        <div className="row">
          <div style={{ float: "left" }}>Quantity: {index.quantity}</div>
        </div>
      </ListGroup.Item>
    ));
  };

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <label className="text" htmlFor="list">
          <b>Confirmation</b>
        </label>
        <div className="row gap-4">
          <div className="col-7">
            <ListGroup id="list" variant="flush">
              {createList()}
            </ListGroup>
          </div>
          <div className="col" style={{ fontSize: "18px" }}>
            <div className="row gap-3">
              <div>
                <div>
                  <h4>
                    <b>Address</b>
                  </h4>
                </div>
                <div>
                  {address.StreetName}, {address.Number}, {address.Apartment}
                </div>
                <div>
                  {address.City}, {address.State} {address.ZipCode}
                </div>
                <div>{address.Country}</div>
              </div>
              <div>
                <div>
                  <h4>
                    <b>Payment</b>
                  </h4>
                </div>
                <div>
                  <div>Name: {payment.name}</div>
                  <div>
                    Card: **** **** **** {payment.card.slice(-4)} (Credit)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5" style={{ textAlign: "right", fontSize: "18px" }}>
        <div className="row">
          <div className="row mb-5">
            <div className="col-md-10">
              <div>PURCHASE:</div>
              <div>SHIPMENT:</div>
            </div>
            <div className="col">
              <div>R$ {fullPrice}</div>
              <div>R$ {shipment}</div>
            </div>
          </div>
          <div className="row">
            <h4>
              <b>TOTAL: {fullPrice + shipment}</b>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
