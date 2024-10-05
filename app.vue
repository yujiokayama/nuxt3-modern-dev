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

interface User {
  id: number;
  name: string;
}

const userList = ref<User[]>([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]);

onMounted(() => {
  user.setUserList(userList.value);
});
</script>
