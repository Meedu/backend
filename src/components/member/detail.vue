<style lang="less" scoped>
.base-info {
  width: 100%;
  height: auto;
  float: left;
  line-height: 36px;
}
</style>
<template>
  <div class="h-panel w-1200">
    <div class="h-panel-bar">
      <span class="h-panel-title">用户详情</span>
      <div class="h-panel-right">
        <Button @click="$emit('close')" :text="true">取消</Button>
      </div>
    </div>
    <div class="h-panel-body">
      <Row class="base-info mb-10" v-if="user">
        <Cell width="6">
          ID：
          <copytext :copytext="user.id" />
        </Cell>
        <Cell width="6">
          昵称：
          <copytext :copytext="user.nick_name" />
        </Cell>
        <Cell width="6">
          手机号：
          <copytext :copytext="user.mobile" />
        </Cell>
        <Cell width="6">积分：{{ user.credit1 }}</Cell>
        <Cell width="6">
          锁定：
          <span v-if="user.is_lock === 1">是</span>
          <span v-else>否</span>
        </Cell>
        <Cell width="6">
          激活：
          <span v-if="user.is_active === 1">是</span>
          <span v-else>否</span>
        </Cell>
        <Cell width="6">
          会员：
          <span v-if="user.role">{{ user.role.name }}</span>
          <span v-else>暂无</span>
        </Cell>
        <Cell width="6">会员到期时间：{{ user.role_expired_at || '无' }}</Cell>
        <Cell width="6">
          邀请人：
          <span v-if="user.invitor">{{ user.invitor.nick_name }}</span>
          <span v-else>无</span>
        </Cell>
        <Cell width="6">邀请关系过期：{{ user.invite_user_expired_at || '无' }}</Cell>
        <Cell width="6">邀请余额：{{ user.invite_balance }}元</Cell>
        <Cell width="6">
          设置密码：
          <span v-if="user.is_password_set === 1">已设置</span>
          <span v-else>未设置</span>
        </Cell>
        <Cell width="6">
          设置昵称：
          <span v-if="user.is_set_nickname === 1">已设置</span>
          <span v-else>未设置</span>
        </Cell>
        <Cell width="6">
          用户邀请码：
          <span v-if="user.is_used_promo_code === 1">已使用</span>
          <span v-else>未使用</span>
        </Cell>
        <Cell width="6">注册IP：{{ user.register_ip || '未记录' }}</Cell>
        <Cell width="6">注册地址：{{ user.register_area || '未记录' }}</Cell>
        <template v-if="user.profile">
          <Cell width="6">真实姓名：{{ user.profile.real_name || '未记录' }}</Cell>
          <Cell width="6">年龄：{{ user.profile.age }}岁</Cell>
          <Cell width="6">生日：{{ user.profile.birthday || '未记录' }}</Cell>
          <Cell width="6">住址：{{ user.profile.address || '未记录' }}</Cell>
          <Cell width="6">性别：{{ user.profile.gender }}</Cell>
          <Cell width="6">职业：{{ user.profile.profession }}</Cell>
          <Cell width="6">毕业院校：{{ user.profile.graduated_school }}</Cell>
          <Cell width="6">身份证号：{{ user.profile.id_number }}</Cell>
          <Cell width="6" v-if="user.profile.diploma"
            >毕业证书：<br /><img :src="user.profile.diploma" width="100" height="100" @click="$ImagePreview(user.profile.diploma)"
          /></Cell>
          <Cell width="6" v-if="user.profile.id_frontend_thumb"
            >身份证正面照：<br /><img
              :src="user.profile.id_frontend_thumb"
              width="100"
              height="100"
              @click="$ImagePreview(user.profile.id_frontend_thumb)"
          /></Cell>
          <Cell width="6" v-if="user.profile.id_backend_thumb"
            >身份证反面照：<br /><img
              :src="user.profile.id_backend_thumb"
              width="100"
              height="100"
              @click="$ImagePreview(user.profile.id_backend_thumb)"
          /></Cell>
          <Cell width="6" v-if="user.profile.id_hand_thumb"
            >手持身份证照：<br /><img :src="user.profile.id_hand_thumb" width="100" height="100" @click="$ImagePreview(user.profile.id_hand_thumb)"
          /></Cell>
        </template>

        <Cell width="24" class="mt-10 mb-10">
          <p-button glass="h-btn h-btn-s h-btn-primary" permission="member.credit1.change" text="积分变动" @click="credit1Change()"></p-button>
        </Cell>
      </Row>

      <Row class="mb-10">
        <Cell width="24">
          <Tabs :datas="tabs" v-model="selectTab" @change="tabChange"></Tabs>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'collect'">
        <Cell width="24">
          <user-collect :id="id"> </user-collect>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'invite'">
        <Cell width="24">
          <user-invite :id="id"></user-invite>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'history'">
        <Cell width="24">
          <user-course-history :id="id"></user-course-history>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'courses'">
        <Cell width="24">
          <user-courses :id="id"></user-courses>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'videos'">
        <Cell width="24">
          <user-videos :id="id"></user-videos>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'roles'">
        <Cell width="24">
          <user-roles :id="id"></user-roles>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'orders'">
        <Cell width="24">
          <user-orders :id="id"></user-orders>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'credit1Records'">
        <Cell width="24">
          <user-credit1 :id="id"></user-credit1>
        </Cell>
      </Row>

      <Row v-show="selectTab === 'videoWatchRecords'">
        <Cell width="24">
          <user-video-watch-records :id="id"></user-video-watch-records>
        </Cell>
      </Row>
    </div>
  </div>
</template>
<script>
import UserCollect from './components/user-collect.vue';
import UserCourseHistory from './components/user-course-history.vue';
import UserCourses from './components/user-courses.vue';
import UserInvite from './components/user-invite.vue';
import UserRoles from './components/user-roles.vue';
import UserVideos from './components/user-videos.vue';
import UserOrders from './components/user-orders.vue';
import UserCredit1 from './components/user-credit1.vue';
import UserVideoWatchRecords from './components/user-video-watch-records.vue';

export default {
  components: {
    UserCollect,
    UserInvite,
    UserCourseHistory,
    UserCourses,
    UserVideos,
    UserRoles,
    UserOrders,
    UserCredit1,
    UserVideoWatchRecords
  },
  props: ['id'],
  data() {
    return {
      user: null,
      tabs: {
        courses: '课程订阅',
        videos: '视频订阅',
        history: '课程观看记录',
        videoWatchRecords: '视频观看记录',
        roles: '会员订阅',
        orders: 'TA的订单',
        collect: 'TA的收藏',
        invite: 'TA的邀请',
        credit1Records: '积分明细'
      },
      selectTab: 'courses'
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      R.Member.Detail({ id: this.id }).then(res => {
        this.user = res.data.data;
      });
    },
    tabChange(tab) {
      this.selectTab = tab.key;
    },
    credit1Change() {
      this.$Modal({
        hasCloseIcon: true,
        closeOnMask: false,
        component: {
          vue: resolve => {
            require(['./credit1'], resolve);
          },
          datas: {
            id: this.id
          }
        },
        events: {
          success: (modal, data) => {
            modal.close();
            R.Member.Credit1Change(data).then(() => {
              HeyUI.$Message.success('成功');
              this.getUser();
            });
          }
        }
      });
    }
  }
};
</script>
