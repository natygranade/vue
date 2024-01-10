<template>
  <div  class="mobile-cards">
    <div v-if="value.length > 0" class="mobile-card" :key="elementName.field" :header="values[elementName]" v-for="values in value">
      <div class="mobile-card-header flex justify-content-between align-items-center">
          <div class="flex">
            <slot name="headerslots" :data="values"></slot>
            <h4 class="px-2 text-base">{{ values[elementName] }}</h4>
          </div>
         
          <div class="flex header-actions">
            <slot name="headerActions" :data="values"></slot>
          </div>
      </div>
      <div class="mobile-card-content">
        <div v-for="element in elements" class="flex justify-content-between align-items-center">
          <p class="flex-1 content-header">{{ element.header }}</p>
          <p class="content-field">{{ get(values, element.field, "") }}</p>
          
        </div>
        <div class="flex justify-content-between align-items-center">
          <slot name="extraElements" :data="values"></slot>
        </div>
        <div class="flex footer-actions">
          <slot name="footerActions" :data="values"></slot>
        </div>
      </div>
    </div>
    <div v-else class="mobile-card empty">
      <p>{{ $t(`components.dataTable.empty`) }} <br> <span>{{ $t(`components.dataTable.tryFilter`) }} {{ $t(`components.dataTable.filter`) }} {{ $t(`components.dataTable.differentPeriod`) }}</span></p>
    </div>
  </div>
</template>

<script>
import { get } from 'lodash';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DataView from 'primevue/dataview';

export default {
  components: {  Accordion, AccordionTab, DataView },
  props: {
    elementName:{
      type: String,
      default: ''
    },
    elements:{
      type: Array,
      default: () => []
    },
    header:{
      type: String,
      default: ''
    },
    field:{
      type: String,
      default: ''
    },
    value:{
      type: Array,
      default: () => []
    }
  },
  setup() {
 return {
  get
 }
  }
}
</script>