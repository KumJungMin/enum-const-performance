## 1. 사전 조건 (파일별 조건)
파일 이름	|이넘 타입	|이넘 멤버 개수	|
---|---|---
NormalEnum.ts	|일반 enum	|39	|
ConstEnum.ts	|const enum	|39	|
colorMap.ts	as |const 객체	|39|

<br/><br/>

## 2. 성능 비교
### 1. 빌드 크기 비교 (모든 이넘 사용 가정)
> 테스트한 코드는 [여기](https://github.com/KumJungMin/enum-const-performance/tree/build-test)에 있습니다.
```
colorMap.ts (as const 방식): 866B
ConstEnum.ts (const enum): 1.51KB
NormalEnum.ts (일반 enum): 1.55KB
```

- **as const (colorMap.ts)**:
  - 단일 객체 리터럴로 직렬화되어 크기가 가장 작습니다.
  - 역매핑 로직이 없어 추가적인 코드 생성이 없습니다.
- **ConstEnum & NormalEnum**:
  - 컴파일 시 인라인 처리되지만, 인라인 처리된 코드가 많아져서 번들 크기가 증가할 수 있습니다.
- **NormalEnum**:
  - 런타임 객체와 숫자 멤버에 대한 역매핑 코드를 포함하여 크기가 가장 큽니다.
 
<br/>

### 2. 호출 시간 비교
> 테스트한 코드는 [여기](https://github.com/KumJungMin/enum-const-performance/tree/running-test)에 있습니다.
#### 2-1. 하나의 이넘값만 반복 호출 (1,000,000번 × 10회 반복)

```
NormalEnum: 0.560 ms
ConstEnum: 0.580 ms
as const: 1.160 ms
```

- **NormalEnum & ConstEnum**:
  -  컴파일 시점에 최적화되어 단순 숫자 또는 문자열 리터럴 조회로 매우 빠릅니다.
  - `const enum`은 인라인 처리로 추가 오버헤드가 없습니다.
- **as const**:
  - 객체 프로퍼티 접근으로 인해 약간의 오버헤드가 발생합니다.
  - `NormalEnum` 및 `ConstEnum`보다 약 2배 느립니다.

#### 2-2. 모든 이넘값을 반복 호출 (각 1,000,000번 × 10회 반복)

```
NormalEnum: 272.270 ms
ConstEnum: 275.590 ms
as const: 189.010 ms
```

- **NormalEnum & ConstEnum**:
  - 역매핑 및 중복 인라인 처리로 인해 오버헤드가 큽니다.
  - 단, 호출 시간 비교는 테스트 환경(JavaScript 엔진, 하드웨어 등)에 따라 달라질 수 있습니다.
- **as const**:
  - 객체 순회 방식이 역매핑보다 효율적으로 처리되어 상대적으로 빠릅니다.


<br/>

### 3. 결론
#### 3-1. 성능 및 오버헤드 요약
- **단일 이넘값 호출 시**: `NormalEnum`과 `ConstEnum`이 가장 빠릅니다.
- **모든 이넘값 호출 시**: `as const`가 가장 빠릅니다.

#### 3-2 런타임 및 최적화 측면
- **NormalEnum / ConstEnum**:
   * 단일 값 접근에 최적화되어 있습니다.
   * 전체 값 접근 시 역매핑 및 중복 인라인으로 오버헤드가 큽니다.
- **as const**:
    * 단일 값 접근 시 객체 조회 비용이 발생합니다.
    * 전체 값 접근 시 단일 객체 순회로 효율적으로 처리됩니다.
    * 타입스크립트 컴파일 타임에 타입 안전성을 보장하지만, 런타임에는 일반 JavaScript 객체와 동일하게 동작합니다.
    * Tree Shaking이 효과적으로 적용될 수 있습니다.

<br/><br/>

## 3. 최종 결론
* **번들 크기 최적화:** `as const`를 사용합니다.
* **가독성 및 유지보수:** `as const`는 객체 리터럴로 정의되어 가독성이 높고 유지보수가 용이합니다.
* **타입 안전성:** `as const`는 타입 추론을 통해 타입 안전성을 높일 수 있습니다.

