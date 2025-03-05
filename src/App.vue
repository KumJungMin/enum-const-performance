

<script lang="ts" setup>
import { NormalEnum } from './enums/NormalEnum';
import { ConstEnum } from './enums/ConstEnum';
import { colorMap } from './constants/colorMap';


console.log('NormalEnum:', NormalEnum.Blue);
console.log('ConstEnum:', ConstEnum.Blue);
console.log('as const:', colorMap.blue);
</script>


<template>
  <div>
    <h2>Enum 테스트 결과</h2>
    <p>NormalEnum: {{ NormalEnum.Blue }}</p>
    <p>ConstEnum: {{ ConstEnum.Blue }}</p>
    <p>as const: {{ colorMap.blue }}</p>
  </div>
</template>