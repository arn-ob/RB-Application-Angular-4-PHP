import { UUID } from 'angular2-uuid';

export class TimeDateID {
    // time return
    geTime() {
        const date = new Date();
        let time = date.getHours() + ''; // convert number to string and it will again use as string
        if (Number(time) >= 12) {
            const pm = Number(date.getHours()) - 12;
            time = pm + ':' + date.getMinutes() + ':' + date.getSeconds() + 'pm';
        } else {
            time = time + ':' + date.getMinutes() + ':' + date.getSeconds() + 'am';
        }
        return time;
    }

    // date return
    geDate() {
        const date = new Date();
        const presentDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
        return presentDate;
    }

    getRandomID() {
        const date = new Date();
        const uuid = UUID.UUID();
        // tslint:disable-next-line:max-line-length
        const id = date.getHours().toString() + date.getMinutes().toString() + date.getMilliseconds().toString() + uuid.split('-')[2];
        return id;
    }
}
