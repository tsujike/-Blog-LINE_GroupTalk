/** メッセージが送付された際に、実行される関数 */
function doPost(e) {

  //1つのWebhookに1件のイベントオブジェクトと仮定して・・・
  const event = JSON.parse(e.postData.contents).events[0];

  const eventObject = JSON.stringify(event);
  GmailApp.sendEmail("", "eventの中身です", eventObject);


  // const eventType = event.type;

  // switch (eventType) {
  //   case "message":
  //     recieveMessage(event);
  //     break;
  //   case "follow":
  //     recieveFollow(event);
  //     break;
  //   case "unfollow":
  //     recieveUnfollow(event);
  //     break;
  //   case "postback":
  //     recievePostback(event);
  //     break;
  // }

}



