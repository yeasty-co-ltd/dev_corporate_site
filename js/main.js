'use strict';

{
  //ハンバーガー対応
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
  });

  document.getElementById("btnSubmit").onclick = function() {
    const strName = document.getElementById("valName").value;
    const strCompName= document.getElementById("valCompName").value;
    const strMail= document.getElementById("valMail").value;
    const strTel = document.getElementById("valTel").value;
    const strContent = document.getElementById("valContent").value;

    //各テキストボックスの値が空欄であればエラーにする処理を入れる
    if(strName == "") {
      alert("お名前が入力されていません。");
      return false;
    }else if(strCompName == ""){
      alert("会社名が入力されていません。");
      return false;
    }else if(strMail == ""){
      alert("メールアドレスが入力されていません。");
      return false;
    }else if(strTel == ""){
      alert("電話番号が入力されていません。");
      return false;
    }else if(strContent == ""){
      alert("お問合せ内容が入力されていません。");
      return false;
    }else if(document.contactForm.valAgree.checked == false){
      alert("「個人情報保護規定に同意する」にチェックをしてください。");
      return false;
    }
    
  };

}
