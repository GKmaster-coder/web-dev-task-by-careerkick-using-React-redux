import Products from "../../productContent";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: Products,
  filteredItems: Products,
  searchItem: "",
  selectedCategory: "All",
};

// Search Product and Search Category
const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchItem.toLowerCase());
    const matchCategory =
      state.selectedCategory === "All" || product.category === state.selectedCategory;
    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchItem = action.payload;
      state.filteredItems = filterProducts(state);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
