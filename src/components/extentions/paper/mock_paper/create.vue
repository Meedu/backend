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
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="paper">
        <Row :space="10">
          <Cell :width="18">
            <FormItem label="标题" prop="title">
              <input type="text" v-model="paper.title" placeholder="试卷标题" />
            </FormItem>
          </Cell>

          <Cell :width="6">
            <FormItem label="分类" prop="category_id">
              <Select v-model="paper.category_id" :datas="categories" keyName="id" titleName="name" :filterable="true"></Select>
            </FormItem>
          </Cell>

          <Cell :width="6">
            <FormItem label="分数" prop="score">
              <input type="number" v-model="paper.score" placeholder="分数" />
            </FormItem>
          </Cell>

          <Cell :width="6">
            <FormItem label="及格分" prop="pass_score">
              <input type="number" v-model="paper.pass_score" placeholder="及格分" />
            </FormItem>
          </Cell>

          <Cell :width="6">
            <FormItem label="时间" prop="expired_minutes">
              <input type="number" v-model="paper.expired_minutes" min="0" placeholder="单位：分钟" />
            </FormItem>
          </Cell>
        </Row>

        <Row :space="10">
          <Cell :width="24">
            <FormItem label="仅邀请" prop="is_invite">
              <h-switch v-model="paper.is_invite" :trueValue="1" :falseValue="0"></h-switch>
              <br />
              <warn text="只有在后台添加的用户才可以参与考试。该使用场景如：老师指定的一批学生科参与考试。"></warn>
            </FormItem>
          </Cell>
        </Row>

        <template v-if="paper.is_invite === 0">
          <Row :space="10">
            <Cell :width="12">
              <FormItem label="价格" prop="charge">
                <input type="number" v-model="paper.charge" />
                <warn text="价格大于0的话用户可以购买此试卷参与考试，价格为0的话则为免费"></warn>
              </FormItem>
            </Cell>
            <Cell :width="24" v-if="paper.charge > 0">
              <FormItem label="VIP免费" prop="is_vip_free">
                <h-switch v-model="paper.is_vip_free" :trueValue="1" :falseValue="0"></h-switch>
              </FormItem>
            </Cell>
          </Row>
        </template>

        <Row :space="10">
          <Cell :width="24">
            <FormItem label="随机试题分类范围">
              <Select v-model="randomRules.category_ids" :datas="questionCategories" keyName="id" titleName="name" :multiple="true"></Select>
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="单选题数量">
              <input type="number" v-model="randomRules.num.choice" min="0" placeholder="单选题数量" />
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="多选题数量">
              <input type="number" v-model="randomRules.num.select" min="0" placeholder="多选题数量" />
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="填空题数量">
              <input type="number" v-model="randomRules.num.input" min="0" placeholder="填空题数量" />
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="问答题数量">
              <input type="number" v-model="randomRules.num.qa" min="0" placeholder="问答题数量" />
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="判断题数量">
              <input type="number" v-model="randomRules.num.judge" min="0" placeholder="判断题数量" />
            </FormItem>
          </Cell>
          <Cell :width="4">
            <FormItem label="题帽题数量">
              <input type="number" v-model="randomRules.num.cap" min="0" placeholder="题帽数量" />
            </FormItem>
          </Cell>
        </Row>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paper: {
        category_id: null,
        title: null,
        thumb: null,
        pass_score: null,
        expired_minutes: null,
        is_vip_free: 0,
        charge: 0,
        rule: null,
        is_invite: 0
      },
      rules: {
        required: ['category_id', 'title', 'score', 'pass_score', 'expired_minutes', 'is_vip_free', 'charge']
      },
      categories: [],
      questionCategories: [],
      randomRules: {
        category_ids: [],
        num: {
          choice: 0,
          select: 0,
          input: 0,
          qa: 0,
          judge: 0,
          cap: 0
        }
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      R.Extentions.paper.MockPaper.Create().then(res => {
        this.categories = res.data.categories;
        this.questionCategories = res.data.question_categories;
      });
    },
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        let data = this.paper;
        data.rule = JSON.stringify(this.randomRules);
        R.Extentions.paper.MockPaper.Store(data).then(() => {
          HeyUI.$Message.success('添加成功');
          this.$emit('success');
        });
      }
    }
  }
};
</script>
