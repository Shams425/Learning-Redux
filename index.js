// making the first action in redux
const BUY_CAKE = "BUY_CAKE";

//making an action creater
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
