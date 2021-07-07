<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">积分订单</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas">
          <TableItem prop="id" title="ID" :width="100"></TableItem>
          <TableItem title="用户" :width="150">
            <template slot-scope="{ data }">
              <span v-if="data.user">{{ data.user.nick_name }}</span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem prop="goods_title" title="积分商品" :width="500"></TableItem>
          <TableItem prop="total_charge" title="积分" :width="120"></TableItem>
          <TableItem title="发货" :width="100">
            <template slot-scope="{ data }">
              <span v-if="data.is_send">已发货</span>
              <span v-else class="red">未发货</span>
            </template>
          </TableItem>
          <TableItem title="状态" :width="100">
            <template slot-scope="{ data }">
              <span v-if="data.status === 0">已提交</span>
              <span v-else-if="data.status === 3" class="red">已取消</span>
              <span v-else class="blue">已完成</span>
            </template>
          </TableItem>
          <TableItem prop="remark" title="备注" :width="300"></TableItem>
          <TableItem title="操作" align="center" :width="300" fixed="right">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="addons.credit1Mall.orders.send" text="发货" @click="send(data)"></p-button>
              </ButtonGroup>
            </template>
          </TableItem>
        </Table>
      </div>

      <div class="float-box mb-10">
        <Pagination class="mt-10" align="right" :size="pagination.size" :cur="pagination.page" :total="pagination.total" @change="changePage" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      datas: [],
      loading: false
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    changePage(pagination) {
      this.pagination.page = pagination.cur;
      this.pagination.size = pagination.size;
      this.getData();
    },
    getData(reload = false) {
      if (reload) {
        this.pagination.page = 1;
      }
      this.loading = true;
      R.Extentions.Credit1Mall.Order.Index(this.pagination).then(resp => {
        this.datas = resp.data.data;
        this.pagination.total = resp.data.total;
        this.loading = false;
      });
    },
    send(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./send'], resolve);
          },
          datas: {
            id: item.id
          }
        },
        events: {
          success: modal => {
            modal.close();
            this.getData();
          }
        }
      });
    }
  }
};
</script>
