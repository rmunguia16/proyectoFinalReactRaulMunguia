import getDbData from "./getDbData";

const getAll = async ( setLoading, setCartTotal, setCart, setItems, setHighlights) => {
  let dbNames = ["items", "highlights", "cart"];
  dbNames.forEach(async (dbName) => {
    getDbData(
      dbName,
      dbName == "items"
        ? setItems
        : dbName == "highlights"
        ? setHighlights
        : setCart,
      setLoading,
      setCartTotal
    );
  });
};
export default getAll;