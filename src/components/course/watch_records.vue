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
            <Cell :width="8">
              <FormItem>
                <Button class="h-btn h-btn-primary" @click="getData(true)">搜索</Button>
                <Button class="h-btn" @click="reset()">重置</Button>
                <Button class="h-btn h-btn-primary" @click="exportExcel()">导出表格</Button>
              </FormItem>
            </Cell>
          </Row>
        </Form>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="list">
          <TableItem title="课程ID" prop="course_id" :width="120"></TableItem>
          <TableItem title="用户ID" prop="user_id" :width="120"></TableItem>
          <TableItem title="用户" :width="150">
            <template slot-scope="{ data }">
              <span v-if="typeof users[data.user_id] !== 'undefined'">{{ users[data.user_id].nick_name }}</span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem title="手机号" :width="120">
            <template slot-scope="{ data }">
              <span v-if="typeof users[data.user_id] !== 'undefined'">{{ users[data.user_id].mobile }}</span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem title="观看进度" :width="100">
            <template slot-scope="{ data }">
              <span>{{ data.progress }}%</span>
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

          <TableItem title="订阅" :width="80">
            <template slot-scope="{ data }">
              <span v-if="typeof subscribeRecords[data.user_id] !== 'undefined'">是</span>
              <span v-else class="red">否</span>
            </template>
          </TableItem>
          <TableItem title="操作" :width="100">
            <template slot-scope="{ data }">
              <p-button glass="h-btn h-btn-s h-btn-primary" permission="course.user.watch.records" text="详情" @click="showDesc(data)"></p-button>
            </template>
          </TableItem>
        </Table>
      </div>

      <div class="float-box mb-10">
        <Pagination align="right" v-model="pagination" @change="changePage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      list: [],
      users: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      loading: false,
      subscribeRecords: [],
      filter: {
        user_id: null,
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
      data.id = this.id;
      Object.assign(data, this.filter);
      R.Course.WatchRecords(data).then(res => {
        this.loading = false;

        this.list = res.data.data.data;
        this.pagination.total = res.data.data.total;

        this.users = res.data.users;
        this.subscribeRecords = res.data.subscribe_records;
      });
    },
    changePage() {
      this.getData();
    },
    showDesc(item) {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./video_watch_records'], resolve);
          },
          datas: {
            course_id: item.course_id,
            user_id: item.user_id
          }
        },
        events: {
          success: modal => {
            modal.close();
          }
        }
      });
    },
    exportExcel() {
      this.loading = true;
      R.Course.WatchRecords({
        id: this.id,
        page: 1,
        size: this.pagination.total
      }).then(res => {
        this.loading = false;
        if (res.data.data.total === 0) {
          HeyUI.$Message.warn('数据为空');
          return;
        }

        let users = res.data.users;
        let subscribeRecords = res.data.subscribe_records;

        let filename = '课程观看记录|' + Utils.currentDate() + '.xlsx';
        let sheetName = 'sheet1';

        let data = [['用户ID', '用户', '手机号', '观看进度', '开始时间', '看完时间', '是否订阅']];
        res.data.data.data.forEach(item => {
          let user = users[item.user_id];
          if (typeof user === 'undefined') {
            return;
          }

          let isSub = typeof subscribeRecords[item.user_id] === 'undefined' ? '否' : '是';

          data.push([item.user_id, user.nick_name, user.mobile, item.progress + '%', item.created_at, item.watched_at, isSub]);
        });

        Utils.exportExcel(data, filename, sheetName);
      });
    }
  }
};
</script>
