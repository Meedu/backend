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
      <span class="h-panel-title">分数统计</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Table ref="table" :loading="loading" :datas="datas">
          <TableItem title="用户ID" prop="user_id" :width="120"></TableItem>
          <TableItem title="用户" :width="120">
            <template slot-scope="{ data }">
              <span v-if="typeof users[data.user_id] === 'undefined'" class="red">已删除</span>
              <span v-else>{{ users[data.user_id].nick_name }}</span>
            </template>
          </TableItem>
          <TableItem title="最高得分" :width="150">
            <template slot-scope="{ data }">
              <span>{{ data.get_score }}分</span>
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
      R.Extentions.paper.MockPaper.Statistics(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;

        this.loading = false;
        this.passScore = resp.data.pass_score;
        this.users = resp.data.users;
      });
    }
  }
};
</script>
