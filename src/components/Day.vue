<template>
  <div
    class="rounded-xl p-4 day bg-white w-1/6 h-64"
    v-bind:class="{ 'w-2/6 -mt-2 shadow-xl h-72': dayNumber == today(), 'w-1/6 shadow': dayNumber != today() }"
  >
    <div class="flex flex-wrap z-10 relative h-full justify-start">
      <div class="flex w-full justify-between h-8">
        <h1 class="text-2xl font-bold capitalize h-8">{{ label }}</h1>
        <div
          class="rounded-full h-8 w-8 bg-green-100 text-green-600 flex items-center justify-center"
        >
          <check-icon size="1x"></check-icon>
        </div>
      </div>
      <div
        class="w-full flex flex-col text-sm font-medium text-gray-500 mt-2 divide-y divide-fuchsia-300"
      >
        <div class="py-2 flex items-center justify-between">
          <div class="flex items-center">
            <div
              class="rounded-full mr-2 h-4 w-4 bg-green-500 text-white flex items-center justify-center"
            >
              <check-icon size="0.75x"></check-icon>
            </div>
            In stock
          </div>
        </div>

        <div class="py-2 flex items-center justify-between">
          <div class="flex items-center">
            <div
              class="rounded-full mr-2 h-4 w-4 ring-2 ring-inset ring-gray-200 cursor-pointer hover:ring-gray-400 text-white flex items-center justify-center"
            ></div>
            In stock
          </div>
        </div>
      </div>

        <div class="flex-grow">
          <!-- This item will grow -->
        </div>
        <div class="mt-auto flex-auto">
          <button
            class="px-4 py-2 flex items-center justify-center rounded-md bg-blue-600 text-white"
            type="submit"
          >
            Buy now
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "vue-feather-icons";
import moment from "moment";

export default {
  name: "Day",
  components: {
    CheckIcon,
  },
  data() {
    return {
      label: "Loading...",
    };
  },
  props: ["dayNumber"],
  created() {
    // `this` points to the vm instance
    moment.locale("fr");
    this.label = moment()
      .startOf("week")
      .add(this.dayNumber, "d")
      .format("dddd");
  },
  methods: {
    today: function () {
      //moment().now().format('d')
      return 2;
    },
  },
};
</script>

<style scoped>
.day .flex {
}
.day {
  position: relative;
}
</style>
