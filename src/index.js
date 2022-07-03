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
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const completeTarget = completeButton.parentNode;
    document
      .getElementById("incomplete-list")
      .removeChild(completeButton.parentNode);

    addCompleteTodo(completeTarget);
  });

  const deleteButton = createButtonElement("削除");
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    document
      .getElementById("incomplete-list")
      .removeChild(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//完了リストへの追加
const addCompleteTodo = (target) => {
  const div = createDivElement();
  const li = createLiElement(target.firstChild.innerText);
  const backButton = createButtonElement("戻す");
  backButton.addEventListener("click", () => {
    const incompleteTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(incompleteTarget);
    addIncompleteTodo(incompleteTarget.firstChild.innerText);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(backButton);

  // 完了リストに追加
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

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
