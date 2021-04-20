<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">编辑</span>
      <div class="h-panel-right">
        <Button color="primary" @click="update">保存</Button>
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :labelWidth="110" :rules="rules" :model="user">
        <Row :space="10">
          <Cell :width="24">
            <FormItem label="头像" prop="avatar">
              <image-upload v-model="user.avatar" name="选择头像" help="建议尺寸：100x100"></image-upload>
            </FormItem>
          </Cell>

          <Cell :width="6">
            <FormItem label="昵称" prop="nick_name">
              <input type="text" v-model="user.nick_name" />
            </FormItem>
          </Cell>
          <Cell :width="6">
            <FormItem label="手机号" prop="mobile">
              <input type="text" v-model="user.mobile" />
            </FormItem>
          </Cell>
          <Cell :width="6">
            <FormItem label="密码" prop="password">
              <input type="text" v-model="user.password" />
              <warn text="不修改密码请不要填写"></warn>
            </FormItem>
          </Cell>
        </Row>
        <Row :space="10">
          <Cell :width="3">
            <FormItem label="激活" prop="is_active">
              <h-switch v-model="user.is_active" :trueValue="1" :falseValue="-1"></h-switch>
            </FormItem>
          </Cell>
          <Cell :width="3">
            <FormItem label="锁定" prop="is_lock">
              <h-switch v-model="user.is_lock" :trueValue="1" :falseValue="-1"></h-switch>
            </FormItem>
          </Cell>
        </Row>
        <Row :space="10">
          <Cell :width="6">
            <FormItem label="VIP" prop="role_id">
              <Select v-model="user.role_id" :datas="roles" keyName="id" titleName="name" :filterable="true"></Select>
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="会员到期时间" prop="role_expired_at">
              <DatePicker v-model="user.role_expired_at" v-width="200" type="datetime"></DatePicker>
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
      user: {
        avatar: '',
        mobile: '',
        nick_name: '',
        password: '',
        role_id: 0,
        role_expired_at: ''
      },
      rules: {
        required: ['avatar', 'mobile', 'nick_name']
      },
      roles: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      R.Member.Edit({ id: this.id }).then(res => {
        this.user = res.data;
      });
      R.Member.Create().then(res => {
        this.roles = res.data.roles;
      });
    },
    update() {
      this.$emit('success', this.user);
    }
  }
};
</script>
