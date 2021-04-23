<style lang="less" scoped>
.upload-video-box {
  width: 100%;
  height: auto;
  float: left;

  .tabs {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 15px;
  }

  .body {
    width: 100%;
    height: auto;
    float: left;
  }
}
</style>
<template>
  <div class>
    <div class="h-panel w-1200">
      <div class="h-panel-bar">
        <span class="h-panel-title">编辑</span>
        <div class="h-panel-right">
          <Button color="primary" @click="create">保存</Button>
          <Button @click="$emit('close')" :text="true">取消</Button>
        </div>
      </div>
      <div class="h-panel-body">
        <Form ref="form" mode="block" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="video">
          <Row :space="10">
            <Cell :width="18">
              <FormItem label="视频名" prop="title">
                <input type="text" v-model="video.title" />
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="上架时间" prop="published_at">
                <DatePicker v-model="video.published_at" type="datetime"></DatePicker>
              </FormItem>
            </Cell>
          </Row>

          <Row :space="10">
            <Cell :width="9">
              <FormItem label="章节" prop="chapter_id">
                <Select v-model="video.chapter_id" :datas="chapters" keyName="id" titleName="title" :filterable="true"></Select>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="价格" prop="charge">
                <div class="h-input-group" v-width="200">
                  <input type="text" v-model="video.charge" />
                  <span class="h-input-addon">元</span>
                </div>
              </FormItem>
            </Cell>
            <Cell :width="3">
              <FormItem label="禁止购买" prop="is_ban_sell">
                <h-switch v-model="video.is_ban_sell" :trueValue="1" :falseValue="0"></h-switch>
              </FormItem>
            </Cell>
            <Cell :width="3">
              <FormItem label="显示" prop="is_show">
                <h-switch v-model="video.is_show" :trueValue="1" :falseValue="0"></h-switch>
              </FormItem>
            </Cell>
            <Cell :width="3">
              <FormItem label="禁止快进" prop="ban_drag">
                <template v-slot:label>禁止快进</template>
                <h-switch v-model="video.ban_drag" :trueValue="1" :falseValue="0"></h-switch>
              </FormItem>
            </Cell>
          </Row>

          <FormItem label="上传视频">
            <div class="upload-video-box">
              <div class="tabs">
                <Button class="h-btn" :class="{ 'h-btn-primary': item === tab }" v-for="item in tabs" :key="item" @click="switchTab(item)">{{
                  item
                }}</Button>
              </div>
              <div class="body">
                <aliyun-video v-show="tab === '阿里云点播'" v-model="video.aliyun_video_id"></aliyun-video>
                <tencent-video v-show="tab === '腾讯云点播'" v-model="video.tencent_video_id"></tencent-video>
                <input type="text" v-show="tab === 'URL地址'" placeholder="视频URL地址（以mp4,m3u8等格式结尾的链接）" v-model="video.url" />
              </div>
            </div>
          </FormItem>

          <Row :space="10">
            <Cell :width="12">
              <FormItem label="视频时长" prop="duration">
                <input-duration v-model="video.duration"></input-duration>
              </FormItem>
            </Cell>
            <Cell :width="12">
              <FormItem label="试看时长" prop="free_seconds">
                <input-duration v-model="video.free_seconds"></input-duration>
              </FormItem>
            </Cell>
          </Row>

          <Row :space="10">
            <Cell :width="6">
              <FormItem label="Web播放器" prop="player_pc">
                <template v-slot:label>Web播放器</template>
                <Select v-model="video.player_pc" :datas="playerPc"></Select>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="手机播放器" prop="player_h5">
                <template v-slot:label>手机播放器</template>
                <Select v-model="video.player_h5" :datas="playerH5"></Select>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="评论开关" prop="comment_status">
                <template v-slot:label>评论开关</template>
                <Select v-model="video.comment_status" :datas="commentStatus"></Select>
              </FormItem>
            </Cell>
          </Row>

          <Row :space="10">
            <Cell :width="12">
              <FormItem label="SEO描述" prop="seo_description">
                <textarea v-model="video.seo_description" rows="2" placeholder="seo描述"></textarea>
              </FormItem>
            </Cell>
            <Cell :width="12">
              <FormItem label="SEO关键字" prop="seo_keywords">
                <textarea v-model="video.seo_keywords" rows="2" placeholder="seo关键字"></textarea>
              </FormItem>
            </Cell>
          </Row>

          <FormItem label="Slug" prop="slug">
            <input type="text" v-model="video.slug" placeholder="可选" />
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import AliyunVideo from '../common/video/aliyun/aliyun';
import TencentVideo from '../common/video/tencent/tencent';

export default {
  props: ['id'],
  components: {
    AliyunVideo,
    TencentVideo
  },
  data() {
    return {
      video: {
        course_id: null,
        title: '',
        slug: '',
        charge: 0,
        short_description: '',
        description: '',
        seo_keywords: '',
        seo_description: '',
        published_at: '',
        is_show: 1,
        aliyun_video_id: '',
        tencent_video_id: '',
        url: '',
        duration: 0,
        is_ban_sell: 1,
        comment_status: 2,
        ban_drag: 0,
        free_seconds: 0,
        player_pc: 'xg',
        player_h5: 'xg'
      },
      courses: [],
      chapters: [],
      tabs: ['阿里云点播', '腾讯云点播', 'URL地址'],
      tab: '阿里云点播',
      commentStatus: [
        {
          title: '禁止评论',
          key: 0
        },
        {
          title: '所有人',
          key: 1
        },
        {
          title: '仅订阅',
          key: 2
        }
      ],
      playerPc: [
        {
          title: '默认',
          key: 'xg'
        },
        {
          title: '腾讯云',
          key: 'tencent'
        },
        {
          title: '阿里云',
          key: 'aliyun'
        }
      ],
      playerH5: [
        {
          title: '默认',
          key: 'xg'
        },
        {
          title: '腾讯云',
          key: 'tencent'
        },
        {
          title: '阿里云',
          key: 'aliyun'
        }
      ],
      rules: {
        required: ['course_id', 'title', 'charge', 'published_at', 'is_show', 'is_ban_sell', 'ban_drag', 'duration']
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    tabActive() {
      if (this.video.aliyun_video_id) {
        this.tab = '阿里云点播';
      }
      if (this.video.tencent_video_id) {
        this.tab = '腾讯云点播';
      }
      if (this.video.url) {
        this.tab = 'URL地址';
      }
    },
    init() {
      R.Video.Edit({ id: this.id }).then(res => {
        this.video = res.data.video;
        this.tabActive();
        this.selectCourse({ id: this.video.course_id });
      });

      R.Video.Create().then(resp => {
        this.courses = resp.data.courses;
      });
    },
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.video.render_desc = this.video.original_desc;
        this.$emit('success', this.video);
      }
    },
    selectCourse(course) {
      R.CourseChapter.List({ course_id: course.id }).then(resp => {
        this.chapters = resp.data.chapters;
      });
    },
    switchTab(item) {
      if (this.video.aliyun_video_id || this.video.tencent_video_id || this.video.url) {
        // 禁止切换
        HeyUI.$Message.warn('如需切换视频上传方式，请先清空已上传文件或者链接');
        return;
      }
      this.tab = item;
    }
  }
};
</script>
