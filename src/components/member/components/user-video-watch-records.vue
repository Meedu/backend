<template>
  <div>
    <div class="float-box mb-10">
      <Table :datas="list" :loading="loading">
        <TableItem title="视频">
          <template slot-scope="{ data }">
            <span v-if="videoMap[data.video_id]">{{ videoMap[data.video_id].title }}</span>
            <span class="red" v-else>已删除</span>
          </template>
        </TableItem>
        <TableItem title="已观看时长">
          <template slot-scope="{ data }">
            <duration-text :seconds="data.watch_seconds" />
          </template>
        </TableItem>
        <TableItem title="看完时间" prop="watched_at" :width="200"></TableItem>
      </Table>
    </div>

    <div class="float-box mb-10">
      <Pagination align="right" v-model="pagination" @change="pageChange" />
    </div>
  </div>
</template>

<script>
import DurationText from '@/components/common/duration-text';

export default {
  components: {
    DurationText
  },
  props: ['id'],
  data() {
    return {
      list: [],
      videoMap: [],
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

      R.Member.VideoWatchRecords(data).then(res => {
        this.list = res.data.data.data;
        this.pagination.total = res.data.data.total;

        this.videoMap = res.data.videos;

        this.loading = false;
      });
    }
  }
};
</script>