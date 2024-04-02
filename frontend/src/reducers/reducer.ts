import { createReducer } from '@reduxjs/toolkit';
import { setHardware } from '../actions/action';
import { hardwares } from '../data/hardware-list';

const initalState = {
  hardware: hardwares[0]
};

const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(setHardware, (state, action) => {
      state.hardware = action.payload;
    })
});
export { reducer };

