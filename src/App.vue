

<script lang="ts" setup>
import { benchmarkEnum } from './utils/benchmark';
import { getNormalEnumValue } from './enums/NormalEnum';
import { getConstEnumValue } from './enums/ConstEnum';
import { getAsConstValue } from './constants/colorMap';


const normalTime = benchmarkEnum(getNormalEnumValue);
const constTime = benchmarkEnum(getConstEnumValue);
const asConstTime = benchmarkEnum(getAsConstValue);

console.log('NormalEnum time:', normalTime);
console.log('ConstEnum time:', constTime);
console.log('as const time:', asConstTime);
</script>


<template>
  <div>
    <h2>Enum 테스트 결과</h2>
    <p>NormalEnum: {{ NormalEnum.Blue }}</p>
    <p>ConstEnum: {{ ConstEnum.Blue }}</p>
    <p>as const: {{ colorMap.blue }}</p>
  </div>
</template>