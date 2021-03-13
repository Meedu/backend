<template>
  <div class="h-panel w-800">
    <div class="h-panel-bar">
      <span class="h-panel-title">发站内消息</span>
      <div class="h-panel-right">
        <Button color="primary" @click="confirm">确认发送</Button>
        <Button @click="$emit('close')" :text="true">关闭</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Form mode="block" ref="form" :rules="rules" :model="form">
        <FormItem label="消息内容" prop="message">
          <textarea v-model="form.message" rows="3" placeholder="消息内容"></textarea>
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
      form: {
        message: null
      },
      rules: {
        required: ['message']
      }
    };
  },
  methods: {
    confirm() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        R.Member.SendMessage(this.id, this.form.message).then(() => {
          HeyUI.$Message.success('发送成功');
          this.$emit('success');
        });
      }
    }
  }
};
</script>
