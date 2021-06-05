<template>
  <div class="h-panel w-800">
    <div class="h-panel-bar">
      <span class="h-panel-title">用户批量导入</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <a href="https://www.yuque.com/meedu/fvvkbf/qtkixc" target="_blank">导入模板下载</a>
      </div>
      <div class="float-box mb-30">
        <Button color="primary" @click="$refs.xlsfile.click()">选择xlsx格式文件</Button>
        <div style="display: none">
          <form ref="form">
            <input type="file" ref="xlsfile" />
          </form>
        </div>
      </div>

      <Loading text="Loading" :loading="loading"></Loading>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.xlsfile.addEventListener('change', this.handleFile, false);
    });
  },
  methods: {
    handleFile(e) {
      // 处理文件
      let files = e.target.files;
      if (files.length === 0) {
        return;
      }
      let f = files[0];
      // 文件扩展名检测
      let extension = f.name.split('.');
      extension = extension[extension.length - 1];
      if (extension !== 'xlsx') {
        HeyUI.$Message.warn('请选择xlsx文件');
        return;
      }
      let reader = new FileReader();
      reader.onload = e => {
        let data = new Uint8Array(e.target.result);
        let workbook = XLSX.read(data, { type: 'array', cellDates: true });
        let parseData = this.parseData(workbook);
        parseData.splice(0, 1);
        if (parseData.length === 0) {
          HeyUI.$Message.error('数据为空');
          return;
        }

        this.loading = true;

        // 请求导入api
        this.$refs.form.reset();
        
        R.Member.Import({ users: parseData }).then(() => {
          this.loading = false;
          HeyUI.$Message.success('导入成功');
        });
      };
      reader.readAsArrayBuffer(f);
    },
    parseData(workbook) {
      let data = [];
      workbook.SheetNames.forEach(function (sheetName) {
        var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
        if (roa.length) {
          data.push(...roa);
        }
      });
      return data;
    }
  }
};
</script>
