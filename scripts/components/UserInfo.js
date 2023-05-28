export default class UserInfo {
    constructor( {nameSelector, jobSelector} ) {
        this._profileNameElement = document.querySelector(nameSelector);
        this._profileJobElement = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return { name: this._profileNameElement.textContent, job: this._profileJobElement.textContent }
    }

    setUserInfo(data) {
        this._profileNameElement.textContent = data.name;
        this._profileJobElement.textContent = data.job;
    }
}