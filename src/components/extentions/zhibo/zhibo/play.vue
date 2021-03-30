<style lang="less" scoped>
.w-400 {
  width: 400px;
}
</style>
<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">直播</span>
      <div class="h-panel-right">
        <Button @click="$emit('success')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10" v-if="showFrom">
        <Form>
          <FormItem label="服务商">
            <Select v-model="service" :datas="services" keyName="id" titleName="title"></Select>
          </FormItem>
          <FormItem>
            <button class="h-btn h-btn-primary" @click="create()">开始直播</button>
          </FormItem>
        </Form>
      </div>

      <Loading text="Loading" :loading="loading"></Loading>

      <template v-if="push_url">
        <div class="float-box mb-10">
          <div class="h-input-group mb-10 w-400">
            <span class="h-input-addon">推流地址</span>
            <input type="text" v-model="push_url" />
            <Button color="primary" @click="$Clipboard({ text: push_url })">复制</Button>
          </div>
          <div class="h-input-group mb-10 w-400">
            <span class="h-input-addon">OBS服务器</span>
            <input type="text" v-model="obs.server" />
            <Button color="primary" @click="$Clipboard({ text: obs.server })">复制</Button>
          </div>
          <div class="h-input-group mb-10 w-400">
            <span class="h-input-addon">OBS串流密钥</span>
            <input type="text" v-model="obs.token" />
            <Button color="primary" @click="$Clipboard({ text: obs.token })">复制</Button>
          </div>
          <div class="h-input-group mb-10">
            <p-button glass="h-btn h-btn-primary" permission="addons.Zhibo.zhibo.stop" text="结束直播" v-if="push_url" @click="stop()"></p-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ['video_id'],
  data() {
    return {
      loading: false,
      push_url: '',
      showFrom: false,
      service: '',
      services: [
        {
          title: '腾讯云直播',
          id: 'tencent'
        },
        {
          title: '阿里云直播',
          id: 'aliyun'
        }
      ],
      obs: {
        server: '',
        token: ''
      }
    };
  },
  mounted() {
    this.loading = true;
    R.Extentions.zhibo.CourseVideo.Edit({ id: this.video_id }).then(res => {
      this.loading = false;

      this.service = res.data.service;

      if (this.service.length > 0) {
        this.create();
      } else {
        this.showFrom = true;
      }
    });
  },
  methods: {
    create() {
      if (!this.service) {
        HeyUI.$Message.warn('请选择直播服务商');
        return;
      }

      this.showFrom = false;
      this.loading = true;

      R.Extentions.zhibo.Zhibo.getParams({ video_id: this.video_id, service: this.service }).then(res => {
        this.push_url = res.data.push_url;

        let obs = this.push_url.split('/');
        for (let i = 0; i < obs.length; i++) {
          if (i === obs.length - 1) {
            this.obs.token = obs[i];
          } else {
            this.obs.server = this.obs.server + obs[i] + '/';
          }
        }

        this.loading = false;
      });
    },
    stop() {
      R.Extentions.zhibo.Zhibo.stop({ video_id: this.video_id, service: this.service }).then(res => {
        HeyUI.$Message.success('成功');

        this.$emit('success');
      });
    }
  }
};
</script>
