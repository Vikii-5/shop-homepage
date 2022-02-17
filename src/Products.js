import { ProductReview } from "./ProductReview";
import { Button } from 'react-bootstrap';

export function Products({ cart, setCart }) {
  const products = [
    {
      name: "Fancy Product",
      review: "",
      badge: "",
      price: "",
      discountPrice: "$40.00 - $80.00",
      button: "View Options",
    },

    {
      name: "Special Item",
      review: "true",
      badge: "Sale",
      price: "$20.00",
      discountPrice: "$18.00",
      button: "Add to Cart",
    },

    {
      name: "Sale Item",
      review: "",
      badge: "Sale",
      price: "$50.00",
      discountPrice: "$25.00",
      button: "Add to Cart",
    },

    {
      name: "Popular Item",
      review: "true",
      badge: "",
      price: "",
      discountPrice: "$40.00",
      button: "Add to Cart",
    },

    {
      name: "Sale Item",
      review: "",
      badge: "Sale",
      price: "$50.00",
      discountPrice: "$25.00",
      button: "Add to Cart",
    },

    {
      name: "Fancy Product",
      review: "",
      badge: "",
      price: "",
      discountPrice: "$120.00 - $280.00",
      button: "View Options",
    },

    {
      name: "Special Item",
      review: "true",
      badge: "Sale",
      price: "$20.00",
      discountPrice: "$18.00",
      button: "Add to Cart",
    },

    {
      name: "Popular Item",
      review: "true",
      badge: "",
      price: "",
      discountPrice: "$40.00",
      button: "Add to Cart",
    },
  ];

  const handleChangeAdd = () => {setCart(cart + 1)};
  const handleChangeRemove = () => {setCart(cart - 1)};

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5">
              <div className="card h-100">
                {/* Sale badge */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  {product.badge}
                </div>
                {/* Product image */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{product.name}</h5>
                    {/* Product review */}
                    {product.review === "true" ? <ProductReview /> : ""}
                    {/* Product price */}
                    <span className="text-muted text-decoration-line-through">
                      {product.price}
                    </span>{" "}
                    {product.discountPrice}
                  </div>
                </div>
                {/* Product actions */}
                <div className="card-footer d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#cart"
                      onClick={product.button === "Add to Cart" ? handleChangeAdd : ""}
                    >
                      {product.button}
                    </a>
                    
                    {product.button === "Add to Cart" ? 
                    <Button
                      className="btn btn-dark mt-2"
                      href="#cart"
                      onClick={handleChangeRemove}
                      disabled={cart <= 0 ? true : false}
                    >
                      Remove
                    </Button> : ""
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
