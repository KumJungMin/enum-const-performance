

<script lang="ts" setup>
import { getNormalEnumValues, getNormalColorMapValue } from './enums/NormalEnum';
import { getConstEnumValues, getConstColorMapValue } from './enums/ConstEnum';
import { getColorMapValues, getColorMapValue } from './constants/colorMap';
import { measureEnumPerformance } from './utils/benchmark';

/* 하나의 이넘값을 각 1000000번 호출하는 걸 10번 반복했을 때 */
// measureEnumPerformance(getNormalColorMapValue, 1_000_000, 10, "enum");
// measureEnumPerformance(getConstColorMapValue, 1_000_000, 10, "const enum");
// measureEnumPerformance(getColorMapValue, 1_000_000, 10, "as const");


/* 모든 이넘값을 각 1000000번 호출하는 걸 10번 반복했을 때 */
// measureEnumPerformance(getNormalEnumValues, 1_000_000, 10, "enum");
// measureEnumPerformance(getConstEnumValues, 1_000_000, 10, "const enum");
// measureEnumPerformance(getColorMapValues, 1_000_000, 10, "as const");

</script>


<template>
  <div></div>
</template>