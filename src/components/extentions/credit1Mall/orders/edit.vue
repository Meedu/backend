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
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="form">
        <Row :space="10">
          <Cell :width="24">
            <FormItem prop="user_contact_name" label="收货人">
              <input type="text" v-model="form.user_contact_name" />
            </FormItem>
          </Cell>
          <Cell :width="24">
            <FormItem prop="user_contact_mobile" label="收货电话">
              <input type="text" v-model="form.user_contact_mobile" />
            </FormItem>
          </Cell>
          <Cell :width="24">
            <FormItem prop="user_contact_address" label="收货地址">
              <input type="text" v-model="form.user_contact_address" />
            </FormItem>
          </Cell>
        </Row>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      form: {
        user_contact_name: null,
        user_contact_mobile: null,
        user_contact_address: null
      },
      rules: {
        required: ['user_contact_name', 'user_contact_mobile', 'user_contact_mobile']
      }
    };
  },
  mounted() {
    this.detail();
  },
  methods: {
    detail() {
      R.Extentions.Credit1Mall.Order.Edit(this.id).then(resp => {
        let data = resp.data;
        this.form.user_contact_name = data.user_contact_name;
        this.form.user_contact_mobile = data.user_contact_mobile;
        this.form.user_contact_address = data.user_contact_address;
      });
    },
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        R.Extentions.Credit1Mall.Order.Update(this.id, this.form).then(() => {
          HeyUI.$Message.success('成功');
          this.$emit('success');
        });
      }
    }
  }
};
</script>
