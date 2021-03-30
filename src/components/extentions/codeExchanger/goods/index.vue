<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">兑换商品</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Form>
          <Row :space="10">
            <Cell :width="6">
              <FormItem label="搜索">
                <input type="text" v-model="filter.goods_id" placeholder="GID" />
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="商品类型">
                <Select v-model="filter.goods_type" :datas="types" keyName="key" titleName="name"></Select>
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
        <p-button glass="h-btn h-btn-primary" permission="addons.CodeExchanger.goods.store" text="添加" @click="create()"></p-button>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :datas="datas">
          <TableItem prop="id" title="ID" :width="80"></TableItem>
          <TableItem prop="goods_id" title="商品ID" :width="80"></TableItem>
          <TableItem prop="goods_type_text" title="类型" :width="100"></TableItem>
          <TableItem prop="goods_title" title="商品"></TableItem>
          <TableItem prop="goods_charge" title="价格" unit="元" :width="80"></TableItem>
          <TableItem title="操作" align="center" :width="200">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-del-button permission="addons.CodeExchanger.goods.delete" @click="remove(datas, data)"></p-del-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="addons.CodeExchanger.goods.update"
                  text="编辑"
                  @click="edit(data)"
                ></p-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="addons.CodeExchanger.codes.list"
                  text="兑换码"
                  @click="showCodes(data)"
                ></p-button>
              </ButtonGroup>
            </template>
          </TableItem>
        </Table>
      </div>

      <div class="float-box mb-10">
        <Pagination
          class="mt-10"
          align="right"
          :size="pagination.size"
          :cur="pagination.page"
          :total="pagination.total"
          v-model="pagination"
          @change="changePage"
        />
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
      filter: {
        goods_id: null,
        goods_type: null
      },
      datas: [],
      types: [],
      loading: false
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    reset() {
      this.filter.goods_id = null;
      this.filter.goods_type = null;
      this.getData(true);
    },
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
      R.Extentions.CodeExchanger.Goods.Index(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;
        this.types = resp.data.types;
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
          success: (modal, data) => {
            modal.close();
            this.getData(true);
          }
        }
      });
    },
    remove(data, item) {
      R.Extentions.CodeExchanger.Goods.Delete({ id: item.id }).then(resp => {
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
          success: (modal, data) => {
            modal.close();
            this.getData();
          }
        }
      });
    },
    showCodes(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./codes'], resolve);
          },
          datas: {
            gid: item.id
          }
        }
      });
    }
  }
};
</script>
