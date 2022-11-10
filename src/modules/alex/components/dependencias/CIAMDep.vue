<template>
    <v-container class="mt-16">
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section>
                    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
            <th class="text-left">
                logo
            </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
        <v-img 
                        height="150"
                        width="150"
                        class="mx-auto mt-3 "
                        :src= "require('@/assets/alex/MaryHernandezP.jpg')"
                        ></v-img>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
    export default{
        name:'CIAMDep',
        data () {
      return {
        desserts: [
          {
            image: "",
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
    }
</script>
<style scoped>
   
</style>