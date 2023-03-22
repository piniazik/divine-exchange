<template>
  <div class="flex flex-col mb-4">
    <label :for="id" class="pb-2.5"> {{ label }}</label>
    <input 
    :id="id"
    :type="type"
    :v-model ="value"
    :required="required"
    :placeholder="placeholder"
    class="bg-black-500 rounded-la w-full max-w-[587px] h-[50px] px-5 lg:max-w-full lg:w-[587px] xs:w-full transition-all duration-500 focus:bg-violet-dark"
    >
  </div>
</template>
<script>  
export default { 
  name: 'FormInput',
	props: { 
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String,Number],
      default: '',
    },
    required: {
      type: String,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
	},
}
</script>