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
        <TableItem title="开始时间" :width="200">
          <template slot-scope="{ data }">
            {{ data.created_at }}
          </template>
        </TableItem>
        <TableItem title="看完的时间" :width="200">
          <template slot-scope="{ data }">
            {{ data.watched_at }}
          </template>
        </TableItem>
        <TableItem title="看完" :width="100">
          <template slot-scope="{ data }">
            <span v-if="data.is_watched" class="red">是</span>
            <span v-else>否</span>
          </template>
        </TableItem>
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

      R.Member.History(data).then(res => {
        this.list = res.data.data.data;
        this.pagination.total = res.data.data.total;

        this.courseMap = res.data.courses;

        this.loading = false;
      });
    }
  }
};
</script>