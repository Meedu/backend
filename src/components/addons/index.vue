<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">插件</span>
    </div>
    <div class="h-panel-body">
      <div style="margin-bottom: 10px">
        <Tabs :datas="tabs" v-model="tab"></Tabs>
      </div>

      <div v-if="tab === 'local'">
        <Table :loading="loading" :datas="local">
          <TableItem prop="name" title="插件名"></TableItem>
          <TableItem prop="version" title="当前版本"></TableItem>
          <TableItem title="启用" align="center">
            <template slot-scope="{ data }">
              <h-switch v-model="data.enabled" :small="true" @change="switchHandler(data)"></h-switch>
            </template>
          </TableItem>
          <TableItem title="操作" align="center" :width="80">
            <template slot-scope="{ data }">
              <a v-if="data.enabled && typeof data.index_url !== 'undefined' && data.index_url" :href="data.index_url + '?token=' + token">配置</a>
            </template>
          </TableItem>
        </Table>
      </div>

      <div v-if="tab === 'repository'">
        <div style="margin-bottom: 10px">
          <p>
            <button @click="refresh()">刷新</button>
            meedu.vip账号：{{ user.name || '登录出错' }} | 账户余额：{{ user.balance / 100 }}元
            <a href="https://meedu.vip" target="_blank" style="color: orange; font-weight: 800">充值</a>
            <a href="https://www.yuque.com/meedu/yr7rek/adc5ca" target="_blank" style="color: red">无法使用？查看配置教程</a>
          </p>
        </div>
        <Table :loading="loading" :datas="repository">
          <TableItem title="插件">
            <template slot-scope="{ data }">
              <a :href="'https://meedu.vip/addons/' + data.id + '/' + data.sign" target="_blank">
                {{ data.name }}
                <span class="h-tag h-tag-red" v-if="data.is_buy">已购买</span>
              </a>
            </template>
          </TableItem>
          <TableItem prop="version" title="版本"></TableItem>
          <TableItem title="价格">
            <template slot-scope="{ data }">
              <span>￥{{ data.charge / 100 }}</span>
            </template>
          </TableItem>
          <TableItem title="操作" align="center">
            <template slot-scope="{ data }">
              <div v-if="data.is_buy">
                <Poptip v-if="data.is_install === false" content="确认安装？" @confirm="install(data)">
                  <button>安装</button>
                </Poptip>
                <span v-else>已安装</span>
                <Poptip v-if="data.is_upgrade" content="确认升级？" @confirm="upgrade(data)">
                  <button>可升级(当前：{{ data.local_version }})</button>
                </Poptip>
              </div>
            </template>
          </TableItem>
        </Table>

        <div class="mt-10">
          <Pagination align="right" v-model="repositoryPaginate" @change="changePage" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      local: [],
      repository: [],
      loading: false,
      token: '',
      tabs: {
        repository: '插件商城',
        local: '已安装'
      },
      tab: 'repository',
      repositoryPaginate: {
        page: 1,
        size: 100,
        total: 0
      },
      user: {
        name: '',
        balance: ''
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.token = Utils.getLocal('token');
      this.refresh();
    },
    refresh() {
      this.getRepository();
      this.getLocal();
      this.getUser();
    },
    getLocal() {
      this.loading = true;
      R.Addons.index().then(resp => {
        this.local = resp.data;
        this.loading = false;
      });
    },
    getUser() {
      this.loading = true;
      R.Addons.user().then(resp => {
        this.user = resp.data;
        this.loading = false;
      });
    },
    getRepository() {
      this.loading = true;
      R.Addons.repository(this.repositoryPaginate).then(resp => {
        this.repository = resp.data.data;
        this.repositoryPaginate.total = resp.data.total;
        this.loading = false;
      });
    },
    changePage() {
      this.getRepository();
    },
    buy(item) {
      this.loading = true;
      R.Addons.buy({ addons_id: item.id, addons_sign: item.sign }).then(res => {
        HeyUI.$Message.success('购买成功');
        this.refresh();
      });
    },
    install(item) {
      this.loading = true;
      R.Addons.install({ addons_id: item.id, addons_sign: item.sign }).then(res => {
        HeyUI.$Message.success('安装成功');
        this.refresh();
      });
    },
    upgrade(item) {
      this.loading = true;
      R.Addons.upgrade({ addons_id: item.id, addons_sign: item.sign }).then(res => {
        HeyUI.$Message.success('升级成功');
        this.refresh();
      });
    },
    switchHandler(item) {
      let action = '';
      if (item.enabled) {
        action = 'enabled';
      } else {
        action = 'disabled';
      }
      this.loading = true;
      R.Addons.switchHandler({
        action: action,
        sign: item.sign
      }).then(resp => {
        this.getLocal();
      });
    }
  }
};
</script>
