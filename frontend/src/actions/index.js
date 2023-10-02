import * as axios from "../api/index";
// when error occur here make sure you check your api logic functions
import {
  FETCH_CONTACT,
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../constants/index";

// get functions
export const getContacts = () => async (dispatch) => {
  try {
    const { data } = await axios.fetchContacts();
    dispatch({ type: FETCH_CONTACT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//   create CONTACTion function
export const createContact = (contact) => async (dispatch) => {
  try {
    const { data } = await axios.createContact(contact);
    dispatch({ type: CREATE_CONTACT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// update CONTACT function
export const updateContact = (contact, id) => async (dispatch) => {
  try {
    const { data } = await axios.updateContact(contact, id);
    dispatch({ type: UPDATE_CONTACT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// delete CONTACT function
export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.deleteContact(id);
    dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (error) {
    console.log(error);
  }
};
