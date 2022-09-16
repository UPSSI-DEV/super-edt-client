<template>
  <div>
    <transition name="fadeIn">
      <div
        class="absolute inset-0 overflow-hidden bg-black opacity-50"
        v-show="showDropdown"
        @click="showDropdown = false"
      ></div>
    </transition>
    <div class="relative">
      <div
        class="input flex cursor-pointer items-center justify-between transition-colors"
        @click="showDropdown = !showDropdown"
        :class="{ 'border-primary-light': showDropdown }"
      >
        <p>{{ inner_value }}</p>
        <vue-feather type="chevron-down"></vue-feather>
      </div>
      <transition name="appear-down">
        <div
          class="input absolute left-0 right-0 top-full z-40 mt-4 overflow-hidden p-0"
          v-show="showDropdown"
          @click="showDropdown = false"
        >
          <div
            v-for="[name, value] in Object.entries(options)"
            class="group:bg-gray z-50 cursor-pointer border-b-2 border-primary bg-black p-4 last:border-0"
            @click="changeValue(name)"
          >
            {{ name }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";

type Props = {
  options: { [key: string]: string };
  modelValue: string;
};

type Emits = {
  (e: "update:modelValue", value: string): void;
};

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const inner_value = ref(Object.keys(props.options)[0] ?? "");

const changeValue = (key: string) => {
  inner_value.value = key;
  emit("update:modelValue", props.options[key]);
};

const showDropdown = ref(false);
</script>

<style scoped>
.appear-down-enter-active {
  animation: var(--anim-appear-down);
}

.appear-down-leave-active {
  animation: var(--anim-disappear-up);
}
</style>
