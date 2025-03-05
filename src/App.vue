

<script lang="ts" setup>
import { measureEnumPerformance } from './utils/benchmark';
import { getNormalEnumValue } from './enums/NormalEnum';
import { getConstEnumValue } from './enums/ConstEnum';
import { getAsConstValue } from './constants/colorMap';


const normalEnumValue = getNormalEnumValue();
const constEnumValue = getConstEnumValue();
const asConstValue = getAsConstValue();

// 각각을 측정할 때, 주석을 하나씩만 풀어서 실행!
// measureEnumPerformance(getNormalEnumValue, 1_000_000, 10, "NormalEnum");
// measureEnumPerformance(getConstEnumValue, 1_000_000, 10, "ConstEnum");
measureEnumPerformance(getAsConstValue, 1_000_000, 10, "as const");
</script>


<template>
  <div>
    <h2>Enum 테스트 결과</h2>
    <p>NormalEnum: {{ normalEnumValue }}</p>
    <p>ConstEnum: {{ constEnumValue }}</p>
    <p>as const: {{ asConstValue }}</p>
  </div>
</template>