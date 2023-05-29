export default class UserInfo {
    constructor( nameSelector, jobSelector ) {
        this._profileNameElement = document.querySelector(nameSelector);
        this._profileJobElement = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return { user_name: this._profileNameElement.textContent, user_info: this._profileJobElement.textContent }
    }

    setUserInfo(data) {
        this._profileNameElement.textContent = data.user_name;
        this._profileJobElement.textContent = data.user_info;
    }
}