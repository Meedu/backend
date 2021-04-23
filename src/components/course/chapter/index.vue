<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">章节</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="mb-10">
        <p-button glass="h-btn h-btn-primary" permission="course_chapter.store" text="添加" @click="create()"></p-button>
      </div>
      <Table :loading="loading" :datas="datas">
        <TableItem :width="100" prop="sort" title="升序"></TableItem>
        <TableItem prop="title" title="章节"></TableItem>
        <TableItem title="操作" align="center" :width="200">
          <template slot-scope="{ data }">
            <ButtonGroup>
              <p-del-button permission="course_chapter.destroy" @click="remove(datas, data)"></p-del-button>
              <p-button glass="h-btn h-btn-s h-btn-primary" permission="course_chapter.edit" text="编辑" @click="edit(data)"></p-button>
            </ButtonGroup>
          </template>
        </TableItem>
      </Table>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cid'],
  data() {
    return {
      datas: [],
      course: {
        id: 0,
        title: ''
      },
      loading: false
    };
  },
  mounted() {
    this.course.id = this.cid;
    this.init();
  },
  methods: {
    init() {
      this.getData(true);
    },
    getData(reload = false) {
      this.loading = true;
      R.CourseChapter.List({ course_id: this.course.id }).then(resp => {
        this.loading = false;
        this.datas = resp.data.chapters;
        this.course.title = resp.data.course.title;
      });
    },
    create() {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./create'], resolve);
          },
          datas: {
            cid: this.course.id
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
      R.CourseChapter.Delete({ course_id: this.course.id, id: item.id }).then(resp => {
        HeyUI.$Message.success('成功');
        this.getData(true);
      });
    },
    edit(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./edit'], resolve);
          },
          datas: {
            id: item.id,
            cid: this.course.id
          }
        },
        events: {
          success: (modal, data) => {
            modal.close();
            this.getData();
          }
        }
      });
    }
  }
};
</script>
