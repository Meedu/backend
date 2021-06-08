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
            <FormItem label="父级" prop="parent_id">
              <Select v-model="category.parent_id" :datas="categories" keyName="id" titleName="name" :filterable="true"></Select>
            </FormItem>
          </Cell>
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
        sort: 0
      },
      categories: [],
      rules: {
        required: ['name', 'sort']
      }
    };
  },
  mounted() {
    R.Extentions.paper.QuestionCategory.Create().then(res => {
      this.categories = res.data.categories;
    });
    R.Extentions.paper.QuestionCategory.Edit({ id: this.id }).then(res => {
      this.category = res.data.data;
    });
  },
  methods: {
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$emit('success', this.category);
        this.close();
      }
    },
    cancel() {
      this.close();
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
