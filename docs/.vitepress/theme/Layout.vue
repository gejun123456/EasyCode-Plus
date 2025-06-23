<template>
  <VPLayout>
    <template #sidebar-nav-before>
        <a
        v-if="isZh"
        href="https://brucege.com/doc"
        target="_blank"
        rel="noopener"
        style="display:block;margin:8px 0 12px 0;text-align:center;"
      >
        <div style="background:#222;display:inline-block;padding:12px 8px;border-radius:12px;">
          <img src="https://images.brucege.com/mybatisCodeHelperPro.svg" alt="Sponsor or Ad" style="width:200px;max-width:100%;border-radius:8px;box-shadow:0 2px 8px #0001;background:#222;" />
        </div>
      </a>
    </template>
  </VPLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'
const { Layout: VPLayout } = DefaultTheme
const { page } = useData()
// 只在 /zh/ 路径下显示广告
const isZh = computed(() => page.value.relativePath.startsWith('zh/'))
</script>