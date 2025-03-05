export function measureEnumPerformance(
  fn: () => any,
  iterations: number = 1_000_000,
  repeatCount: number = 10,
  testLabel: string
): void {
  let totalTime = 0;

  for (let r = 0; r < repeatCount; r++) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
      fn();
    }

    const end = performance.now();
    totalTime += (end - start);
  }

  const avgTime = totalTime / repeatCount;
  console.log(
    `${testLabel} 평균 실행 시간: ${avgTime.toFixed(3)} ms (반복 ${repeatCount}회, 각 ${iterations}번 실행)`
  );
}