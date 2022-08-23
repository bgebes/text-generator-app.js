import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getParasFromAPI } from '../../actions/actions';

const getParas = createAsyncThunk('paras/getParas', getParasFromAPI);
const ParasSlice = createSlice({
  name: 'paras',
  initialState: {
    parasCount: 4,
    includeHTML: false,
    loading: false,
    connectionStatus: 'unused',
    paras: [],
  },
  reducers: {
    setParasCount: (state, action) => {
      state.parasCount = action.payload.count;
    },
    toggleHTML: (state, action) => {
      state.includeHTML = action.payload.newState === 'Yes' ? true : false;
    },
  },
  extraReducers: {
    [getParas.pending]: (state, _) => {
      state.loading = true;
      state.connectionStatus = 'pending';
    },
    [getParas.rejected]: (state, _) => {
      state.loading = true;
      state.connectionStatus = 'error';
    },
    [getParas.fulfilled]: (state, action) => {
      state.loading = false;
      state.connectionStatus = 'success';

      const response = action.payload;
      state.paras = response
        .split('\n')
        .filter((paragraf) => paragraf.length > 0);
    },
  },
});

const { setParasCount, toggleHTML } = ParasSlice.actions;

export { ParasSlice, getParas, setParasCount, toggleHTML };
export default ParasSlice.reducer;
