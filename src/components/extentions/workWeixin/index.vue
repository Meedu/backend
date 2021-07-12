<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">通讯录</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <p-button glass="h-btn h-btn-s h-btn-primary" permission="addons.WorkWeixin.department.update" text="更新通讯录" @click="updateContacts()"></p-button>
      </div>

      <div class="float-box mb-10">
        <Row :space="20">
          <Cell :width="6">
            <Tree :option="treeOptions" :toggleOnSelect="false" :selectOnClick="true" v-model="depId"></Tree>
          </Cell>
          <Cell :width="18">
            <Table ref="table" :loading="loading" :datas="users">
              <TableItem prop="id" title="ID" :width="120"></TableItem>
              <TableItem prop="name" title="姓名" :width="100"></TableItem>
              <TableItem prop="mobile" title="手机号" :width="150"></TableItem>
              <TableItem title="状态" :width="150">
                <template slot-scope="{ data }">
                  <span v-if="data.status === 1">已激活</span>
                  <span v-else-if="data.status === 2">已禁用</span>
                  <span v-else-if="data.status === 4">未激活</span>
                  <span v-else-if="data.status === 5">已离职</span>
                </template>
              </TableItem>
            </Table>
          </Cell>
        </Row>
      </div>

      <Loading text="Loading" :loading="loading"></Loading>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [],
      loading: false,
      treeOptions: {
        keyName: 'id',
        parentName: 'parent_id',
        titleName: 'name',
        dataMode: 'list',
        getTotalDatas: resolve => {
          R.Extentions.WorkWeixin.Department().then(resp => {
            resolve(resp.data);
          });
        }
      },
      users: [],
      depId: 0
    };
  },
  watch: {
    depId() {
      this.getUsers();
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.loading = true;
      R.Extentions.WorkWeixin.DepartmentUser({ dep_id: this.depId }).then(resp => {
        this.users = resp.data;
        this.loading = false;
      });
    },
    updateContacts() {
      this.loading = true;
      R.Extentions.WorkWeixin.DepartmentUpdate().then(() => {
        this.loading = false;
        HeyUI.$Message.success('成功');
      });
    }
  }
};
</script>
