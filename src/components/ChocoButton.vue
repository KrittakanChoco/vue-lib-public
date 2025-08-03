<script setup lang="ts">
const props = defineProps({
  buttonClass: {
    type: String,
    default: "button-main",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="border-box m-0 inline-block w-full cursor-pointer items-center rounded-[100px] p-[8px] text-center text-[24px] leading-[32px] font-bold"
    :class="[
      props.buttonClass,
      disabled && 'pointer-events-none bg-gray-200 text-gray-500',
    ]"
  >
    <div v-if="loading" class="relative mx-auto h-[32px] w-[32px]">Loading</div>
    <slot v-else name="button-content">
      <div class="flex items-center justify-center gap-[12px]">
        <slot />
      </div>
    </slot>
  </button>
</template>
