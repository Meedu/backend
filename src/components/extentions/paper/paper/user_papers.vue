<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">考试记录</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Form>
          <Row>
            <Cell :width="6">
              <FormItem label="用户ID">
                <input type="number" v-model="filter.user_id" placeholder="用户id" />
              </FormItem>
            </Cell>
            <Cell :width="8">
              <FormItem label="状态">
                <Select v-model="filter.status" :datas="statusMap" keyName="id" titleName="text"></Select>
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem>
                <Button color="primary" @click="getData(true)">过滤</Button>
                <Button @click="resetFilter()">重置</Button>
              </FormItem>
            </Cell>
          </Row>
        </Form>
      </div>
      <div class="float-box mb-10">
        <Table ref="table" :loading="loading" :datas="datas">
          <TableItem title="ID" prop="id" :width="100"></TableItem>
          <TableItem title="用户ID" prop="user_id" :width="100"></TableItem>
          <TableItem title="用户" :width="150">
            <template slot-scope="{ data }">
              <span v-if="data.user">{{ data.user.nick_name }}</span>
              <span v-else class="red">不存在</span>
            </template>
          </TableItem>
          <TableItem title="得分" :width="100">
            <template slot-scope="{ data }">
              <span v-if="data.status === 2">{{ data.score }}分</span>
              <span v-else class="red">未完成</span>
            </template>
          </TableItem>
          <TableItem title="用时" :width="100">
            <template slot-scope="{ data }">
              <span v-if="data.status === 2"><duration-text :seconds="data.used_seconds" /></span>
              <span v-else class="red">未完成</span>
            </template>
          </TableItem>
          <TableItem title="状态" :width="100">
            <template slot-scope="{ data }">
              <span>{{ data.status_text }}</span>
            </template>
          </TableItem>
          <TableItem title="操作" align="center" :width="100">
            <template slot-scope="{ data }">
              <p-button
                v-if="data.status === 3"
                glass="h-btn h-btn-s h-btn-yellow"
                permission="addons.Paper.paper.userPaper.submit"
                text="阅卷"
                @click="showScore(data)"
              ></p-button>
              <p-a
                permission="addons.Paper.paper.userPaper.render"
                :url="'/backend/addons/Paper/paper/' + data.paper_id + '/userPaper/' + data.id + '/render'"
                text="查看"
              ></p-a>
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
import DurationText from '@/components/common/duration-text';

export default {
  components: {
    DurationText
  },
  props: ['paper_id'],
  data() {
    return {
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      datas: [],
      loading: false,
      statusMap: [],
      filter: {
        status: -1,
        user_id: null
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    changePage() {
      this.getData();
    },
    resetFilter() {
      this.filter = {
        status: -1,
        user_id: null
      };
      this.getData(true);
    },
    getData(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.loading = true;
      let data = this.pagination;
      data.id = this.paper_id;
      Object.assign(data, this.filter);
      R.Extentions.paper.Paper.UserPapers(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;
        this.loading = false;
        this.statusMap = resp.data.statusMap;
      });
    },
    showScore(item) {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./score'], resolve);
          },
          datas: {
            paper_id: item.paper_id,
            user_paper_id: item.id
          }
        },
        events: {
          success: modal => {
            modal.close();
            this.getData();
          }
        }
      });
    },
    showRender(item) {}
  }
};
</script>
