// リクエストパラメータのセット
const KEY = 'AIzaSyC8sC1CEQc0z7WvyyrsIJGsS_DIo4iwTeg';  // API KEY
let url = 'https://www.googleapis.com/youtube/v3/search?';  // API URL

// 動画を検索する
url += 'type=video';
// 検索結果に全てのプロパティを含む
url += '&part=snippet';
// 検索ワード
url += '&q=キヨ';
// Webページに埋め込み可能な動画のみを検索
url += '&videoEmbeddable=true';
// youtube.com 以外で再生できる動画のみに限定
url += '&videoSyndicated=true';
// 動画の最大取得件数
url += '&maxResults=6';
// API KEY
url += `&key=${KEY}`;

// HTMLが読み込まれてから実行する処理
$(function () {
    // youtubeの動画を検索して取得
    $.ajax({
        url: url,
        dataType: 'jsonp'
    }).done(function (data) {
        if (data.items) {
            setData(data);
        } else {
            console.log(data);
            alert('該当するデータが見つかりませんでした');
        }
    }).fail(function (data) {
        alert('通信に失敗しました');
    });
});

// データ取得が成功したときの処理
const setData = (data) => {
    let result = '';
    let video = '';
    // 動画を表示するHTMLを作る
    for (let i = 0; i < data.items.length; i++) {
        video = '<iframe src="https://www.youtube.com/embed/';
        video += data.items[i].id.videoId;
        video += '" allowfullscreen></iframe>';
        result += `<div class="video">${video}</div>`;
    }
    // HTMLに反映する
    $('#videoList').html(result);
};