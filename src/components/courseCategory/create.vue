<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">添加</span>
      <div class="h-panel-right">
        <Button color="primary" @click="create">添加</Button>
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :labelWidth="110" :rules="rules" :model="category">
        <FormItem label="升序" prop="sort">
          <template v-slot:label>升序</template>
          <input type="number" v-model="category.sort" />
        </FormItem>
        <FormItem label="分类名" prop="name">
          <template v-slot:label>分类名</template>
          <input type="text" v-model="category.name" />
        </FormItem>
        <FormItem label="显示" prop="is_show">
          <template v-slot:label>显示</template>
          <h-switch v-model="category.is_show" :trueValue="1" :falseValue="0"></h-switch>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: {
        sort: 0,
        name: '',
        parent_id: 0,
        is_show: 0
      },
      rules: {
        required: ['sort', 'name', 'is_show']
      }
    };
  },
  methods: {
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$emit('success', this.category);
      }
    }
  }
};
</script>
