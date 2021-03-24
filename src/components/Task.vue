<template>
  <div class="py-2 px-3 mb-1 flex w-full items-start justify-start justify-between shadow rounded-sm bg-white">
    <div class="flex items-center">
      <div
        class="rounded-full mr-2 cursor-pointer h-6 w-6 text-white flex items-center justify-center transform hover:scale-110 active:scale-90 transition-all"
        v-bind:class="{
          'bg-green-100 text-green-600 hover:bg-green-200': isActive,
          'hover:ring-gray-400 ring-2 ring-inset ring-gray-200': !isActive,
        }"
        v-on:click="toggleActive"
      >
        <check-icon v-if="isActive" size="1x"></check-icon>
      </div>
      <div class="font-semibold text-black">{{id}} - {{title}}</div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "vue-feather-icons";

export default {
  name: "Task",
  components: {
    CheckIcon,
  },
  data() {
    return {
      label: "Loading...",
      isActive:false,
    };
  },
  props: ["active", "title", "id"],
  created() {
      this.isActive = this.active;
  },
  methods: {
      toggleActive(){
          this.isActive=!this.isActive;
      }
  },
};
</script>
