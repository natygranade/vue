<template>
  <div class="hidden md:block flex-1 w-full mb-3 min-h-0">
    <DataTable class="custom-scrollbars p-datatable p-datatable-sm nohead flex-1" :scrollable="true" scrollHeight="flex"
      :rowHover="true" columnResizeMode="fit" resizableColumns :value="credentials" responsiveLayout="scroll"
      :loading="isLoading" :rowClass="() => 'cursor-pointer'" @rowClick="rowClick" v-resize="onResize" ref="dtbl">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between p-2 h-3rem">
          <DataTableHeader :isLoading="isLoading" :isFetching="isFetching" :title="$t(`${tbase}.title`)">
            <template #button>
              <Button class="p-button" label="+ New" @click="addItem($t(`${tbase}.title`))"></Button>
            </template>
          </DataTableHeader>
        </div>
      </template>
      <template #loading>
        <DataTableLoading :isLoading="isLoading" :isFetching="isFetching"></DataTableLoading>
      </template>
      <template #empty>
        <DataTableEmpty :isLoading="isLoading" :isFetching="isFetching"></DataTableEmpty>
      </template>
      <Column field="name" :header="$t(`${tbase}.name`)" headerStyle="flex: 1 1 100%" bodyStyle="flex: 1 1 100%"
        :sortable="true">
        <template #body="slotProps">
          <div class="flex align-items-center">
            {{ slotProps.data.name }}
            <div v-if="slotProps.data.status == credentialStatus.ERROR"
              @click="editItem({ id: slotProps.data.id, entity: $t(`${tbase}.editor.title`) })"
              v-tooltip.top="$t(`${tbase}.errorAlert`)" class="ml-1">
              <i class=" thin-alert alert-error"></i>
            </div>
          </div>
        </template>
      </Column>
      <Column :sortable="true" v-for="(col, index) of columns" :field="col.field" :header="col.header" :style="col.style"
        :key="col.field + '_' + index" v-bind="col.props">
      </Column>

      <Column headerStyle="flex: 1 1 100%;max-width:70pt;" bodyStyle="flex: 1 1 100%;max-width:70pt;"
        :header="$t('Actions')">
        <template #body="slotProps">
          <Button v-tooltip.top="$t('common.edit')" icon="cyb-edit" class="p-0 p-button-rounded p-button-text"
            @click="editItem({ id: slotProps.data.id, entity: $t(`${tbase}.editor.title`) })" />
          <Button v-tooltip.top="$t('common.delete')" icon="cyb-trash" class="p-0 p-button-rounded p-button-text"
            @click="onRemoveItem(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </div>
  <div class="flex-1 mt-3 mb-3 min-h-0 mobile md:hidden">
      <MobileCards :elements="columns" elementName="name" :value="credentials" :field="columns.field" :header="columns.header" class="list">
        <template #headerActions="slotProps">
          <Button v-tooltip.top="$t('common.edit')" icon="cyb-edit" class="p-0 p-button-rounded p-button-text"
            @click="editItem(slotProps.data)" />
          <Button v-tooltip.top="$t('common.delete')" icon="cyb-trash" class="p-0 p-button-rounded p-button-text"
            @click="onRemoveItem(slotProps.data)" />
        </template>
      </MobileCards>
  </div>
</template>

<script>
import MobileCards from '@components/MobileTables/MobileCards.vue'
import DataTableHeader from '@components/DataTableUtils/DataTableHeader.vue';
import DataTableLoading from '@components/DataTableUtils/DataTableLoading.vue';
import DataTableEmpty from '@components/DataTableUtils/DataTableEmpty.vue';
import { useGetCredentials, useDeleteCredentialMutation } from "@queries/vdi/credentials";
import ConfigurationMixin from "../mixins/ConfigurationMixin";
import i18n from "@lang";
import CredentialsEditor from './editors/CredentialsEditor.vue';
import credentialStatus from "@enums/credentials/CredentialStatus.enum";
import useConfigurationCRUD from './editors/utils/useConfigurationCRUD';

const $t = i18n.global.t;
const entityName = "credentials";
const tbase = `vdi.configuration.${entityName}.editor`;

export default {
  name: "CredentialsConfiguration",
  components: { DataTableHeader, DataTableLoading, DataTableEmpty, CredentialsEditor, MobileCards  },
  mixins: [ConfigurationMixin],
  setup() {
    const { data: credentials, refetch: refresh, isLoading, isFetching } = useGetCredentials();
    const { mutateAsync: removeItemMutation } = useDeleteCredentialMutation();
    const columns = [
      {
        field: "desc",
        header: $t(`${tbase}.description`),
        style: {
          minWidth: "7rem",
          width: "50%"
        },
      },
      {
        field: "provider",
        header: $t(`${tbase}.provider`),
        style: {
          minWidth: "7rem",
          width: "25%"
        },
      }
    ];
    const { addItem, editItem } = useConfigurationCRUD({ component: CredentialsEditor });
    return { tbase, isLoading, isFetching, credentials, columns, removeItemMutation, addItem, editItem, entityName, refresh, credentialStatus }
  }
};
</script>

<style scoped>
.alert-error {
  font-size: 1.2rem;
  color: var(--red-500);
}
</style>