<template>
  <div class="container">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Avtar</th>
            </tr>
        </thead>
        <tbody >
           <tr v-for="f in info" >
               <td>{{ f.first_name }}</td>
               <td>{{ f.last_name }}</td>
               <td><img :src="f.avatar"></td>
           </tr>
        </tbody>
    </table>
    <div>
        <paginate
           :page-count="4"
           :page-range="4"
           :margin-pages="2"
           :click-handler="clickCallback"
           :prev-text="'Prev'"
           :next-text="'Next'"
           :container-class="'pagination'"
           :page-class="'page-item'">
        </paginate>
        <div>
        <select @change='chperPage()' id="select" class="box">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
       return{
        info: null,
        perPage: 3
       }
    },
    created(){
       axios.get('https://reqres.in/api/users?page=1&per_page='+this.perPage)
        .then((response)=>{this.info = response.data.data})
        .catch((err)=>{console.log(err)})
    },
    methods: {
    clickCallback :function(pageNum) {
        axios.get('https://reqres.in/api/users?page='+pageNum+'&per_page='+this.perPage)
        .then((response)=>{this.info = response.data.data})
        .catch((err)=>{console.log(err)})
    },
    chperPage(){
        this.perPage = document.getElementById('select').value
        this.clickCallback()
    }
  }
}
</script>
<style>
.box{
    width: 5%;
    height: 50%;
    padding:10px 10px 10px 10px;
}
</style>
