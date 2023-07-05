import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`)
    // When sending a delete request always make sure of returning the something which can be used by reducer
    return user;
})

export { removeUser};