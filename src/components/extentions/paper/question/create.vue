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
      <Form mode="block" ref="form" :validOnChange="true" :showErrorTip="true" :rules="rules" :model="question">
        <Row :space="10">
          <Cell width="6">
            <FormItem label="分类" prop="category_id">
              <Select v-model="question.category_id" :datas="categories" keyName="id" titleName="name" :filterable="true"></Select>
            </FormItem>
          </Cell>
          <Cell width="6">
            <FormItem label="类型" prop="type">
              <Select v-model="question.type" :datas="types" keyName="id" titleName="name"></Select>
            </FormItem>
          </Cell>
          <Cell width="6">
            <FormItem label="难度" prop="level">
              <Select v-model="question.level" :datas="levels" keyName="id" titleName="name"></Select>
            </FormItem>
          </Cell>
          <Cell width="6">
            <FormItem label="分数" prop="score" v-if="question.type !== 6">
              <input type="text" v-model="question.score" />
            </FormItem>
          </Cell>
        </Row>

        <FormItem label="问题" prop="content" v-if="question.type !== 6">
          <wang-editor v-model="question.content"></wang-editor>
        </FormItem>

        <div class="answer-box">
          <paper-question-choice @update="contentUpdate" v-if="question.type === 1"></paper-question-choice>
          <paper-question-select @update="contentUpdate" v-else-if="question.type === 2"></paper-question-select>
          <paper-question-input @update="contentUpdate" :content="[]" :length="1" v-else-if="question.type === 3"></paper-question-input>
          <!-- <paper-question-qa @update="contentUpdate" v-else-if="question.type === 4"></paper-question-qa> -->
          <paper-question-judge @update="contentUpdate" v-else-if="question.type === 5"></paper-question-judge>
          <paper-question-cap @update="contentUpdate" v-else-if="question.type === 6"></paper-question-cap>
        </div>

        <FormItem label="解析" prop="remark">
          <wang-editor v-model="question.remark" :height="100"></wang-editor>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import WangEditor from '@/components/common/wangEditor';
import PaperQuestionCap from '../components/questions/cap';
import PaperQuestionChoice from '../components/questions/choice';
import PaperQuestionInput from '../components/questions/input';
import PaperQuestionJudge from '../components/questions/judge';
import PaperQuestionSelect from '../components/questions/select';

export default {
  components: { WangEditor, PaperQuestionCap, PaperQuestionChoice, PaperQuestionInput, PaperQuestionJudge, PaperQuestionSelect },
  data() {
    return {
      question: {
        category_id: null,
        type: null,
        level: null,
        content: null,
        answer: null,
        score: null,
        option1: null,
        option2: null,
        option3: null,
        option4: null,
        option5: null,
        option6: null,
        option7: null,
        option8: null,
        option9: null,
        option10: null,
        remark: null
      },
      rules: {
        required: ['category_id', 'type', 'level', 'content', 'score']
      },
      levels: [],
      types: [],
      categories: []
    };
  },
  mounted() {
    R.Extentions.paper.Question.Create().then(res => {
      this.levels = res.data.levels;
      this.types = res.data.types;
      this.categories = res.data.categories;
    });
  },
  methods: {
    contentUpdate(t, val, length, options) {
      if (t === 'input' || t === 'judge') {
        this.question.answer = val;
      } else if (t === 'choice') {
        this.question.answer = val;
        for (let i = 1; i <= 10; i++) {
          this.question['option' + i] = options['option' + i];
        }
      } else if (t === 'select') {
        this.question.answer = val.join(',');
        for (let i = 1; i <= 10; i++) {
          this.question['option' + i] = options['option' + i];
        }
      } else if (t === 'cap') {
        let header = val;
        let questions = length;
        // 计算分数
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
          score += parseInt(questions[i].score);
        }
        this.question.score = score;
        // 内容设置
        let content = {
          header: header,
          questions: questions
        };
        this.question.content = JSON.stringify(content);
      }
    },
    create() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        R.Extentions.paper.Question.Store(this.question).then(() => {
          HeyUI.$Message.success('成功');
          this.$emit('success');
        });
      }
    }
  }
};
</script>
