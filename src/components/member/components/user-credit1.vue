<template>
  <div>
    <div class="float-box mb-10">
      <Table :datas="list" :loading="loading">
        <TableItem prop="id" title="ID" :width="120"></TableItem>
        <TableItem prop="sum" title="积分" :width="200"></TableItem>
        <TableItem prop="remark" title="备注"></TableItem>
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
        this.pagination.page = 1;
      }

      let data = this.pagination;
      data.id = this.id;

      R.Member.Credit1Records(data).then(res => {
        this.list = res.data.data.data;
        this.pagination.total = res.data.data.total;

        this.loading = false;
      });
    }
  }
};
</script>