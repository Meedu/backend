<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">发货</span>
      <div class="h-panel-right">
        <Button color="primary" @click="send">确认操作</Button>
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Row :space="10">
        <Cell :width="6"> 收货人：{{ order.user_contact_name }} </Cell>
        <Cell :width="6"> 收货电话：{{ order.user_contact_mobile }} </Cell>
        <Cell :width="12"> 收货地址：{{ order.user_contact_address }} </Cell>
        <Cell :width="24">
          <p-button glass="h-btn h-btn-s h-btn-primary" permission="addons.credit1Mall.orders.update" text="编辑收货信息" @click="edit()"></p-button>
        </Cell>
      </Row>
      <div style="width: 400px; margin-top: 15px">
        <Row :space="10">
          <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="form">
            <Row :space="10">
              <Cell :width="24">
                <FormItem prop="status" label="状态">
                  <Select v-model="form.status" :datas="statusRows" keyName="key" titleName="name"></Select>
                </FormItem>
              </Cell>
              <Cell :width="24">
                <FormItem prop="remark" label="备注">
                  <input type="text" v-model="form.remark" />
                </FormItem>
              </Cell>
            </Row>
          </Form>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      order: null,
      form: {
        status: null,
        remark: null
      },
      statusRows: [
        {
          name: '退回本单',
          key: 3
        },
        {
          name: '已发货',
          key: 5
        }
      ]
    };
  },
  mounted() {
    this.detail();
  },
  methods: {
    detail() {
      R.Extentions.Credit1Mall.Order.Edit(this.id).then(resp => {
        this.order = resp.data;
        this.form.remark = resp.data.remark;
      });
    },
    send() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        R.Extentions.Credit1Mall.Order.Send(this.id, this.form).then(() => {
          HeyUI.$Message.success('成功');
          this.$emit('success');
        });
      }
    },
    edit() {
      this.$Modal({
        closeOnMask: false,
        hasCloseIcon: true,
        component: {
          vue: resolve => {
            require(['./edit'], resolve);
          },
          datas: {
            id: this.id
          }
        },
        events: {
          success: modal => {
            modal.close();
            this.detail();
          }
        }
      });
    }
  }
};
</script>
