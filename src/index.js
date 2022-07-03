import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteTodo(inputText);
};

const addIncompleteTodo = (text) => {
  // divタグを作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
    addCompleteTodo(completeTarget);
  });

  // button（削除）タグを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

const addCompleteTodo = (target) => {
  // divタグを作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = target.children[0].innerText;

  // button（戻す）タグを作成
  target.removeChild(target.children[1]);
  target.removeChild(target.children[1]);
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    const incompleteTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(incompleteTarget);
    addIncompleteTodo(incompleteTarget.children[0].innerText);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(backButton);

  // 完了リストに追加
  document.getElementById("complete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
