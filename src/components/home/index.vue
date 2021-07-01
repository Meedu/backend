<template>
  <Row>
    <Cell :width="24">
      <div class="table-basic-vue frame-page h-panel">
        <div class="h-panel-bar">
          <span class="h-panel-title">首页</span>
        </div>
        <div class="h-panel-body">
          <Row>
            <Cell class="text-center" :width="8">
              <h3>今日新用户注册</h3>
              <p>{{ index.today_register_user_count }}位</p>
            </Cell>
            <Cell class="text-center" :width="8">
              <h3>今日已支付订单</h3>
              <p>{{ index.today_paid_num }}单</p>
            </Cell>
            <Cell class="text-center" :width="8">
              <h3>今日已支付总额</h3>
              <p>{{ index.today_paid_sum }}元</p>
            </Cell>
          </Row>
        </div>
      </div>
    </Cell>
    <Cell :width="24">
      <div class="table-basic-vue frame-page h-panel">
        <div class="h-panel-bar">
          <span class="h-panel-title">系统信息</span>
        </div>
        <div class="h-panel-body">
          <Row>
            <Cell class="text-center" :width="6">
              <h3>MeEdu版本</h3>
              <p>{{ systemInfo.meedu_version }}</p>
            </Cell>
            <Cell class="text-center" :width="6">
              <h3>后台版本</h3>
              <p>v4.2.5</p>
            </Cell>
            <Cell class="text-center" :width="6">
              <h3>内核版本</h3>
              <p>Laravel {{ systemInfo.laravel_version }}</p>
            </Cell>
            <Cell class="text-center" :width="6">
              <h3>PHP版本</h3>
              <p>{{ systemInfo.php_version }}</p>
            </Cell>
          </Row>
        </div>
      </div>
    </Cell>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      index: {
        today_register_user_count: 0,
        today_paid_num: 0,
        today_paid_sum: 0
      },
      systemInfo: {
        meedu_version: '',
        laravel_version: '',
        php_version: ''
      }
    };
  },
  mounted() {
    this.getSystemInfo();
    this.init();
  },
  methods: {
    init() {
      R.Dashboard.index().then(resp => {
        this.index = resp.data;
      });
    },
    getSystemInfo() {
      R.Dashboard.systemInfo().then(resp => {
        this.systemInfo = resp.data;
      });
    }
  }
};
</script>
