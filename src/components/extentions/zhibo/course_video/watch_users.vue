<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">观看用户</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Button class="h-btn h-btn-s h-btn-primary" @click="getData(true)">刷新数据</Button>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas">
          <TableItem title="用户ID" prop="user_id" :width="130"></TableItem>
          <TableItem title="用户">
            <template slot-scope="{ data }">
              <span v-if="data.user">{{ data.user.nick_name }}</span>
              <span class="c-red" v-else>已删除</span>
            </template>
          </TableItem>
          <TableItem title="观看时长" :width="150">
            <template slot-scope="{ data }">
              <duration-text :seconds="data.duration" />
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
import DurationText from '@/components/common/duration-text';

export default {
  components: {
    DurationText
  },
  props: ['course_id', 'video_id'],
  data() {
    return {
      datas: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      loading: false
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    changePage() {
      this.getData();
    },
    getData(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.loading = true;
      let data = this.pagination;
      Object.assign(data, {
        course_id: this.course_id,
        video_id: this.video_id
      });
      R.Extentions.zhibo.CourseVideo.WatchUsers(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;
        this.loading = false;
      });
    }
  }
};
</script>
