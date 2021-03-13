<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">观看记录</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Form>
          <Row :space="10">
            <Cell :width="6">
              <FormItem label="UID">
                <user-filter v-model="filter.user_id"></user-filter>
              </FormItem>
            </Cell>
            <Cell :width="10">
              <FormItem label="看完时间">
                <DateRangePicker v-model="dateRange" format="YYYY-MM-DD"></DateRangePicker>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem>
                <Button class="h-btn h-btn-primary" @click="getData(true)">搜索</Button>
                <Button class="h-btn" @click="reset()">重置</Button>
              </FormItem>
            </Cell>
          </Row>
        </Form>
      </div>

      <div class="float-box mb-10">
        <Table :loading="loading" :datas="list">
          <TableItem title="视频ID" prop="video_id" :width="80"></TableItem>
          <TableItem title="用户ID" prop="user_id" :width="80"></TableItem>
          <TableItem title="用户" :width="120">
            <template slot-scope="{ data }">
              <span v-if="typeof users[data.user_id] !== 'undefined'">{{ users[data.user_id].nick_name }}</span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem title="手机号" :width="120">
            <template slot-scope="{ data }">
              <span v-if="typeof users[data.user_id] !== 'undefined'">{{ users[data.user_id]['mobile'] }}</span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem title="视频">
            <template slot-scope="{ data }">
              <span v-if="typeof videos[data.video_id] !== 'undefined'">{{ videos[data.video_id]['title'] }}</span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem title="时长" :width="100">
            <template slot-scope="{ data }">
              <span v-if="typeof videos[data.video_id] !== 'undefined'">
                <duration-text :seconds="videos[data.video_id].duration" />
              </span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem title="已观看" :width="100">
            <template slot-scope="{ data }">
              <duration-text :seconds="data.watch_seconds" />
            </template>
          </TableItem>

          <TableItem title="开始时间" :width="120">
            <template slot-scope="{ data }">
              <date-text :date="data.created_at"></date-text>
            </template>
          </TableItem>

          <TableItem title="看完时间" :width="120">
            <template slot-scope="{ data }">
              <date-text :date="data.watched_at"></date-text>
            </template>
          </TableItem>
        </Table>
      </div>

      <div class="float-box mt-10">
        <Pagination align="right" v-model="pagination" @change="changePage" />
      </div>
    </div>
  </div>
</template>

<script>
import DurationText from '@/components/common/duration-text';

export default {
  props: ['id', 'course_id', 'user_id'],
  components: {
    DurationText
  },
  data() {
    return {
      list: [],
      videos: [],
      users: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      loading: false,
      filter: {
        course_id: this.course_id,
        user_id: this.user_id || null,
        watched_start_at: null,
        watched_end_at: null
      },
      dateRange: {}
    };
  },
  mounted() {
    this.getData(true);
  },
  watch: {
    dateRange() {
      this.filter.watched_start_at = this.dateRange.start;
      this.filter.watched_end_at = this.dateRange.end;
    }
  },
  methods: {
    reset() {
      this.filter.user_id = null;
      this.filter.watched_start_at = null;
      this.filter.watched_end_at = null;
      this.dateRange = {};
      this.getData(true);
    },
    getData(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }

      this.loading = true;
      let data = this.pagination;
      data.video_id = this.id;
      Object.assign(data, this.filter);
      R.Video.WatchRecords(data).then(res => {
        this.list = res.data.data.data;
        this.users = res.data.users;
        this.videos = res.data.videos;
        this.pagination.total = res.data.data.total;
        this.loading = false;
      });
    },
    changePage() {
      this.getData();
    }
  }
};
</script>
