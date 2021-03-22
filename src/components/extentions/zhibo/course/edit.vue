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
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="course">
        <Row :space="10">
          <Cell :width="6">
            <FormItem label="分类" prop="category_id">
              <Select v-model="course.category_id" :datas="categories" keyName="id" titleName="name" :filterable="true"></Select>
            </FormItem>
          </Cell>
          <Cell :width="6">
            <FormItem label="讲师" prop="teacher_id">
              <Select v-model="course.teacher_id" :datas="teachers" keyName="id" titleName="name" :filterable="true"></Select>
            </FormItem>
          </Cell>
          <Cell :width="12">
            <FormItem label="课程标题" prop="title">
              <input type="text" v-model="course.title" />
            </FormItem>
          </Cell>
        </Row>

        <Row :space="10">
          <Cell :width="24">
            <FormItem label="课程封面" prop="thumb">
              <image-upload v-model="course.thumb" name="课程封面"></image-upload>
            </FormItem>
          </Cell>
          <Cell :width="24">
            <FormItem label="播放封面" prop="poster">
              <image-upload v-model="course.poster" name="播放封面"></image-upload>
            </FormItem>
          </Cell>
        </Row>

        <Row :space="10">
          <Cell :width="6">
            <FormItem label="价格" prop="charge">
              <input type="number" v-model="course.charge" />
            </FormItem>
          </Cell>
          <Cell :width="6">
            <FormItem label="上架时间" prop="published_at">
              <DatePicker v-model="course.published_at" v-width="200" type="datetime"></DatePicker>
            </FormItem>
          </Cell>
          <Cell :width="6">
            <FormItem label="状态" prop="status">
              <Select v-model="course.status" :datas="status" keyName="key" titleName="name"></Select>
            </FormItem>
          </Cell>
          <Cell :width="3">
            <FormItem label="会员免费" prop="vip_can_view">
              <h-switch v-model="course.vip_can_view" :trueValue="1" :falseValue="0"></h-switch>
            </FormItem>
          </Cell>
          <Cell :width="3">
            <FormItem label="显示" prop="is_show">
              <h-switch v-model="course.is_show" :trueValue="1" :falseValue="0"></h-switch>
            </FormItem>
          </Cell>
        </Row>

        <FormItem label="简短介绍" prop="short_description">
          <textarea v-model="course.short_description" rows="2"></textarea>
        </FormItem>
        <FormItem label="详细介绍" prop="description">
          <tinymce-editor v-model="course.original_desc"></tinymce-editor>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import TinymceEditor from '@/components/common/tinymce';

export default {
  props: ['id'],
  components: {
    TinymceEditor
  },
  data() {
    return {
      course: {
        category_id: null,
        teacher_id: null,
        title: '',
        thumb: '',
        charge: null,
        short_description: '',
        original_desc: '',
        published_at: '',
        is_show: 1,
        vip_can_view: 0,
        status: null,
        poster: ''
      },
      rules: {
        required: [
          'category_id',
          'teacher_id',
          'title',
          'thumb',
          'charge',
          'short_description',
          'original_desc',
          'published_at',
          'is_show',
          'vip_can_view'
        ]
      },
      status: [
        {
          name: '未开课',
          key: 0
        },
        {
          name: '已开课',
          key: 1
        },
        {
          name: '已结课',
          key: 2
        }
      ],
      teachers: [],
      categories: []
    };
  },
  mounted() {
    R.Extentions.zhibo.Course.Create().then(res => {
      this.teachers = res.data.teachers;
      this.categories = res.data.categories;
    });
    R.Extentions.zhibo.Course.Edit({ id: this.id }).then(res => {
      this.course = res.data;
    });
  },
  methods: {
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.course.render_desc = this.course.original_desc;
        R.Extentions.zhibo.Course.Update(this.course).then(resp => {
          HeyUI.$Message.success('成功');
          this.$emit('success');
        });
      }
    }
  }
};
</script>
