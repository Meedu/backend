<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">编辑</span>
      <div class="h-panel-right">
        <Button color="primary" @click="create">保存</Button>
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="goods">
        <Row :space="10">
          <Cell :width="24">
            <FormItem prop="title" label="商品名">
              <input type="text" v-model="goods.title" />
            </FormItem>
          </Cell>
          <Cell :width="24">
            <FormItem prop="thumb" label="商品封面">
              <image-upload v-model="goods.thumb" name="商品封面"></image-upload>
            </FormItem>
          </Cell>
          <Cell :width="12">
            <FormItem prop="charge" label="商品价格(积分)">
              <input type="number" v-model="goods.charge" />
            </FormItem>
          </Cell>
          <Cell :width="12">
            <FormItem prop="stock_count" label="商品库存">
              <input type="number" v-model="goods.stock_count" />
            </FormItem>
          </Cell>
          <Cell :width="24">
            <FormItem prop="desc" label="详细介绍">
              <tinymce-editor v-model="goods.desc"></tinymce-editor>
            </FormItem>
          </Cell>
        </Row>

        <Row :space="10">
          <Cell :width="24">
            <FormItem label="显示" prop="is_show">
              <h-switch v-model="goods.is_show" :trueValue="1" :falseValue="0"></h-switch>
            </FormItem>
          </Cell>
        </Row>
      </Form>
    </div>
  </div>
</template>
<script>
import TinymceEditor from '@/components/common/tinymce';

export default {
  props: ['id'],
  components: { TinymceEditor },
  data() {
    return {
      goods: {
        title: null,
        thumb: null,
        desc: null,
        charge: null,
        stock_count: null,
        is_v: null,
        v_type: null,
        v_id: null,
        is_show: 1
      },
      rules: {
        required: ['title', 'thumb', 'desc', 'charge', 'stock_count']
      },
      types: [
        {
          name: '实物',
          key: 0
        },
        {
          name: '虚拟',
          key: 1
        }
      ]
    };
  },
  mounted() {
      this.detail();
  },
  methods: {
    detail() {
      R.Extentions.Credit1Mall.Goods.Edit({ id: this.id }).then(resp => {
        this.goods = resp.data;
      });
    },
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        R.Extentions.Credit1Mall.Goods.Update(this.goods).then(() => {
          HeyUI.$Message.success('成功');
          this.$emit('success');
        });
      }
    }
  }
};
</script>
