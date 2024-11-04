import _ from "lodash";

const searchLast = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  console.log(_.last(arr));
};
export default searchLast;
