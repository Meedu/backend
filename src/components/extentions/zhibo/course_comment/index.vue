<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">课程评论</span>
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
            <Cell :width="12">
              <FormItem label="课程">
                <Select v-model="filter.course_id" :filterable="true" :datas="courses" keyName="id" titleName="title"></Select>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem>
                <Button color="primary" @click="getData(true)">搜索</Button>
                <Button class="h-btn" @click="reset">重置</Button>
              </FormItem>
            </Cell>
          </Row>
        </Form>
      </div>

      <div class="float-box mb-10">
        <ButtonGroup>
          <p-del-button permission="addons.Zhibo.course_comment.delete.multi" @click="deleteSubmit()"></p-del-button>
          <p-del-button permission="addons.Zhibo.course_comment.check" text="审核通过" @click="checkSubmit(1)"></p-del-button>
          <p-del-button permission="addons.Zhibo.course_comment.check" text="审核拒绝" @click="checkSubmit(0)"></p-del-button>
        </ButtonGroup>
      </div>

      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas" :checkbox="true" ref="table">
          <TableItem prop="id" title="ID" :width="100"></TableItem>
          <TableItem prop="user_id" title="用户ID" :width="100"></TableItem>
          <TableItem title="用户" :width="120">
            <template slot-scope="{ data }">
              <span v-if="data.user">{{ data.user.nick_name }}</span>
              <span class="red" v-else>不存在</span>
            </template>
          </TableItem>
          <TableItem title="课程" :width="300">
            <template slot-scope="{ data }">
              <span v-if="data.course">{{ data.course.title }}</span>
              <span class="red" v-else>已删除</span>
            </template>
          </TableItem>
          <TableItem title="状态" :width="80">
            <template slot-scope="{ data }">
              <span v-if="data.is_check === 1">通过</span>
              <span class="red" v-else>拒绝</span>
            </template>
          </TableItem>
          <TableItem prop="created_at" title="时间" :width="160"></TableItem>
          <TableItem title="内容" :width="300">
            <template slot-scope="{ data }">
              <p v-html="data.content"></p>
            </template>
          </TableItem>
          <TableItem title="回复" :width="300">
            <template slot-scope="{ data }">
              <p v-html="data.reply_content"></p>
              <a href="javascript:void(0)" @click="showReplyWin(data)">回复</a>
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
      datas: [],
      loading: false,
      filter: {
        course_id: null,
        user_id: null
      },
      courses: [],
      users: []
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    changePage() {
      this.getData();
    },
    getData(reload = false) {
      if (reload) {
        this.pagination.page = 1;
      }
      this.loading = true;
      let data = this.pagination;
      Object.assign(data, this.filter);
      R.Extentions.zhibo.CourseComment.List(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;
        this.courses = resp.data.courses;
        this.loading = false;
      });
    },
    reset() {
      this.filter = {
        course_id: null,
        user_id: null
      };
      this.getData(true);
    },
    checkSubmit(status) {
      let items = this.$refs.table.getSelection();
      if (items.length === 0) {
        this.$Message.error('请选择需要操作的评论');
        return;
      }
      this.loading = true;
      let ids = [];
      for (let i = 0; i < items.length; i++) {
        ids.push(items[i].id);
      }
      R.Extentions.zhibo.CourseComment.Check({ ids: ids, status: status }).then(resp => {
        HeyUI.$Message.success('成功');
        this.getData();
      });
    },
    deleteSubmit() {
      let items = this.$refs.table.getSelection();
      if (items.length === 0) {
        this.$Message.error('请选择需要删除的评论');
        return;
      }
      this.loading = true;
      let ids = [];
      for (let i = 0; i < items.length; i++) {
        ids.push(items[i].id);
      }
      R.Extentions.zhibo.CourseComment.Delete({ ids: ids }).then(resp => {
        HeyUI.$Message.success('成功');
        this.getData();
      });
    },
    showReplyWin(item) {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./reply'], resolve);
          },
          datas: {
            id: item.id,
            reply_content: item.reply_content
          }
        },
        events: {
          success: modal => {
            modal.close();
            this.getData(true);
          }
        }
      });
    }
  }
};
</script>
