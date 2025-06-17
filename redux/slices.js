import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user_data: '',
  repayment: {},
};

export const userSlice = createSlice({
  name: "user_data",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user_data = action.payload;
    },

    logout: (state, action) => {
      state.user_data = ''; //when you logout set the user back to null
    },
  },
});

export const repaymentSlice = createSlice({
        name: 'loan',
        repayment: {},
        reducers: {
                setRepayment: (state, action) => {
                        state.repayment = action.payload;
                }


        }
        

})



export const { login, logout } = userSlice.actions;
export const { setRepayment } = repaymentSlice.actions;

export const selectUser = (state) => state.user_data.user_data;
export const selectRepayment = (state) => state.loan.repayment;

export default userSlice.reducer;
