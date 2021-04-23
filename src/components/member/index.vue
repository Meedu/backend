<style lang="less" scoped>
.tag-item {
  padding: 3px 5px;
  background-color: @primary-color;
  color: white;
  border-radius: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
}
.grey {
  color: rgba(0, 0, 0, 0.2);
}
</style>
<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">全部用户</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Form>
          <Row :space="10">
            <Cell :width="6">
              <FormItem label="搜索">
                <input type="text" v-model="cond.keywords" placeholder="用户昵称/手机号" />
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="会员">
                <Select v-model="cond.role_id" :filterable="true" :datas="roles" keyName="id" titleName="name"></Select>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="标签">
                <Select v-model="cond.tag_id" :filterable="true" :datas="tags" keyName="id" titleName="name"></Select>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem>
                <Button color="primary" @click="getData(true)">搜索</Button>
                <Button @click="reset">重置</Button>
              </FormItem>
            </Cell>
          </Row>
        </Form>
      </div>
      <div class="float-box mb-10">
        <p-button glass="h-btn h-btn-primary" permission="member.store" text="添加" @click="create()"></p-button>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas" @sort="sortEvt">
          <TableItem title="用户ID" prop="id" :sort="true" :width="120"></TableItem>
          <TableItem title="昵称" prop="nick_name" :width="120"></TableItem>
          <TableItem title="手机号" prop="mobile" :width="120"></TableItem>
          <TableItem title="注册时间" prop="created_at" :sort="true" :width="200"></TableItem>
          <TableItem title="积分" prop="credit1" :sort="true" :width="100"></TableItem>
          <TableItem title="VIP" :width="150">
            <template slot-scope="{ data }">
              <template v-if="data.role">{{ data.role.name }}</template>
            </template>
          </TableItem>
          <TableItem title="标签" :width="200">
            <template slot-scope="{ data }">
              <span class="tag-item" v-for="tag in data.tags" :key="tag.id">
                <copytext :copytext="tag.name" />
              </span>
            </template>
          </TableItem>
          <TableItem title="备注" :width="200">
            <template slot-scope="{ data }">
              <template v-if="typeof userRemarks[data.id] !== 'undefined'">
                <div v-html="userRemarks[data.id].remark"></div>
              </template>
            </template>
          </TableItem>
          <TableItem title="操作" align="center" :width="300" fixed="right">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="member.detail" text="详情" @click="detail(data)"></p-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="member.edit" text="编辑" @click="edit(data)"></p-button>
              </ButtonGroup>

              <ButtonGroup>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="member.tags" text="标签" @click="showTags(data)"></p-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="member.remark" text="备注" @click="showRemark(data)"></p-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="member.message.send"
                  text="发消息"
                  @click="showSendMessage(data)"
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
        role_id: null,
        sort: 'created_at',
        order: 'desc',
        tag_id: null
      },
      datas: [],
      loading: false,
      roles: [],
      tags: [],
      userRemarks: []
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    changePage() {
      this.getData();
    },
    reset() {
      this.cond.keywords = '';
      this.cond.role_id = null;
      this.cond.tag_id = null;
      this.getData(true);
    },
    sortEvt(sort) {
      this.cond.sort = sort.prop;
      this.cond.order = sort.type;
      this.getData();
    },
    getData(reload = false) {
      if (reload) {
        this.pagination.page = 1;
      }
      this.loading = true;
      let data = this.pagination;
      Object.assign(data, this.cond);
      R.Member.List(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;
        this.loading = false;
        this.roles = resp.data.roles;
        this.tags = resp.data.tags;
        this.userRemarks = resp.data.user_remarks;
      });
    },
    create() {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./create'], resolve);
          }
        },
        events: {
          success: (modal, data) => {
            R.Member.Store(data).then(resp => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData(true);
            });
          }
        }
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
            id: item.id
          }
        },
        events: {
          success: (modal, data) => {
            R.Member.Update(data).then(resp => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData();
            });
          }
        }
      });
    },
    detail(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./detail'], resolve);
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
    showTags(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./tags'], resolve);
          },
          datas: {
            id: item.id,
            tags: item.tags
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
    showRemark(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./remark'], resolve);
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
    showSendMessage(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./send_message'], resolve);
          },
          datas: {
            id: item.id
          }
        },
        events: {
          success: modal => {
            modal.close();
          }
        }
      });
    }
  }
};
</script>
