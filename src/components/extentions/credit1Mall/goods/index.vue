<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">积分商品</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Form>
          <Row :space="10">
            <Cell :width="6">
              <FormItem label="搜索">
                <input type="text" v-model="pagination.key" placeholder="商品名搜搜" />
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem>
                <Button color="primary" @click="getData(true)">搜索</Button>
                <Button class="h-btn" @click="reset()">重置</Button>
              </FormItem>
            </Cell>
          </Row>
        </Form>
      </div>
      <div class="float-box mb-10">
        <p-button glass="h-btn h-btn-primary" icon="h-icon-plus" permission="addons.credit1Mall.goods.store" text="添加" @click="create()"></p-button>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas">
          <TableItem prop="id" title="ID" :width="100"></TableItem>
          <TableItem prop="title" title="商品名" :width="500"></TableItem>
          <TableItem prop="charge" title="价格" :width="120"></TableItem>
          <TableItem prop="stock_count" title="库存" :width="120"></TableItem>
          <TableItem prop="sales_count" title="销量" :width="120"></TableItem>
          <TableItem title="操作" align="center" :width="300" fixed="right">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-del-button permission="addons.credit1Mall.goods.delete" @click="remove(datas, data)"></p-del-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="addons.credit1Mall.goods.update" text="编辑" @click="edit(data)"></p-button>
              </ButtonGroup>
            </template>
          </TableItem>
        </Table>
      </div>

      <div class="float-box mb-10">
        <Pagination class="mt-10" align="right" :size="pagination.size" :cur="pagination.page" :total="pagination.total" @change="changePage" />
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
        total: 0,
        key: null
      },
      datas: [],
      loading: false
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    reset() {
      this.pagination.key = null;
      this.pagination.cid = null;
      this.getData(true);
    },
    changePage(pagination) {
      this.pagination.page = pagination.cur;
      this.pagination.size = pagination.size;
      this.getData();
    },
    getData(reload = false) {
      if (reload) {
        this.pagination.page = 1;
      }
      this.loading = true;
      R.Extentions.Credit1Mall.Goods.Index(this.pagination).then(resp => {
        this.datas = resp.data.data;
        this.pagination.total = resp.data.total;
        this.loading = false;
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
          success: modal => {
            modal.close();
            this.getData();
          }
        }
      });
    },
    remove(data, item) {
      R.Extentions.Credit1Mall.Goods.Delete({ id: item.id }).then(() => {
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
            id: item.id
          }
        },
        events: {
          success: modal => {
            modal.close();
            this.getData();
          }
        }
      });
    }
  }
};
</script>
