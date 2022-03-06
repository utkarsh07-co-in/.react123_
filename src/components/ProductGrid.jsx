import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product" style={{ border: "1px solid black" }}>
        <img src={this.props.product["product-image-url"]} />
        <div>{this.props.product["product-name"]}</div>
      </div>
    );
  }
}

export default Product;
