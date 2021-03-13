<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">详细记录</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">关闭</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="data">
          <TableItem title="视频" prop="video_title"></TableItem>
          <TableItem title="时长" :width="150">
            <template slot-scope="{ data }">
              <duration-text :seconds="data.duration"></duration-text>
            </template>
          </TableItem>
          <TableItem title="已观看" :width="150">
            <template slot-scope="{ data }">
              <duration-text :seconds="data.watch_seconds"></duration-text>
            </template>
          </TableItem>
          <TableItem title="进度" :width="200">
            <template slot-scope="{ data }">
              <span v-if="data.watched_at" class="red">{{ data.watched_at }}</span>
              <span v-else>未看完</span>
            </template>
          </TableItem>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import DurationText from '@/components/common/duration-text';

export default {
  props: ['course_id', 'user_id'],
  components: {
    DurationText
  },
  data() {
    return {
      loading: false,
      data: []
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    getData() {
      this.loading = true;
      R.Course.VideoWatchRecords(this.course_id, this.user_id).then(res => {
        this.loading = false;
        this.data = res.data.data;
      });
    }
  }
};
</script>
