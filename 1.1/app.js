function createElement(type, props) {
  switch (type) {
    case "h1":
      return [document.createElement("h1")].map((element) => {
        Object.entries({ ...props, "data-id": "title" }).forEach(
          ([name, value]) => element.setAttribute(name, value)
        );
        return element;
      })[0];
    case "div":
      return [document.createElement("div")].map((element) => {
        Object.entries({ ...props, "data-id": "layout" }).forEach(
          ([name, value]) => element.setAttribute(name, value)
        );
        return element;
      })[0];
  }
}

// 변화가 생길 때
function createH1(props) {
  return [document.createElement("h1")].map((element) => {
    Object.entries({ ...props, "data-id": "title" }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  })[0];
}

function createDiv(props) {
  return [document.createElement("div")].map((element) => {
    Object.entries({ ...props, "data-id": "layout" }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  })[0];
}

function newCreateElement(type, props) {
  switch (type) {
    case "h1":
      return createH1(props);
    case "div":
      return createDiv(props);
  }
}

// 추가 했을 때 - switch문 제거
const creatorMap = {
  h1: createH1,
  div: createDiv,
}

function superCreateElement(type, props) {
  return creatorMap[type](props);
}


// 외부 의존성 제거
// 커링을 통해서 creatorMap 인자 받으면 클로저에 저장되어서 외부랑 연결 끊김
const coupler = map => (type, props) => map[type](props);
const wowCreateElement = coupler(creatorMap);