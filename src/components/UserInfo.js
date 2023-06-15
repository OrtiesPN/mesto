export default class UserInfo {
    constructor( nameSelector, jobSelector, avatarSelector ) {
        this._profileNameElement = document.querySelector(nameSelector);
        this._profileJobElement = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
        
    }

    getUserInfo() {
        return { 
            user_name: this._profileNameElement.textContent,
            user_info: this._profileJobElement.textContent,
            user_avatar: this._avatarElement.src,
            user_id: this._userId
        }
    }

    setUserInfo({user_name, user_info, user_avatar, user_id}) {
        if (user_name) this._profileNameElement.textContent = user_name;
        if (user_info) this._profileJobElement.textContent = user_info;
        if (user_avatar) this._avatarElement.src = user_avatar;
        if (user_id) this._userId = user_id;
    }

    getUserId() {
        return this._userId;
    }
}