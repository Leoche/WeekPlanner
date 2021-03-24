<template>
  <div
    class=" p-4 day bg-white w-1/6 h-full"
    v-bind:class="{
      'w-2/6 shadow-xl z-10': dayNumber == today(),
      'w-1/6 shadow': dayNumber != today(),
    }"
  >
    <div class="flex flex-wrap z-10 relative h-full flex-col justify-start">
      <div class="flex w-full justify-between h-8">
        <h1 class="text-2xl font-bold capitalize h-8">{{ label }}</h1>
        <div
          class="rounded-full h-8 w-8 bg-green-100 text-green-600 flex items-center justify-center"
        >
          <check-icon size="1x"></check-icon>
        </div>
      </div>
      <div
        class="w-full flex flex-grow flex-col items-start justify-start text-sm font-medium text-gray-500 mt-2 divide-y -mx-1"
      >
        <draggable
          v-model="tasks"
          class="w-full"
          @start="drag = true"
          @end="drag = false"
          v-bind="dragOptions"
        >
          <transition-group type="transition" name="flip-list" class="w-full min-h-24 block">
            <Task
              v-for="task in tasks"
              :key="task.id"
              :id="task.id"
              :active="task.active"
              :title="task.title"
            ></Task>
          </transition-group>
            <div slot="footer" key="footer">
              <div class="py-2 px-3 mb-1 flex w-full items-center justify-start cursor-pointer rounded-sm hover:text-black hover:shadow text-xs uppercase font-semibold text-gray-400">
              <div
                class="rounded-full mr-2 cursor-pointer h-6 w-6 flex items-center justify-center transform"
              >
                <PlusIcon size="1.5x"></PlusIcon>
              </div>
                AJOUTER UNE TACHE
              </div>
            </div>
        </draggable>
      </div>

      <div class="mt-auto flex">
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { CheckIcon, PlusIcon } from "vue-feather-icons";
import Task from "./Task";
import moment from "moment";

export default {
  name: "Day",
  components: {
    draggable,
    Task,
    CheckIcon,
    PlusIcon
  },
  data() {
    return {
      label: "Loading...",
      tasks: [
        { id: Math.round(Math.random() * 1000), active: true, title: "test" },
        {
          id: Math.round(Math.random() * 1000),
          active: false,
          title: "test 1",
        },
        { id: Math.round(Math.random() * 1000), active: true, title: "test 2" },
        { id: Math.round(Math.random() * 1000), active: true, title: "test 3" },
        { id: Math.round(Math.random() * 1000), active: true, title: "test 4" },
      ],
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
    today: function() {
      //moment().now().format('d')
      return 2;
    },
  },

  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "tasks",
      };
    },
  },
};
</script>
