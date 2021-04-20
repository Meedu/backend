<template>
  <div>
    <div class="float-box mb-10">
      <Table :datas="list" :lodding="loading">
        <TableItem prop="id" title="ID"></TableItem>
        <TableItem prop="nick_name" title="昵称"></TableItem>
        <TableItem prop="mobile" title="手机号"></TableItem>
        <TableItem title="过期时间" :width="200">
          <template slot-scope="{ data }">
            {{ data.invite_user_expired_at }}
          </template>
        </TableItem>
        <TableItem title="注册时间" prop="created_at" :width="200"></TableItem>
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

      R.Member.Invite(data).then(res => {
        this.list = res.data.data.data;
        this.pagination.total = res.data.data.total;

        this.loading = false;
      });
    }
  }
};
</script>