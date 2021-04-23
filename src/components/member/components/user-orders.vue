<template>
  <div>
    <div class="float-box mb-10">
      <Table :datas="list" :loading="loading">
        <TableItem prop="id" title="ID" :width="150"></TableItem>
        <TableItem prop="order_id" title="订单号" :width="200"></TableItem>
        <TableItem prop="charge" title="价格" unit="元" :width="120"></TableItem>
        <TableItem title="状态" :width="100">
          <template slot-scope="{ data }">
            <span :class="{ red: data.status_text === '已支付' }">{{ data.status_text }}</span>
          </template>
        </TableItem>
        <TableItem title="商品">
          <template slot-scope="{ data }">
            <ul>
              <li v-for="goods in data.goods" :key="goods.id">{{ goods.goods_text }}</li>
            </ul>
          </template>
        </TableItem>
        <TableItem title="时间" prop="created_at" :width="200"></TableItem>
      </Table>
    </div>

    <div class="float-box mb-10">
      <Pagination align="right" v-model="pagination" @change="pageChange" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      list: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      loading: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    pageChange() {
      this.getData();
    },
    getData(reset = false) {
      if (this.loading) {
        return;
      }
      this.loading = true;

      if (reset === true) {
        this.paginate.videos.page = 1;
      }

      let data = this.pagination;
      data.id = this.id;

      R.Member.Orders(data).then(res => {
        this.list = res.data.data.data;
        this.pagination.total = res.data.data.total;

        this.loading = false;
      });
    }
  }
};
</script>