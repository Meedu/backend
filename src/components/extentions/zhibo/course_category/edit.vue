<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">编辑</span>
      <div class="h-panel-right">
        <Button color="primary" @click="create">保存</Button>
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="category">
        <Row :space="10">
          <Cell :width="8">
            <FormItem label="分类名" prop="name">
              <input type="text" v-model="category.name" />
            </FormItem>
          </Cell>
          <Cell :width="8">
            <FormItem label="排序" prop="sort">
              <input type="number" v-model="category.sort" />
            </FormItem>
          </Cell>
          <Cell :width="2"></Cell>
          <Cell :width="6">
            <FormItem label="显示" prop="is_show">
              <h-switch v-model="category.is_show" :trueValue="1" :falseValue="0"></h-switch>
            </FormItem>
          </Cell>
        </Row>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      category: {
        name: '',
        sort: 0,
        is_show: 1
      },
      rules: {
        required: ['name', 'sort', 'is_show']
      }
    };
  },
  mounted() {
    R.Extentions.zhibo.CourseCategory.Edit({ id: this.id }).then(res => {
      this.category = res.data;
    });
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
