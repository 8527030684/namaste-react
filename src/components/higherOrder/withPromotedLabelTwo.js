import RestaurantCard from "../RestaurantCard";

const WithPromotedLabelTwo = (props) => {
  return (
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default WithPromotedLabelTwo;
