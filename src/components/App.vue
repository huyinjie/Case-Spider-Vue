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
        {
        "Product name": "U1 PLUS",
        "Support Color": "银色,黑色",
        "Width": 170,
        "Depth": 220,
        "Height": 302,
        "Material": "Main body: 4.0MM thick aluminum magnesium alloy; side plate: 5MM toughened glass.",
        "Motherboard Support": "  MINI-ITX",
        "Drive Bays": "2*2.5〞",
        "Front I/O": "USB3.0*2 ,  Headphone*1 , Mic*1"
    },
    {
        "Product name": "U4",
        "Support Color": "银色,黑色,蓝色,金色,粉色,红色,白色",
        "Width": 205,
        "Depth": 340,
        "Height": 428,
        "Material": "The main body of U is 2.0MM Al Mg alloy, and the right plate / rear window / side hard disk is made of 1.5MM aluminum magnesium alloy, and the left plate is fully toughened glass with 5.0MM, and the thickness of the internal metal plate is 1.0MMSGCC steel plate.",
        "Motherboard Support": "  ITX / M-ATX / ATX （305*245MM Maximum）  ",
        "Drive Bays": "1*3.5 \"+ 3*2.5\" or 2*3.5 \"+ 2*2.5\"",
        "Front I/O": "USB3.0*2 ,   Headphone*1 , Mic*1"
    },
      ],
    };
  },
};
</script>