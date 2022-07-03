import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteTodo(inputText);
};

//未完了リストへの追加
const addIncompleteTodo = (text) => {
  const div = createDivElement();
  const li = createLiElement(text);

  const completeButton = createButtonElement("完了");
  completeButton.addEventListener("click", () => {
    deleteFromList("incomplete-list", completeButton.parentNode);
    addCompleteTodo(completeButton.parentNode);
  });

  const deleteButton = createButtonElement("削除");
  deleteButton.addEventListener("click", () => {
    deleteFromList("incomplete-list", completeButton.parentNode);
  });

  setChildrenNode(div, [li, completeButton, deleteButton]);
  document.getElementById("incomplete-list").appendChild(div);
};

//完了リストへの追加
const addCompleteTodo = (target) => {
  const div = createDivElement();
  const li = createLiElement(target.firstChild.innerText);

  const backButton = createButtonElement("戻す");
  backButton.addEventListener("click", () => {
    deleteFromList("complete-list", backButton.parentNode);
    addIncompleteTodo(backButton.previousElementSibling.innerText);
  });

  setChildrenNode(div, [li, backButton]);
  document.getElementById("complete-list").appendChild(div);
};

// divタグを作成
const createDivElement = () => {
  const div = document.createElement("div");
  div.className = "list-row";
  return div;
};

// liタグを生成
const createLiElement = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
};

// buttonタグを生成
const createButtonElement = (title) => {
  const button = document.createElement("button");
  button.innerText = title;
  return button;
};

// listからTODOを削除
const deleteFromList = (element, target) => {
  document.getElementById(element).removeChild(target);
};

// divタグの子要素に各要素を設定
const setChildrenNode = (element, children) => {
  return children.map((child) => {
    return element.appendChild(child);
  });
};

document.getElementById("add-button").addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    onClickAdd();
  },
  { passive: false }
);
