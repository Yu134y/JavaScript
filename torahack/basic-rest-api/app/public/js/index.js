const indexModule = (() => {
    const path = location.pathname;

    switch (path) {
        case '/':
            // 検索ボタンをクリックしたときのイベントリスナー設定
            document.getElementById('search-btn').addEventListener('click', () => {
                return searchModule.searchUsers();
            });
            // UsersモジュールのfetchAllUsersメソッドを呼び出す
            return usersModule.fetchAllUsers();
        case '/create.html':
            document.getElementById('save-btn').addEventListener('click', () => {
                return usersModule.createUser();
            });
            document.getElementById('cancel-btn').addEventListener('click', () => {
                return location.href = '/';
            });
            break;

        case '/edit.html':
            const uid = location.search.split('?uid=')[1];

            document.getElementById('save-btn').addEventListener('click', () => {
                return usersModule.saveUser(uid);
            });
            document.getElementById('cancel-btn').addEventListener('click', () => {
                return location.href = '/';
            });
            document.getElementById('delete-btn').addEventListener('click', () => {
                return usersModule.deleteUser(uid);
            });

            return usersModule.setExistingValue(uid);
        default:
            break;
    }
})();