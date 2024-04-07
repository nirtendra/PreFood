import { Button } from "react-bootstrap";
import "./Products.css";
import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";

export const ProductList = () => {
  return (
    <main>
         <FilterBar />
      <section className="ProductListSection">
        <div className="ProductListContainer">
          <span className="All Menu">All Menu(14) </span>
          <span>
            <Button className="ToggleBtn">...</Button>
          </span>
        </div>
        <div className="ProductsCardView">
          <ProductCard />
        </div>
      </section>
     
    </main>
  );
};
