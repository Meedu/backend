<style lang="less" scoped>
.add-option-button,
.del-option-button {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.04);
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}
</style>

<template>
  <div>
    <FormItem :label="'空' + item" v-for="(item, index) in len" :key="index">
      <input type="text" v-model="v[index]" />
    </FormItem>

    <Row :space="10">
      <Cell :width="12">
        <div class="add-option-button" @click="add">添加答案</div>
      </Cell>
      <Cell :width="12">
        <div class="del-option-button" @click="del">删除答案</div>
      </Cell>
    </Row>
  </div>
</template>

<script>
export default {
  props: ['content', 'length'],
  data() {
    return {
      v: [],
      len: 0
    };
  },
  mounted() {
    // 长度
    this.len = this.length === 0 ? 1 : this.length;
    for (let i = 0; i < this.len; i++) {
      this.v[i] = null;
    }

    // 内容
    if (this.content.length > 0) {
      for (let i = 0; i < this.content.length; i++) {
        this.v[i] = this.content[i];
      }
    }
  },
  watch: {
    v() {
      let c = this.v.join(',');
      console.log(this.v, c);
      this.$emit('update', 'input', c);
    }
  },
  methods: {
    add() {
      this.len++;
      this.v[this.len - 1] = null;
    },
    del() {
      if (this.len > 1) {
        this.len--;
        this.v.splice(-1, 1);
      }
    }
  }
};
</script>
