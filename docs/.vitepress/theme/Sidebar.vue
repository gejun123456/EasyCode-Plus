<template>
  <div>
    <!-- 广告位 -->
    <a href="https://www.example.com" target="_blank" rel="noopener" style="display:block;margin:16px;">
      <img src="https://vitejs.dev/logo.svg" alt="Sponsor or Ad" style="width:100%;border-radius:8px;box-shadow:0 2px 8px #0001;" />
    </a>
    <!-- 原有 sidebar 内容 -->
    <VPThemeSidebar v-bind="$props" />
  </div>
</template>

<script setup>
import { VPThemeSidebar } from 'vitepress/theme'
</script> 