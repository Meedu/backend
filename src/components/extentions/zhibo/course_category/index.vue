<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">直播课程分类</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="mb-10">
        <p-button
          glass="h-btn h-btn-primary"
          icon="h-icon-plus"
          permission="addons.Zhibo.course_category.store"
          text="添加"
          @click="create()"
        ></p-button>
      </div>
      <Table :loading="loading" :datas="datas">
        <TableItem prop="id" title="ID" :width="100"></TableItem>
        <TableItem prop="sort" title="升序" :width="100"></TableItem>
        <TableItem prop="name" title="分类名"></TableItem>
        <TableItem prop="courses_count" title="课程" unit="个" :width="100"></TableItem>
        <TableItem title="操作" align="center" :width="200">
          <template slot-scope="{ data }">
            <ButtonGroup>
              <p-del-button permission="addons.Zhibo.course_category.delete" @click="remove(datas, data)"></p-del-button>
              <p-button
                glass="h-btn h-btn-s h-btn-primary"
                permission="addons.Zhibo.course_category.update"
                text="编辑"
                @click="edit(data)"
              ></p-button>
            </ButtonGroup>
          </template>
        </TableItem>
      </Table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [],
      loading: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getData();
    },
    changePage() {
      this.getData();
    },
    getData() {
      this.loading = true;
      R.Extentions.zhibo.CourseCategory.List(this.pagination).then(resp => {
        this.datas = resp.data;
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
            R.Extentions.zhibo.CourseCategory.Store(data).then(resp => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData(true);
            });
          }
        }
      });
    },
    remove(data, item) {
      R.Extentions.zhibo.CourseCategory.Delete({ id: item.id }).then(resp => {
        HeyUI.$Message.success('成功');
        this.getData(true);
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
            R.Extentions.zhibo.CourseCategory.Update(data).then(resp => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData(true);
            });
          }
        }
      });
    }
  }
};
</script>
