<template>
  <div>
    <h1>{{result}}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value"/>
      <button type="submit">enter</button>
    </form>
    <div>times:{{tries.length}}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
        <div>{{ t.try }}</div>
        <!--key 횟수만큼 시도횟수-->
        <div>{{t.result}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  const getNumb=()=>{
    const candidates=[1,2,3,4,5,6,7,8,9];
    const array=[];

    for(let i=0;i<4;i++){
      const chosen=candidates.splice(Math.floor(Math.random()*(9-i)),1)[0]
      array.push(chosen)
    }
    return array;
  };
  export default {
    data(){
      return{
        answer:getNumb(),
        tries:[],
        value:'',
        result:''
      }
    },
    methods:{
      onSubmitForm(){
        if(this.value===this.answer.join('')){
          this.tries.push({
            try:this.value,
            result:'correct'
          });
          this.result='correct';
          alert('reset the game');
          this.value='';
          this.answer=getNumb();
          this.tries=[];
          this.$refs.answer.focus();
        }else{
          if(this.tries.length>=9){
            this.result=`you have no chance more, answer was ${this.answer.join(',')}.`;
            alert('reset the game');
            this.value='';
            this.answer=getNumb();
            this.tries=[];
            this.$refs.answer.focus();
          }
          let strike=0;
          let ball=0;

          const answerArray=this.value.split('').map(v=>Number(v));
          for(let i=0;i<4;i++){
            if(answerArray[i]===this.answer[i]){
              strike++;
            }else if(this.answer.includes(answerArray[i])){
              ball++;
            }
          }
          this.tries.push({
            try:this.value,
            result:`${strike} strike, and ${ball}ball you are.`
          });
          this.value='';
          this.$refs.answer.focus()
        }
      }
    }
  }
</script>
<style></style>
//기존 html에 스크립트로 바로적던 Vue.component가 ~~.vue의 스크립트로 된다고 생각하면됨(webpack이용시)
