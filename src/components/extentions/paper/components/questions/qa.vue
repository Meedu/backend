<template>
  <FormItem label="答案(无标准答案)">
    <textarea v-model="v"></textarea>
  </FormItem>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      v: this.content
    };
  },
  watch: {
    content() {
      this.v = this.content;
    },
    v() {
      this.$emit('update', 'input', this.v);
    }
  }
};
</script>