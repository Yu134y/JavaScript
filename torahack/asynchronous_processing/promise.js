// 非同期処理を行う関数を宣言
const getGitUsername = () => {
    return new Promise((resolve, reject) => {
        const url = "https://github.com/users/Yu134y";

        // GitHub APIをFetchメソッドで実行
        fetch(url).then(res => res.json())
            .then(json => {
                console.log("これは非同期処理成功時のメッセージです");
                return resolve(json.login);
            }).catch(error => {
                console.log("これは非同期処理失敗時のメッセージです", error);
                return reject(null);
            });
    });
};

const message = "GitのユーザーIDは";
getGitUsername().then(username => {
    console.log(message + username);
});