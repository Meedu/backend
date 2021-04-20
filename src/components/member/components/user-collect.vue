<template>
  <div>
    <div class="float-box mb-10">
      <Table :datas="list" :loading="loading">
        <TableItem title="课程">
          <template slot-scope="{ data }">
            <span v-if="courseMap[data.course_id]">{{ courseMap[data.course_id].title }}</span>
            <span class="red" v-else>已删除</span>
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
      courseMap: [],
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

      R.Member.Collect(data).then(res => {
        this.list = res.data.data.data;
        this.pagination.total = res.data.data.total;

        this.courseMap = res.data.courses;

        this.loading = false;
      });
    }
  }
};
</script>