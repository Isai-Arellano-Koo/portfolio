// Importa las funciones necesarias de Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Configura el almacén de Redux sin reducers iniciales
const store = configureStore({
  reducer: {
    initialState: []
  },
});

export default store;
