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
      <Form ref="form" mode="block" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="chapter">
        <FormItem label="章节名" prop="title">
          <template v-slot:label>章节名</template>
          <input type="text" v-model="chapter.title" />
        </FormItem>
        <FormItem label="升序" prop="sort">
          <template v-slot:label>升序</template>
          <input type="number" v-model="chapter.sort" min="0" />
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import Course from 'model/Course';
import Chapter from 'model/CourseChapter';

export default {
  props: ['cid'],
  data() {
    return {
      course: Course.parse({}),
      chapter: Chapter.parse({}),
      rules: {
        required: ['title', 'sort']
      }
    };
  },
  mounted() {
    this.course.id = this.cid;
  },
  methods: {
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        let data = this.chapter;
        data.course_id = this.course.id;
        R.CourseChapter.Create(data).then(resp => {
          HeyUI.$Message.success('成功');
          this.$emit('success', data);
        });
      }
    }
  }
};
</script>
