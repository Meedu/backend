<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">章节</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <p-button
          glass="h-btn h-btn-primary"
          icon="h-icon-plus"
          permission="addons.Zhibo.course_chapter.store"
          text="添加"
          @click="create()"
        ></p-button>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas">
          <TableItem prop="id" title="ID" :width="80"></TableItem>
          <TableItem prop="sort" title="排序" :width="100"></TableItem>
          <TableItem prop="name" title="章节名"></TableItem>
          <TableItem title="操作" align="center" :width="200">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-del-button permission="addons.Zhibo.course_chapter.delete" @click="remove(datas, data)"></p-del-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="addons.Zhibo.course_chapter.update"
                  text="编辑"
                  @click="edit(data)"
                ></p-button>
              </ButtonGroup>
            </template>
          </TableItem>
        </Table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['course_id'],
  data() {
    return {
      datas: [],
      loading: false,
      course: {
        title: ''
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getData();
      R.Extentions.zhibo.Course.Edit({ id: this.course_id }).then(res => {
        this.course = res.data;
      });
    },
    getData() {
      this.loading = true;
      R.Extentions.zhibo.CourseChapter.List({ id: this.course_id }).then(resp => {
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
          },
          datas: {
            course_id: this.course_id
          }
        },
        events: {
          success: (modal, data) => {
            R.Extentions.zhibo.CourseChapter.Store(data).then(resp => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData(true);
            });
          }
        }
      });
    },
    remove(data, item) {
      R.Extentions.zhibo.CourseChapter.Delete({ id: item.id }).then(resp => {
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
            R.Extentions.zhibo.CourseChapter.Update(data).then(resp => {
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
