<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">兑换码</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box">
        <Form>
          <Row :space="10">
            <Cell :width="12">
              <FormItem label="搜索">
                <input type="text" v-model="filter.code" placeholder="兑换码" />
              </FormItem>
            </Cell>
            <Cell :width="6">
              <FormItem label="UID">
                <user-filter v-model="filter.user_id"></user-filter>
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
      <div class="float-box mt-10">
        <ButtonGroup>
          <p-del-button permission="addons.CodeExchanger.codes.delete.multi" @click="deleteSubmit()"></p-del-button>
          <p-button
            glass="h-btn h-btn-primary h-btn-s"
            permission="addons.CodeExchanger.codes.generate"
            text="生成10个"
            @click="showGeneratePage(10)"
          ></p-button>
          <p-button
            glass="h-btn h-btn-primary h-btn-s"
            permission="addons.CodeExchanger.codes.generate"
            text="生成50个"
            @click="showGeneratePage(50)"
          ></p-button>
          <p-button
            glass="h-btn h-btn-primary h-btn-s"
            permission="addons.CodeExchanger.codes.export"
            text="导出未使用兑换码"
            @click="exportData()"
          ></p-button>
        </ButtonGroup>
      </div>
      <div class="float-box mt-10">
        <Table :loading="loading" :datas="datas" :checkbox="true" ref="table">
          <TableItem prop="id" title="ID" :width="80"></TableItem>
          <TableItem title="兑换码">
            <template slot-scope="{ data }">
              <copytext :copytext="data.code" />
            </template>
          </TableItem>
          <TableItem title="使用" :width="300">
            <template slot-scope="{ data }">
              <span v-if="data.is_used === 1" class="red">
                <span v-if="data.user">{{ data.user.nick_name }}</span>
                <span>/</span>
                <span>{{ data.used_at }}</span>
              </span>
              <span v-else>否</span>
            </template>
          </TableItem>
        </Table>
      </div>
      <div class="float-box mt-10 mb-10">
        <Pagination v-if="pagination.total > 0" align="right" v-model="pagination" @change="changePage" />
      </div>
    </div>
  </div>
</template>
<script>
import XLSX from 'xlsx';

export default {
  props: ['gid'],
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
        code: null,
        user_id: null
      }
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    reset() {
      this.filter.code = null;
      this.filter.user_id = null;
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
      data.gid = this.gid;
      Object.assign(data, this.filter);
      R.Extentions.CodeExchanger.Codes.Index(data).then(resp => {
        this.datas = resp.data.data.data;
        this.pagination.total = resp.data.data.total;
        this.loading = false;
      });
    },
    deleteSubmit() {
      let items = this.$refs.table.getSelection();
      if (items.length === 0) {
        this.$Message.error('请选择需要删除的数据');
        return;
      }
      this.loading = true;
      let ids = [];
      for (let i = 0; i < items.length; i++) {
        ids.push(items[i].id);
      }
      R.Extentions.CodeExchanger.Codes.DeleteMulti({ ids: ids }).then(() => {
        HeyUI.$Message.success('成功');
        this.getData();
      });
    },
    showGeneratePage(count = 10) {
      R.Extentions.CodeExchanger.Codes.Generate({ gid: this.gid, count: count }).then(() => {
        HeyUI.$Message.success('成功');
        this.getData(true);
      });
    },
    exportData() {
      // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
      function sheet2blob(sheet, sheetName) {
        sheetName = sheetName || 'sheet1';
        var workbook = {
          SheetNames: [sheetName],
          Sheets: {}
        };
        workbook.Sheets[sheetName] = sheet;
        // 生成excel的配置项
        var wopts = {
          bookType: 'xlsx', // 要生成的文件类型
          bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
          type: 'binary'
        };
        var wbout = XLSX.write(workbook, wopts);
        var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        // 字符串转ArrayBuffer
        function s2ab(s) {
          var buf = new ArrayBuffer(s.length);
          var view = new Uint8Array(buf);
          for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
          return buf;
        }
        return blob;
      }

      function openDownloadDialog(url, saveName) {
        if (typeof url == 'object' && url instanceof Blob) {
          url = URL.createObjectURL(url); // 创建blob地址
        }
        var aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        var event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
          event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        aLink.dispatchEvent(event);
      }

      R.Extentions.CodeExchanger.Codes.Export().then(res => {
        let header = [['兑换码']];
        res.data.forEach(item => {
          header.push([item.code]);
        });
        let sheet = XLSX.utils.aoa_to_sheet(header);
        openDownloadDialog(sheet2blob(sheet), '兑换码.xlsx');
      });
    }
  }
};
</script>
