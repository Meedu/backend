<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">练习</span>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <Form>
          <Row :space="10">
            <Cell :width="8">
              <FormItem label="分类">
                <Select v-model="filer.category_id" :datas="categories" keyName="id" titleName="name" :filterable="true"></Select>
              </FormItem>
            </Cell>
            <Cell :width="8">
              <FormItem label="搜索" prop="key">
                <input type="text" v-model="filer.key" placeholder="搜索" />
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
        <p-button glass="h-btn h-btn-primary" permission="addons.Paper.paper_category.list" text="练习分类" @click="showCategoriesPage()"></p-button>
        <p-button glass="h-btn h-btn-primary" permission="addons.Paper.practice.store" text="添加" @click="create()"></p-button>
      </div>

      <div class="float-box mb-10">
        <Table ref="table" :loading="loading" :datas="datas">
          <TableItem prop="id" title="ID" :width="100"></TableItem>
          <TableItem title="分类" :width="150">
            <template slot-scope="{ data }">
              <span v-if="data.category">{{ data.category.name }}</span>
              <span v-else class="red">已删除</span>
            </template>
          </TableItem>
          <TableItem prop="name" title="练习名" :width="500"></TableItem>
          <TableItem prop="question_count" title="题目数" unit="个" :width="100"></TableItem>
          <TableItem title="操作" align="center" :width="200">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-del-button permission="addons.Paper.paper.delete" @click="remove(data)"></p-del-button>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="addons.Paper.practice.update" text="编辑" @click="edit(data)"></p-button>
              </ButtonGroup>

              <ButtonGroup>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="addons.Paper.practice_chapter.list"
                  text="章节"
                  @click="showChaptersPage(data)"
                ></p-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="addons.Paper.practice_chapter.list"
                  text="参与用户"
                  @click="showUsers(data)"
                ></p-button>
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
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      filer: {
        category_id: null,
        key: null
      },
      datas: [],
      loading: false,
      categories: []
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    changePage() {
      this.getData(false);
    },
    resetFilter() {
      this.filer = {
        category_id: null,
        key: null
      };
      this.getData(true);
    },
    getData(reset = false) {
      if (reset) {
        this.pagination.page = 1;
      }
      this.loading = true;
      let data = this.pagination;
      Object.assign(data, this.filer);
      R.Extentions.paper.Practice.List(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;
        this.categories = resp.data.categories;

        this.loading = false;
      });
    },
    remove(item) {
      R.Extentions.paper.Practice.Delete({ ids: [item.id] }).then(resp => {
        HeyUI.$Message.success('成功');
        this.getData();
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
            modal.close();
            this.getData(true);
          }
        }
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
            modal.close();
            this.getData(false);
          }
        }
      });
    },
    showCategoriesPage() {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['../paper_category/index'], resolve);
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
    showChaptersPage(item) {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./chapter/index'], resolve);
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
    },
    showUsers(item) {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./users'], resolve);
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
