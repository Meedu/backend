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
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="video">
        <Row :space="10">
          <Cell :width="6">
            <FormItem label="章节" prop="chapter_id">
              <Select v-model="video.chapter_id" :datas="chapters[video.course_id]" keyName="id" titleName="name" :filterable="true"></Select>
            </FormItem>
          </Cell>
          <Cell :width="18">
            <FormItem label="标题" prop="title">
              <input type="text" v-model="video.title" />
            </FormItem>
          </Cell>
        </Row>
        <Row :space="10">
          <Cell :width="6">
            <FormItem label="直播时间" prop="published_at">
              <DatePicker v-model="video.published_at" v-width="200" type="datetime"></DatePicker>
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="是否显示" prop="is_show">
              <h-switch v-model="video.is_show" :trueValue="1" :falseValue="0"></h-switch>
            </FormItem>
          </Cell>
          <Cell :width="24">
            <FormItem label="腾讯云回放视频ID" prop="tencent_video_id" v-if="video.service === 'tencent'">
              <input type="text" v-model="video.tencent_video_id" />
            </FormItem>
            <FormItem label="阿里云回放视频ID" prop="aliyun_video_id" v-else-if="video.service === 'aliyun'">
              <input type="text" v-model="video.aliyun_video_id" />
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
      video: {
        course_id: null,
        chapter_id: null,
        title: '',
        published_at: '',
        is_show: 1,
        tencent_video_id: null,
        aliyun_video_id: null
      },
      rules: {
        required: ['course_id', 'chapter_id', 'title', 'published_at', 'is_show']
      },
      courses: [],
      chapters: []
    };
  },
  mounted() {
    R.Extentions.zhibo.CourseVideo.Create().then(res => {
      this.courses = res.data.courses;
      this.chapters = res.data.chapters;
    });
    R.Extentions.zhibo.CourseVideo.Edit({ id: this.id }).then(res => {
      this.video = res.data;
    });
  },
  methods: {
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        R.Extentions.zhibo.CourseVideo.Update(this.video).then(resp => {
          HeyUI.$Message.success('成功');
          this.$emit('success');
        });
      }
    }
  }
};
</script>
