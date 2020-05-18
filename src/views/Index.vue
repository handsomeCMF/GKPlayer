<template>
    <div id="app">
        <ImgInput imgpath="../assets/logo.png" title="password"></ImgInput>
        <ImgInput title="password"></ImgInput>
    </div>
</template>

<script >
import ImgInput from '@/components/ImgInput.vue'

export default {
  name: 'Index',
  data () {
    return {
      test: '123'
    }
  },
  components: {
    ImgInput
  }
}
</script>
