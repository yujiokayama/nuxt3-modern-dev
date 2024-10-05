// stores/user.ts
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userList: [],
  }),
  getters: {
    getUserList: (state) => state.userList as any,
  },
  actions: {
    setUserList(users: any) {
      this.userList = users;
    },
  },
});
