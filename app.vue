<template>
  <div>
    <ul>
      <li v-for="user in user.getUserList" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "@/store/user";

const user = useUserStore();

const userList = ref([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]);

user.setUserList(userList.value);
</script>
