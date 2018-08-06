<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        searchFn: mySearchFn,
        placeholder: 'Search this table',
        externalQuery: searchQuery
      }">
</vue-good-table>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Product name',
          field: 'Product name',
        },
        {
          label: 'Support Color',
          field: 'Support Color',
        },
        {
          label: 'Width',
          field: 'Width',
          type: 'number',
        },
        {
          label: 'Depth',
          field: 'Depth',
          type: 'number',
        },
        {
          label: 'Height',
          field: 'Height',
          type: 'number',
        },
        {
          label: 'Motherboard Support',
          field: 'Motherboard Support',
        },
      ],
      rows: [
        
      ],
    };
  },
};
</script>