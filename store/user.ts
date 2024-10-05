import { defineStore } from "pinia";

interface User {
  id: number;
  name: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userList: [],
  }),
  getters: {
    getUserList: (state) => state.userList as User[],
  },
  actions: {
    setUserList(users: any) {
      this.userList = users;
    },
  },
});
