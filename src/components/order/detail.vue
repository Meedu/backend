<style lang="less" scoped>
.order-info {
  line-height: 44px;
}
.mb-10 {
  margin-bottom: 10px;
}
</style>
<template>
  <div class="h-panel w-1000">
    <div class="h-panel-bar">
      <span class="h-panel-title">订单</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <div class="float-box mb-10">
        <h3>基本信息</h3>
      </div>
      <div class="float-box mb-10" v-if="user">
        <Row :space="10" class="order-info mb-10">
          <Cell :width="6">UID：{{ user.id }}</Cell>
          <Cell :width="6">用户：{{ user.nick_name }}</Cell>
          <Cell :width="6">订单ID：{{ order.id }}</Cell>
          <Cell :width="6">订单号：{{ order.order_id }}</Cell>
          <Cell :width="6">总额：￥{{ order.charge }}</Cell>
          <Cell :width="6">状态：{{ order.status_text }}</Cell>
          <Cell :width="6">支付渠道：{{ order.payment_text }}</Cell>
          <Cell :width="6">支付方法：{{ order.payment_method }}</Cell>
          <Cell :width="6">时间：{{ order.created_at }}</Cell>
        </Row>
      </div>
      <div class="float-box mb-10 mt-10">
        <h3>订单商品</h3>
      </div>
      <div class="float-box mb-10" v-if="order">
        <Table :datas="order.goods" :stripe="true" class="mb-10">
          <TableItem prop="id" title="ID" :width="100"></TableItem>
          <TableItem prop="goods_id" title="商品ID" :width="100"></TableItem>
          <TableItem title="商品">
            <template slot-scope="{ data }">
              <span>[{{ data.goods_text }}]{{ data.goods_name }}</span>
            </template>
          </TableItem>
          <TableItem title="价格" :width="200">
            <template slot-scope="{ data }">
              <span>￥{{ data.charge }}/￥{{ data.goods_charge }}</span>
            </template>
          </TableItem>
          <TableItem prop="num" title="数量" :width="100"></TableItem>
        </Table>
      </div>
      <div class="float-box mb-10 mt-10">
        <h3>支付记录</h3>
      </div>
      <div class="float-box mb-10" v-if="order">
        <Table :datas="order.paid_records" :stripe="true" class="mb-10">
          <TableItem prop="id" title="ID" :width="100"></TableItem>
          <TableItem prop="paid_type_text" title="支付渠道" :width="150"></TableItem>
          <TableItem title="支付金额" :width="100">
            <template slot-scope="{ data }">
              <span>￥{{ data.paid_total }}</span>
            </template>
          </TableItem>
          <TableItem prop="paid_type_id" title="渠道ID" :width="150"></TableItem>
        </Table>
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
      user: null
    };
  },
  mounted() {
    R.Order.Detail({ id: this.id }).then(res => {
      this.order = res.data.order;
      this.user = res.data.user;
    });
  }
};
</script>
