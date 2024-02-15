import { createStore } from "vuex";
import axios from 'axios'; // Import Axios or your HTTP library here

export const store = createStore({
  state: {
    
    isLogin: false,
    Username: '',
    Email:'',
    Name: '',
    Mob_No: '',
    Address: '',
    Country: '',
    State: ''
  },
  actions: {
    async fetchData({ commit }, email) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/getprofile', {
          Email: email
        });
        if (response.status === 200) {
          // Assuming your server responds with user data
          const userData = response.data;
          console.log(userData);

          // Commit the userData to your Vuex state
          commit('SET_USER_DATA', userData);

        } else {
          // Handle login failure or other errors here
          console.error('Login failed or other error occurred');
        }
      } catch (error) {
        // Handle errors here, such as network issues
        console.error('An error occurred:', error);
      }
    }
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.Username = userData.username;
      state.Email = userData.Email;
      state.isLogin=true;
    },
  
  }
});
