<template>
<!--  <div class="absolute w-full p&#45;&#45;4 bg-blue rounded-md top-1/3 left-1/3" v-show="parkingPlace && Object.keys(parkingPlace).length">-->
  <div class="absolute top-1/3 right-1/3 left-1/3" style="background: white; border-radius:10px" v-if="parkingPlace && Object.keys(parkingPlace).length">
    <div>{{parkingPlace.name}}</div>
    <div @click="close()" style="float: right;"><button type="submit" name="close">close</button></div>
    <p>parkingPlacePreview</p>
    <p>{{ parkingPlace }}</p>
  </div>

</template>

<script>

export default {

  props:{
    parkingPlace:{
      type: Object,
      require: false
    }

  },

  methods:{
    close(){
      this.$emit('close')
    }
  }

}

</script>
