<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">课程</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Form>
          <Row :space="10">
            <Cell :width="4">
              <FormItem label="课程ID">
                <input type="text" v-model="cond.id" placeholder="课程ID" />
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="搜索">
                <input type="text" v-model="cond.keywords" placeholder="课程标题" />
              </FormItem>
            </Cell>
            <Cell :width="8">
              <FormItem label="分类">
                <template v-slot:label>分类</template>
                <Select v-model="cond.cid" :filterable="true" :datas="categories" keyName="id" titleName="name"></Select>
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
        <p-button glass="h-btn h-btn-primary" permission="course.store" text="添加" @click="create()"></p-button>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas" @sort="sortEvt">
          <TableItem prop="id" title="课程ID" :sort="true" :width="120"></TableItem>
          <TableItem prop="title" title="课程" :width="500"></TableItem>
          <TableItem prop="charge" title="价格" unit="元" :sort="true" :width="120"></TableItem>
          <TableItem title="订阅人数" :sort="true" :width="120">
            <template slot-scope="{ data }">
              <span class="pointer blue" @click="showSubscribesPage(data)">{{ data.user_count }}人</span>
            </template>
          </TableItem>
          <TableItem title="操作" align="center" :width="400">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-del-button permission="course.destroy" @click="remove(datas, data)"></p-del-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="course.edit" text="编辑" @click="edit(data)"></p-button>
              </ButtonGroup>

              <ButtonGroup>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="course_chapter" text="章节" @click="goChapter(data)"></p-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="video" text="视频" @click="goVideo(data)"></p-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="course_attach" text="附件" @click="goCourseAttach(data)"></p-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="course.watchRecords"
                  text="观看记录"
                  @click="showWatchRecords(data)"
                ></p-button>
              </ButtonGroup>
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
  data() {
    return {
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      cond: {
        keywords: '',
        cid: null,
        sort: 'created_at',
        order: 'desc',
        id: null
      },
      datas: [],
      loading: false,
      categories: []
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    changePage() {
      this.getData();
    },
    sortEvt(sort) {
      this.cond.sort = sort.prop;
      this.cond.order = sort.type;
      this.getData();
    },
    reset() {
      this.cond.keywords = null;
      this.cond.cid = null;
      this.cond.id = null;
      this.getData(true);
    },
    getData(reload = false) {
      if (reload) {
        this.pagination.page = 1;
      }
      this.loading = true;
      let cond = Object.assign(this.cond, this.pagination);
      R.Course.List(cond).then(resp => {
        this.datas = resp.data.courses.data;
        this.pagination.total = resp.data.courses.total;
        this.loading = false;
        this.categories = resp.data.categories;
      });
    },
    create() {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./create'], resolve);
          }
        },
        events: {
          success: (modal, data) => {
            modal.close();
            this.getData(true);
          }
        }
      });
    },
    remove(data, item) {
      R.Course.Delete({ id: item.id }).then(resp => {
        HeyUI.$Message.success('成功');
        this.getData();
      });
    },
    edit(item) {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./edit'], resolve);
          },
          datas: {
            id: item.id
          }
        },
        events: {
          success: (modal, data) => {
            modal.close();
            this.getData();
          }
        }
      });
    },
    goChapter(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./chapter/index'], resolve);
          },
          datas: {
            cid: item.id
          }
        }
      });
    },
    goVideo(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['../video/index'], resolve);
          },
          datas: {
            cid: item.id
          }
        }
      });
    },
    goCourseAttach(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./attach/index'], resolve);
          },
          datas: {
            cid: item.id
          }
        }
      });
    },
    showWatchRecords(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./watch_records'], resolve);
          },
          datas: {
            id: item.id
          }
        }
      });
    },
    showSubscribesPage(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./subscribe/index'], resolve);
          },
          datas: {
            id: item.id
          }
        }
      });
    }
  }
};
</script>
