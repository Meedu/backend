<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">添加</span>
      <div class="h-panel-right">
        <Button color="primary" @click="create">添加</Button>
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="flaot-box mb-10">
        <ButtonGroup>
          <p-del-button permission="video.destroy.multi" text="批量删除" @click="deleteSubmit()"></p-del-button>
          <p-button glass="h-btn h-btn-primary h-btn-s" permission="video.store" text="添加" @click="create()"></p-button>
          <p-button glass="h-btn h-btn-primary h-btn-s" permission="video.import" text="视频批量导入" @click="showVideosImport()"></p-button>

          <p-button glass="h-btn h-btn-primary h-btn-s" permission="video.aliyun_hls.list" text="阿里云HLS转码" @click="showHlsPage()"></p-button>
          <p-button
            glass="h-btn h-btn-primary h-btn-s"
            permission="addons.TencentCloudHls.videos"
            text="腾讯云HLS转码"
            @click="showTencentHlsPage()"
          ></p-button>
        </ButtonGroup>
      </div>
      <div class="float-box mb-10">
        <Table :loading="loading" :checkbox="true" :datas="datas" ref="table">
          <TableItem prop="id" title="视频ID" :width="120"></TableItem>
          <TableItem title="视频">
            <template slot-scope="{ data }">
              <span class="video-title">{{ data.title }}</span>
            </template>
          </TableItem>
          <TableItem title="价格" :width="120">
            <template slot-scope="{ data }">￥{{ data.charge }}</template>
          </TableItem>
          <TableItem title="时长" :width="120">
            <template slot-scope="{ data }">
              <duration-text :seconds="data.duration" />
            </template>
          </TableItem>
          <TableItem title="上架时间" :width="200">
            <template slot-scope="{ data }">
              {{ data.published_at }}
            </template>
          </TableItem>
          <TableItem title="操作" align="center" :width="300">
            <template slot-scope="{ data }">
              <ButtonGroup>
                <p-button glass="h-btn h-btn-s h-btn-primary" permission="video.edit" text="编辑" @click="edit(data)"></p-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="video.subscribes"
                  text="销售记录"
                  @click="showSubscribePage(data)"
                ></p-button>
                <p-button
                  glass="h-btn h-btn-s h-btn-primary"
                  permission="video.watch.records"
                  text="用户观看"
                  @click="showWatchRecords(data)"
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
import DurationText from '@/components/common/duration-text';

export default {
  props: ['cid'],
  components: {
    DurationText
  },
  data() {
    return {
      pagination: {
        page: 1,
        size: 10,
        total: 0
      },
      datas: [],
      loading: false,
      courses: []
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
      if (this.loading) {
        return;
      }

      this.loading = true;

      if (reload) {
        this.pagination.page = 1;
      }

      let data = { cid: this.cid };
      Object.assign(data, this.pagination);

      R.Video.List(data).then(resp => {
        this.datas = resp.data.videos.data;
        this.pagination.total = resp.data.videos.total;
        this.courses = resp.data.courses;

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
          },
          datas: {
            cid: this.cid
          }
        },
        events: {
          success: (modal, data) => {
            R.Video.Store(data).then(() => {
              modal.close();
              HeyUI.$Message.success('成功');

              this.getData(true);
            });
          }
        }
      });
    },
    deleteSubmit() {
      let items = this.$refs.table.getSelection();
      if (items.length === 0) {
        this.$Message.error('请选择需要删除的视频');
        return;
      }
      let ids = [];
      for (let i = 0; i < items.length; i++) {
        ids.push(items[i].id);
      }
      R.Video.MultiDelete({ ids: ids }).then(() => {
        HeyUI.$Message.success('成功');
        this.getData();
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
            R.Video.Update(data).then(() => {
              modal.close();
              HeyUI.$Message.success('成功');
              this.getData();
            });
          }
        }
      });
    },
    showHlsPage() {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['../extentions/aliyunHls/video/index'], resolve);
          }
        }
      });
    },
    showTencentHlsPage() {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['@/components/extentions/tencentCloudHls/video/index'], resolve);
          }
        }
      });
    },
    showVideosImport() {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./import'], resolve);
          }
        }
      });
    },
    showSubscribePage(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./subscribe/index'], resolve);
          },
          datas: {
            id: item.id
          }
        }
      });
    },
    showWatchRecords(item) {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./watch_records'], resolve);
          },
          datas: {
            id: item.id
          }
        }
      });
    }
  }
};
</script>
