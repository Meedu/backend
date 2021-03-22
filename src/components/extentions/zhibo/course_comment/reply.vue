<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">课程评论回复</span>
      <div class="h-panel-right">
        <Button color="primary" @click="create">确认</Button>
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Form mode="block" ref="form" :model="form">
        <FormItem label="回复内容" prop="reply">
          <wang-editor v-model="form.reply"></wang-editor>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import WangEditor from '../../../common/wangEditor';

export default {
  props: ['id', 'reply_content'],
  components: { WangEditor },
  data() {
    return {
      form: {
        reply: this.reply_content
      }
    };
  },
  methods: {
    create() {
      R.Extentions.zhibo.CourseComment.Reply(this.id, this.form.reply).then(() => {
        HeyUI.$Message.success('成功');
        this.$emit('success');
      });
    }
  }
};
</script>
