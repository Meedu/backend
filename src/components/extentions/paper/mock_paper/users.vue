<style lang="less" scoped>
.banner {
  text-align: center;

  .title {
    width: 100%;
    height: auto;
    float: left;
    font-size: 15px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.5);
  }

  .value {
    width: 100%;
    height: auto;
    float: left;
    font-size: 22px;
    font-weight: 600;
    line-height: 44px;
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">参与用户</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Row :space="10">
          <Cell :width="24">
            <textarea style="width: 100%" v-model="mobiles" placeholder="一行一个手机号"></textarea>
          </Cell>
          <Cell :width="24">
            <p-button glass="h-btn h-btn-primary" permission="addons.Paper.paper.users.add" text="添加用户" @click="userAdd()"></p-button>
          </Cell>
        </Row>
      </div>
      <div class="float-box mb-10">
        <Table ref="table" :loading="loading" :datas="datas">
          <TableItem title="用户ID" prop="user_id" :width="120"></TableItem>
          <TableItem title="用户" :width="120">
            <template slot-scope="{ data }">
              <span v-if="typeof users[data.user_id] === 'undefined'" class="red">已删除</span>
              <span v-else>{{ users[data.user_id].nick_name }}</span>
            </template>
          </TableItem>
          <TableItem title="及格" :width="80">
            <template slot-scope="{ data }">
              <span v-if="data.score >= passScore">是</span>
              <span v-else class="red">不及格</span>
            </template>
          </TableItem>
          <TableItem title="操作" align="center" :width="150">
            <template slot-scope="{ data }">
              <p-del-button permission="addons.Paper.paper.users.delete" @click="remove(data)"></p-del-button>
            </template>
          </TableItem>
        </Table>
      </div>

      <div class="float-box mb-10">
        <Pagination class="mt-10" align="right" v-model="pagination" @change="changePage" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      datas: [],
      loading: false,
      mobiles: '',
      users: [],
      passScore: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    changePage() {
      this.getData();
    },
    getData() {
      this.loading = true;
      let data = {
        id: this.id
      };
      Object.assign(data, this.pagination);
      R.Extentions.paper.MockPaper.Users(data).then(resp => {
        this.datas = resp.data.data;
        this.pagination.total = resp.data.total;

        this.loading = false;
        this.passScore = resp.data.pass_score;
        this.users = resp.data.users;
      });
    },
    userAdd() {
      if (this.mobiles.length === 0) {
        this.$Message.error('请输入用户手机号');
        return;
      }
      let mobiles = this.mobiles.trim().split('\n');
      if (mobiles.length === 0) {
        this.$Message.error('请输入用户手机号');
        return;
      }
      R.Extentions.paper.MockPaper.AddUser({ mobiles: mobiles, id: this.id }).then(() => {
        HeyUI.$Message.success('添加成功');
        this.mobiles = '';
        this.getData(true);
      });
    },
    remove(item) {
      R.Extentions.paper.MockPaper.DelUser({ id: this.id, user_id: item.user_id }).then(() => {
        HeyUI.$Message.success('成功');
        this.getData(true);
      });
    }
  }
};
</script>
