// 데이터 담기 클래스 -> 현재 미사용
class DataStructure{
  constructor( constId ){
    this.constId = constId;
    this._array = [];
  }

  pushItem( item ){
    this._array.push( item );    
  }

  get dataLength(){
    return this._array.length;
  }

  get dataArray(){
    return this._array;
  }
}

/// 인풋넘버박스 class
class OriginNumBox{
  constructor( inputName, inputNameKor, minNum, maxNum ){
    this.inputId = inputName + "Box"; /// 넘버박스 아이디
    this.inputName = inputName; /// inputName
    this.inputNameKor = inputNameKor; /// 한글표기
    this._element = null; /// DOM 객체
    this.displayElement = document.getElementById(inputName+"BoxArea"); /// 부모 DOM 객체
    this.maxNum = maxNum; /// 최대값
    this.minNum = minNum; /// 최소값
    this._value = 0; /// 밸류값
  }

  /// 박스 시각화 메소드
  visualizeNumBox(){
    let printString = "";
    printString += `<span>${this.inputNameKor}</span> <input id="${this.inputId}"type="number" name="${this.inputName}" value="${this._value}"></input>`;
    (this.displayElement).innerHTML = printString;

    /// 시각화된 객체자신의 DOM 요소 가져오기
    this._element = document.getElementById(this.inputId);
    //console.log(this);
  }
  changeValue(){
    this._element.addEventListener("change", (e)=>{
      ///console.log(e.target.value);

      /// 각 인풋의 입력 범위
      if( parseInt(e.target.value) < this.minNum ){
        e.target.value = String( this.minNum );
      }else if( parseInt(e.target.value) > this.maxNum ){
        e.target.value = String( this.maxNum );
      }else if(/\./.test(e.target.value)){
        e.target.value = String( Math.floor( parseFloat( e.target.value ) ) );
      }else if( e.target.value === '' ){
        e.target.value = '0';
      }

      this._value = parseInt( e.target.value );

      this.visualizeNumBox();
      console.log(this);
      this.changeValue();
    });
  }

  get value(){
    return this._value;
  }
  set value( inputValue){
    this._value = inputValue;
  }
}

/********** 변수 선언 **********************/
/// 인풋 넘버박스 객체
const inputCelesiusDataBox = new OriginNumBox( "celesiusData", "현재기온", -40, 50 ); /// 현재기온값 입력박스
const inputMaximumTemperatureDataBox = new OriginNumBox("maximumTemperatureData", "최고기온", 10, 33); /// 최대기온
const inputMinimumTemperatureDataBox = new OriginNumBox("minimumTemperatureData", "최저기온", -30, 10); /// 최저기온
const inputFineDustDataBox = new OriginNumBox( "fineDustData", "미세먼지", 0, 170 ); /// 미세먼지값 입력박스
const inputUltraFineDustDataBox = new OriginNumBox( "ultraFineDustData", "초미세먼지", 0, 100 ); /// 초미세먼지값 입력박스
const inputWindSpeedDataBox = new OriginNumBox( "windSpeedData", "풍속", 0, 50 ); /// 풍속값 입력박스
const inputPrecipitationDataBox = new OriginNumBox( "precipitationData", "강수량", 0, 100 ); /// 강수량값 입력박스
const inputRelativeHumidityDataBox = new OriginNumBox( "relativeHumidityData", "습도", 0, 100 ); /// 습도값 입력 박스
const inputco2ConcentrationDataBox = new OriginNumBox( "co2ConcentrationData", "이산화탄소", 0, 900 ); /// 이산화 농도 입력 박스

/***** 함수 선언 ******/

/// 인풋 넘버박스 초기값 랜덤주기 함수
const randomValue = (minValue, maxValue) => {
  return Math.floor( Math.random() * ( maxValue - minValue + 1 ) ) + minValue;
}

/// 인풋 넘버박스 실행 함수
const runInputBox = (...rest) => {
  rest.forEach(( inputItem )=>{
    inputItem.visualizeNumBox();
  });

  rest.forEach(( inputItem )=>{
    inputItem.changeValue();
  });
}

/// 인풋박스의 맨 처음 입력값 랜덤 생성
inputCelesiusDataBox.value = randomValue(7, 12);
inputMaximumTemperatureDataBox.value = randomValue(5, 15);
inputMinimumTemperatureDataBox.value = randomValue(5, 10);
inputFineDustDataBox.value = randomValue(20, 33);
inputUltraFineDustDataBox.value = randomValue(10, 30);
inputWindSpeedDataBox.value = randomValue(5, 10);
inputPrecipitationDataBox.value = randomValue(5, 20);
inputRelativeHumidityDataBox.value = randomValue(20, 36);
inputco2ConcentrationDataBox.value = randomValue(100, 200);


/// 인풋박스 실행
runInputBox( inputCelesiusDataBox, inputMaximumTemperatureDataBox, inputMinimumTemperatureDataBox,inputFineDustDataBox, inputUltraFineDustDataBox, inputWindSpeedDataBox, inputPrecipitationDataBox, inputRelativeHumidityDataBox, inputco2ConcentrationDataBox);

/// 초기화 버튼 이벤트
document.getElementById("resetBtn").addEventListener("click", ()=>{
  ///인풋넘버 입력값 초기화
  inputCelesiusDataBox.value = '0';
  inputMaximumTemperatureDataBox.value = '0';
  inputMinimumTemperatureDataBox.value = '0';
  inputFineDustDataBox.value = '0';
  inputUltraFineDustDataBox.value = '0';
  inputWindSpeedDataBox.value = '0';
  inputPrecipitationDataBox.value = '0';
  inputRelativeHumidityDataBox.value = '0';
  inputco2ConcentrationDataBox.value = '0';
  
  /// 인풋박스 시각화 & 체인지 이벤트 재실행
  runInputBox( inputCelesiusDataBox, inputMaximumTemperatureDataBox, inputMinimumTemperatureDataBox,inputFineDustDataBox, inputUltraFineDustDataBox, inputWindSpeedDataBox, inputPrecipitationDataBox, inputRelativeHumidityDataBox, inputco2ConcentrationDataBox);
});