<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">讲师</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <p-button glass="h-btn h-btn-primary" icon="h-icon-plus" permission="addons.Zhibo.teacher.store" text="添加" @click="create()"></p-button>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas">
          <TableItem prop="id" title="TID" :width="120"></TableItem>
          <TableItem prop="name" title="姓名" :width="200"></TableItem>
          <TableItem prop="courses_count" title="课程" unit="个" :width="100"></TableItem>
          <TableItem title="账号">
            <template slot-scope="{ data }">
              <copytext :copytext="data.username" />
              <span class="grey">/</span>
              <copytext :copytext="data.password" />
            </template>
          </TableItem>
          <TableItem title="操作" align="center" :width="200">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-del-button permission="addons.Zhibo.teacher.delete" @click="remove(datas, data)"></p-del-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="addons.Zhibo.teacher.update" text="编辑" @click="edit(data)"></p-button>
              </ButtonGroup>
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
export default {
  data() {
    return {
      datas: [],
      pagination: {
        page: 1,
        size: 10,
        total: 0,
        keywords: ''
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
        this.pagination.keywords = '';
      }
      this.loading = true;
      R.Extentions.zhibo.Teacher.List(this.pagination).then(resp => {
        this.datas = resp.data.data;
        this.pagination.total = resp.data.total;
        this.loading = false;
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
            R.Extentions.zhibo.Teacher.Store(data).then(resp => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData(true);
            });
          }
        }
      });
    },
    remove(data, item) {
      R.Extentions.zhibo.Teacher.Delete({ id: item.id }).then(resp => {
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
            R.Extentions.zhibo.Teacher.Update(data).then(resp => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData();
            });
          }
        }
      });
    }
  }
};
</script>
