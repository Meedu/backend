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
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="teacher">
        <Row :space="10">
          <Cell :width="8">
            <FormItem label="讲师名" prop="name">
              <input type="text" v-model="teacher.name" />
            </FormItem>
          </Cell>
          <Cell :width="8">
            <FormItem label="密码" prop="password">
              <input type="text" v-model="teacher.password" />
            </FormItem>
          </Cell>
          <Cell :width="24">
            <FormItem label="隐藏" prop="is_hidden">
              <h-switch v-model="teacher.is_hidden" :trueValue="1" :falseValue="0"></h-switch>
            </FormItem>
          </Cell>
        </Row>

        <FormItem label="头像" prop="avatar">
          <image-upload v-model="teacher.avatar" name="头像"></image-upload>
        </FormItem>
        <FormItem label="简介" prop="short_desc">
          <textarea v-model="teacher.short_desc" rows="3"></textarea>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      teacher: {
        name: '',
        avatar: '',
        short_desc: '',
        username: '',
        password: '',
        is_hidden: 0
      },
      rules: {
        required: ['name', 'avatar', 'short_desc', 'password', 'is_hidden']
      }
    };
  },
  mounted() {
    R.Extentions.zhibo.Teacher.Edit({ id: this.id }).then(res => {
      this.teacher = res.data;
    });
  },
  methods: {
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$emit('success', this.teacher);
      }
    }
  }
};
</script>
