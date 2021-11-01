import React from "react";

const Ingredients = (props) => {
  let meal;
  if (props.meals === "Plov") {
    meal = (
      <div>
        <h1>Ingredients</h1>
        <div>
          1 kg moderately fat lamb, shoulder or ribs 1 kg medium grain rice
          (paella type) 200-250 ml vegetable frying oil 1 kg carrot (preferably
          not young) 2-3 medium size onions 1-1.5 tbsp cumin 2-3 whole heads of
          garlic, the younger the better (optional) 1-2 long hot chillies
          (optional) salt to taste 5 liter heavy cast-iron cattle (dutch oven)
          or bigger, preferably round-bottomed
        </div>
      </div>
    );
  } else if (props.meals === "Manty") {
    meal = (
      <div>
        <h1>Ingredients</h1>
        <div>
          Ground Meat: Some folks use ground lamb for the filling, but my family
          has only ever used ground beef. Parsley: I recommend flat-leaf parsley
          rather than curly parsley because it has more flavor.
        </div>
      </div>
    );
  } else if (props.meals === "Beshbarmak") {
    meal = (
      <div>
        <h1>Ingredients</h1>
        <div>
          2 1/2 lbs. lamb or beef with bone 1 large onion peeled and sliced into
          rings divided 1 bay leaf ground pepper Water to cover For the noodles:
          2 eggs 3/4 to 1 cup water 1/2 teaspoon salt plain flour - about 600
          grams or you can use lasagna noodles as a quick and easy alternative
          to making the noodles from scratch.
        </div>
      </div>
    );
  }
  return <div>{meal}</div>;
};

export default Ingredients;
