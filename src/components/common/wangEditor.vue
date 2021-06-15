<template>
  <div :id="editorId"></div>
</template>
<script>
import E from 'wangeditor';

export default {
  name: 'Editorbar',
  data() {
    return {
      editor: null,
      info_: null
    };
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 200
    }
  },
  mounted() {
    this.seteditor();
  },
  computed: {
    editorId() {
      return 'editor-' + Utils.uuid();
    }
  },
  watch: {
    value() {
      this.editor.txt.html(this.value);
    }
  },
  methods: {
    seteditor() {
      const editor = new E('#' + this.editorId);

      editor.config.zIndex = 1;
      editor.config.height = this.height;
      editor.config.placeholder = '请输入内容';
      editor.config.uploadImgShowBase64 = false; // base 64 存储图片
      editor.config.uploadImgServer = '/backend/api/v1/upload/image/tinymce'; // 配置服务器端地址
      editor.config.uploadImgHeaders = {
        Authorization: 'Bearer ' + Utils.getLocal('token')
      }; // 自定义 header
      editor.config.uploadFileName = 'file'; // 后端接受上传文件的参数名
      editor.config.uploadImgMaxSize = 5 * 1024 * 1024; // 将图片大小限制为 2M
      editor.config.uploadImgMaxLength = 1; // 限制一次最多上传 3 张图片
      editor.config.uploadImgTimeout = 60 * 1000; // 设置超时时间

      // 配置菜单
      editor.config.menus = [
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'link', // 插入链接
        'justify', // 对齐方式
        'quote', // 引用
        'image', // 插入图片
        'video', // 插入iframe
        'table', // 表格
        'code' // 插入代码
      ];

      editor.config.uploadImgHooks = {
        customInsert: (insertImg, result) => {
          var url = result.location;
          insertImg(url);
        }
      };
      editor.config.onchange = html => {
        this.info_ = html;
        this.$emit('change', this.info_);
      };
      editor.create();

      editor.txt.html(this.value);

      this.editor = editor;
    }
  }
};
</script>
