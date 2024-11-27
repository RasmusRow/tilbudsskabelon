<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  kind: {
    type: String as PropType<
      | 'primary'
      | 'primary-reverse'
      | 'secondary'
      | 'white'
      | 'black'
      | 'grey'
      | 'border'
      | 'link'
      | 'link-active'
      | 'signal-red'
      | 'signal-yellow'
      | 'signal-green'
    >,
    default: 'primary',
  },
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'large',
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: '',
  },
  squared: {
    type: Boolean,
    default: false,
  },
  prompt: {
    type: Boolean,
    default: false,
  },
  promptText: {
    type: String,
    default: '',
  },
  dropdownPosition: {
    type: String,
    default: '',
  },
  confirmText: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['onAccept', 'onClick']);

const showPrompt = ref(false);
const showDropdown = ref(false);

const onClick = () => {
  emit('onClick');

  if (props.prompt) {
    showPrompt.value = true;
  }

  if (props.dropdown) {
    showDropdown.value = true;
  }
};
</script>

<template>
  <component
    :is="link ? 'router-link' : 'button'"
    class="ease relative flex h-12 font-display font-medium select-none group items-center justify-center gap-3 whitespace-nowrap rounded-full border border-transparent px-5 text-black transition-all duration-100 ease-out"
    :class="{
      'h-12 px-4': size === 'small',
      'bg-primary text-white hover:brightness-110': kind === 'primary',
      'border !border-primary-base !bg-primary-light !text-primary-base hover:brightness-110':
        kind === 'primary-reverse',
      'bg-secondary text-label hover:text-black': kind === 'secondary',
      ' text-label hover:text-black': kind === 'white',
      'bg-black text-white': kind === 'black',
      'bg-[#f2f2f2] text-label hover:bg-gray-200': kind === 'grey',
      'border !border-border text-black hover:!border-label focus:!border-border hover:text-black': kind === 'border',
      '!px-0 text-grey-3 rounded-none hover:text-black': kind === 'link',
      '!px-0 text-label-blue rounded-none hover:text-white': kind === 'link-blue',
      '!px-0 text-black !rounded-none border-b-4 border-b-black': kind === 'link-active',
      'bg-signal-red-light text-signal-red-dark': kind === 'signal-red',
      'bg-signal-yellow-light text-signal-yellow-dark': kind === 'signal-yellow',
      'bg-signal-green-light text-signal-green-dark': kind === 'signal-green',
      '!h-8 !px-3': size === 'small',
      '!size-12 !px-0': squared,
      '!size-10 !px-0': squared && size === 'small',
    }"
    :to="link"
    :type="type"
    @click="onClick"
  >
    <slot></slot>
  </component>
</template>
